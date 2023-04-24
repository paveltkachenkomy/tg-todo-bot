import TelegramBot from "node-telegram-bot-api";
import { StartCMD } from "./commands";

// Запуск бота
const botToken = process.env.TELEGRAM_BOT_TOKEN || "";
const bot = new TelegramBot(botToken, {
	polling: true
});

// Маршрутизация команд
bot.onText(/\/start/, StartCMD);

export default bot;