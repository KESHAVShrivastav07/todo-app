
# Todo App Backend 📝

A simple Todo App backend built using **Node.js, Express, and MongoDB**.  
This project provides REST APIs to create and manage todo tasks.

---

## 🚀 Features
- Create a new todo
- MongoDB database integration
- RESTful API structure
- Clean folder architecture (MVC pattern)

---

## 🛠 Tech Stack
- Node.js
- Express.js
- MongoDB
- Mongoose
- Dotenv
- Nodemon

---

## 📂 Project Structure
todo-app/
│── config/
│ └── database.js
│── controllers/
│ └── createTodo.js
│── models/
│ └── todo.js
│── routes/
│ └── todo.js
│── .env
│── server.js
│── package.json
│── README.md


---

## ⚙️ Installation & Setup

1. Clone the repository
```bash
git clone https://github.com/KESHAVShrivastav07/todo-app.git
cd todo-app
npm install
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/todoapp
npm run dev


API Endpoints
➤ Create Todo

POST /api/todo/create

Request Body

{
  "title": "Learn Node.js"
}


Response

{
  "_id": "...",
  "title": "Learn Node.js",
  "completed": false
}

🧑‍💻 Author

Keshav Shrivastav

📄 License

This project is open-source and free to use.


---

## 🔹 README push ka command
```bash
git add README.md
git commit -m "update README documentation"
git push
