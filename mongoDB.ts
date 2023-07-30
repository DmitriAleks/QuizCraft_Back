import dotenv from 'dotenv'
import * as mongoose from "mongoose";
import {
    sessionsSchema, testManagementSchema,
    userSchema
} from "./src/schemas/schemas";

dotenv.config()

const nameDB = "QuizCraft"
const mongoURi = `mongodb+srv://dimaaleks943:AdB7QJrdw9zyOLUY@cluster0.kv7bgcj.mongodb.net/${nameDB}?retryWrites=true&w=majority`

export const userModel = mongoose.model('users', userSchema);
export const sessionsModel = mongoose.model('sessions', sessionsSchema);
export const testManagementModel = mongoose.model('testsList', testManagementSchema);

export async function runDB() {
    try {
        await mongoose.connect(mongoURi);
    } catch {
        await mongoose.disconnect()
    }
}