import express from "express";
import cors from "cors";
import path from "path";

const api = express();

api.use(cors());
api.use(express.json());
api.use(express.urlencoded({extended: false}));

api.use(express.static(path.resolve(__dirname, "../../client")));

// Маршрутизация

// Запуск сервера
const port = process.env.PORT || 5000;
const server = api.listen(port);

server.on("listening", () => {
	console.info(`Server running on port ${port}`)
});

server.on("error",(err: {syscall: string, code: string}) => {
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


export default api;
