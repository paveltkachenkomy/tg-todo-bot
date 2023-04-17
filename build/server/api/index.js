"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const api = (0, express_1.default)();
api.use((0, cors_1.default)());
api.use(express_1.default.json());
api.use(express_1.default.urlencoded({ extended: false }));
api.use(express_1.default.static(path_1.default.resolve(__dirname, "../../client")));
// Запуск сервера
const port = process.env.PORT || 5000;
const server = api.listen(port);
server.on("listening", () => {
    console.info(`Server running on port ${port}`);
});
server.on("error", (err) => {
    if (err.syscall !== "listen") {
        throw err;
    }
    switch (err.code) {
        case "EACCES":
            console.error("Requires elevated privileges");
            process.exit(1);
        case "EADDRINUSE":
            console.error("Port is already in use");
            process.exit(1);
        default:
            throw err;
    }
});
exports.default = api;
