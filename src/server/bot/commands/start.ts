import TelegramBot from "node-telegram-bot-api"
import { Account } from "../../db/models";

export const StartCMD = async (msg: TelegramBot.Message) => {
	try {
		const accoucn = await Account.findById(msg.chat.id);
		if (!accoucn) {
			const newAcc = new Account({
				_id: msg.chat.id
			});
			await newAcc.save();
		}
	} catch (err) {
		console.error(err);
		throw err;
	}
}
