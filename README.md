
# HiveTips: Multi-Tenant Web App for Tips and Tricks

## Overview

**HiveTips** is a feature-rich web application designed to allow users to share, read, and interact with a variety of helpful tips and tricks. The application features several categories such as **Kitchen Tips**, **DIY Tips**, **Dressing Tips**, and **Miscellaneous Tips**. Users can upload tips in different categories, and administrators have full control over user roles, permissions, and content management.

Built with a modern tech stack including **Next.js**, **Node.js**, **Express**, **MongoDB**, **Cloudinary**, and **Multer**, HiveTips provides a seamless, secure, and scalable platform. This multi-tenant architecture ensures that each tenant (user group or organization) can maintain their own set of tips while having shared access to global features.

## Tech Stack

* **Frontend:** Next.js (React-based framework)
* **Backend:** Node.js with Express (for API and server logic)
* **Database:** MongoDB (to store tips, users, roles, and permissions)
* **File Storage:** Cloudinary (for managing image and video uploads)
* **File Handling:** Multer (for handling file uploads and storage)
* **Authentication:** JWT (JSON Web Tokens) for secure login, cookies for session management
* **Security:** bcrypt for password hashing, helmet for security headers

## Features

### 1. **Multi-Tenant Architecture**

HiveTips allows multiple tenants (groups, organizations, or users) to create, manage, and share their own tips. Tenants can be isolated from one another, ensuring that one tenant's data does not interfere with another's. Each tenant has its own set of users, roles, and permissions.

### 2. **Role-Based Access Control (RBAC)**

The app supports a flexible role-based access control system to manage user access and permissions:

* **Admin:** Full access to manage users, roles, categories, and tips. Admins can also add/remove permissions for users.
* **Contributor:** Users who can create, update, and delete tips in their own tenant.
* **Reader:** Users who can view tips but cannot create or modify them.
* **Custom Roles:** Admins can create custom roles with specific permissions for their tenants.

### 3. **Tip Categories**

HiveTips organizes tips into the following categories for easy access:

* **Kitchen Tips**
* **DIY Tips**
* **Dressing Tips**
* **Miscellaneous Tips**

Each category allows users to add, edit, or delete tips as per their permissions.

### 4. **User Authentication and Secure Sessions**

* **Sign Up / Log In:** Secure registration and login functionality using JWT (JSON Web Tokens).
* **Session Management:** Cookies store the user session securely for consistent authentication throughout the app.
* **Role-Based Security:** Different user roles are authenticated and authorized to perform actions based on their role and permissions.

### 5. **Media Upload (Images, Videos, and Files)**

* **Cloudinary Integration:** Users can upload media (images, videos, etc.) to Cloudinary for secure storage and optimization.
* **Multer for File Handling:** The backend uses Multer to handle file uploads and store them securely.

### 6. **Admin Dashboard**

Admins have access to a comprehensive dashboard that allows:

* **User Management:** Add, remove, and modify users across different tenants.
* **Role Management:** Define roles and set permissions for different types of users.
* **Category Management:** Create and delete categories to organize tips.
* **Tenant Management:** Admins can manage multiple tenants and configure their settings.

### 7. **Search and Filters**

* Users can search and filter tips by category, keywords, and relevance.
* Admins can also filter tips within the admin panel to manage content effectively.

### 8. **Responsive Design**

The platform is designed to be fully responsive, ensuring a smooth experience across desktops, tablets, and mobile devices.

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Priyanka-Das-0/HiveTips/tree/main
cd HiveTips
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root of the project and add the following environment variables:

```bash
MONGODB_URI=mongodb://localhost:27017/hivetips
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### 4. Run the Development Server

```bash
npm run dev
```

This will start the development server on `http://localhost:3000`.



 
