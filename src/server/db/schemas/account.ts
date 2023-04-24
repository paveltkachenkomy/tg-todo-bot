import mongoose from "mongoose";
import IAccount from "../../../common/account";

export const AccountSchema = new mongoose.Schema<IAccount>({
	_id: {
		type: Number,
		require: true
	}
}, {
	collection: "accounts",
	_id: false,
	timestamps: false,
	versionKey: false
});
