import { StatusCodes } from "http-status-codes";
import { asyncWrapper } from "../../middleware/index.js";
import {
  ApiError,
  ApiRes,
  deleteFromCloudinary,
} from "../../utils/index.js";
import { Blog } from "../../models/index.js";

export const deleteBlog = asyncWrapper(async (req, res) => {
  const { slug } = req.params;
  if (!slug) {
    throw new ApiError(StatusCodes.BAD_REQUEST, "Please Provide Slug");
  }
  let blog = await Blog.findOne({ slug }).populate("user");
  if (!blog) {
    throw new ApiError(StatusCodes.NOT_FOUND, "Blog Not Found");
  }
  if (blog.user.username !== req.user.username) {
    throw new ApiError(
      StatusCodes.FORBIDDEN,
      "You are not the owner of this blog"
    );
  }
  const result = await deleteFromCloudinary(blog.thumbnailID);
  if (!result) {
    throw new ApiError(
      StatusCodes.INTERNAL_SERVER_ERROR,
      "Failed to delete blog Thumbnail"
    );
  }
  blog = await Blog.findByIdAndDelete(blog._id, { new: true }).populate(
    "user",
    "username name"
  );
  res
    .status(StatusCodes.OK)
    .json(new ApiRes(StatusCodes.OK, blog, "Blog Deleted Successfully"));
});
