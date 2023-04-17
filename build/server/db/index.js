"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// Подключение к MongoDB
const mongodbUri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/tg-todo-bot";
const db = mongoose_1.default.connect(mongodbUri);
db.then(() => {
    console.info("MongoDB conneted");
})
    .catch((err) => {
    console.error(err);
    throw err;
});
exports.default = db;
