# 🔐 JWT Login Auth System (Node.js + MySQL)

A secure user authentication backend using **Node.js**, **Express**, **MySQL**, and **JWT**.  
It allows users to **register** and **log in**, returning a signed **JWT token** for protected routes.

---

## 🚀 Features

- ✅ User registration with hashed passwords using bcrypt
- ✅ Login system with JWT token generation
- ✅ Environment variable support using `.env`
- ✅ Modular MVC folder structure
- ✅ Optional JWT middleware for route protection

---

## ⚙️ Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** MySQL (with mysql2 promise-based client)  
- **Security:** bcrypt, jsonwebtoken  
- **Environment:** dotenv  

---

## 🛠️ Setup Instructions

### 1️⃣ Clone and Install Dependencies

```bash
git clone https://github.com/PratikTiwari05/jwt_login_auth.git
cd jwt_login_auth
npm install


2️⃣ Create .env file in project root:
env
Copy
Edit
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=jwt_login
DB_PORT=3306
JWT_SECRET=myyatraguide_secret_key

🧪 API Endpoints
🔸 Register
http
Copy
Edit
POST /api/auth/register
🔸 Login
http
Copy
Edit
POST /api/auth/login


🧾 Folder Structure
bash
Copy
Edit
jwt_login_auth/
│
├── app.js                  # Entry point
├── db.js                   # MySQL config with pool
├── .env                    # Secret credentials
├── .gitignore
├── README.md
│
├── routes/
│   └── auth.js             # Login/Register routes
│
├── controllers/
│   └── authController.js   # Auth logic
│
├── middleware/
│   └── authMiddleware.js   # JWT verification


🙋‍♂️ Author & Contact
👨‍💻 Pratik Tiwari
GitHub: @PratikTiwari05
Email: pratik12122005@gmail.com 
