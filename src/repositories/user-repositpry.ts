import {userModel} from "../../mongoDB";
import {UserFromDBType} from "../types/types";


export const userRepository = {

    async getAllUsers(filter: any, sort: any, skip: any, limit: any): Promise<UserFromDBType[]> {
        return userModel.find(filter).sort(sort).skip(skip).limit(limit).lean(); // вернуть сортировку
    },

    async getUserByFilter(filter: any): Promise<UserFromDBType | null> {
        return userModel.findOne(filter);
    },

    async getTotalCount(filter: any): Promise<number> {
        return userModel.countDocuments(filter);
    },

    async createUser(newUser: any): Promise<void> {
        await userModel.insertMany(newUser)
    },

    async changeUser(id: { id: string }, update: { $set: any }){
        const result = await userModel.updateOne(id, update)
        return (result.matchedCount === 1);
    },

    async deleteUser(filter: any): Promise<boolean> {
        const result = await userModel.deleteOne(filter)
        return result.deletedCount === 1
    },

    async deleteAllUser(): Promise<void> {
        await userModel.deleteMany({})
    }
}