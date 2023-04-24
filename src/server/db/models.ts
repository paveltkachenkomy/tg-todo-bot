import mongoose from "mongoose";
import { AccountSchema } from "./schemas";
import IAccount from "../../common/account";

export const Account = mongoose.model<IAccount>("Account", AccountSchema);
