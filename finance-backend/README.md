# Finance Data Processing & Access Control Backend

## 📌 Project Objective
A robust Node.js/Express backend designed for managing financial records with a focus on **Role-Based Access Control (RBAC)**, data security, and summary analytics. This system ensures that financial data is handled securely and is only accessible by authorized users based on their assigned roles.

## 🚀 Features
- **User Management:** Secure Registration and Login with encrypted passwords.
- **RBAC (Role-Based Access Control):**
  - **Admin:** Full CRUD access (Create, Read, Update, Delete) and Dashboard Summary.
  - **Analyst:** View all records and access Dashboard Analytics.
  - **Viewer:** Read-only access to records (Restricted from summaries or any data modification).
- **Security:** Stateless authentication using **JSON Web Tokens (JWT)** and industry-standard **Bcrypt.js** password hashing.
- **Analytics API:** High-performance data aggregation using **MongoDB Pipelines** for real-time dashboard summaries.

## 🛠 Tech Stack
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB (Mongoose ODM)
- **Auth:** JSON Web Tokens (JWT) & Bcrypt.js

---

## ⚙️ Setup Instructions

### 1. Clone & Install
```bash
# Extract the project folder
cd finance-backend
npm install


### 1. Start the Backend
```bash
# To run in development mode (recommended for testing)
npm run dev

# To run in production mode
npm start