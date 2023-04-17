import mongoose from "mongoose";

// Подключение к MongoDB
const mongodbUri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/tg-todo-bot";
const db = mongoose.connect(mongodbUri);
db.then(() => {
	console.info("MongoDB conneted");
})
.catch((err) => {
	console.error(err);
	throw err;
});

export default db;