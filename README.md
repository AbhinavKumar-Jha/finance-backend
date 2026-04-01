Markdown
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
- **Analytics API:** High-performance data aggregation using **MongoDB Aggregation Pipelines** for real-time dashboard summaries.

## 🛠 Tech Stack
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB (Mongoose ODM)
- **Auth:** JSON Web Tokens (JWT) & Bcrypt.js

---

## ⚙️ Setup Instructions

### 1. Install Dependencies
```bash
# Navigate to the project folder
cd finance-backend
# Install required packages
npm install
2. Configure Environment Variables
Create a file named .env in the root directory and add the following configuration:

Plaintext
PORT=5000
MONGO_URI=mongodb://localhost:27017/finance_db
JWT_SECRET=zorvyn_internship_task_secret_2026
3. Start the Backend
Bash
# To run in development mode (with nodemon)
npm run dev

# To run in production mode
npm start
The server will start at http://localhost:5000

🧪 API Testing Guide (Postman)
To verify the logic, follow these steps in order:

Step 1: Register an Admin
Method: POST

URL: http://localhost:5000/api/auth/register

Body (JSON): ```json
{
"name": "Abhinav Admin",
"email": "admin@zorvyn.com",
"password": "password123",
"role": "admin"
}

- **Action:** Copy the `token` from the response.

### Step 2: Add a Financial Record
- **Method:** `POST`
- **URL:** `http://localhost:5000/api/records`
- **Headers:** `Authorization`: `Bearer <YOUR_TOKEN>`
- **Body (JSON):**
```json
{
  "amount": 10000,
  "type": "income",
  "category": "Project Payment",
  "description": "Zorvyn Task Milestone"
}
Step 3: Get Dashboard Summary (Analytics)
Method: GET

URL: http://localhost:5000/api/records/summary

Headers: Authorization: Bearer <YOUR_TOKEN>

Result: Displays calculated Total Income, Expenses, and Net Balance.

Step 4: Access Control Test
Register a user with the role "viewer". Attempting to access the summary route with the Viewer's token will return:
{ "message": "Forbidden: You need admin/analyst permissions." }

📂 Project Structure
Plaintext
src/
├── controllers/ # Auth & Record business logic
├── middleware/  # JWT Auth & RBAC guards
├── models/      # Mongoose User & Record Schemas
├── routes/      # API Endpoint definitions
└── app.js       # Main entry point & DB connection
Developed by Abhinav Kumar Jha for the Zorvyn Backend Assignment.


---

### After you paste it:
1. **Save** the file in VS Code.
2. Open the **terminal** in VS Code.
3. Run these three commands to update your GitHub:
   ```bash
   git add README.md
   git commit -m "Update README with full documentation"
   git push origin main