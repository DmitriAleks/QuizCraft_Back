import {sessionsModel} from "../../mongoDB";


export const sessionsRepository = {

    async getAllUserSessions(filter: any): Promise<any> {
        return sessionsModel.find(filter).lean();
    },

    async getSession(filter: any): Promise<any> {
        return sessionsModel.findOne(filter);
    },

    async addedSession(session: any) {
        await sessionsModel.insertMany(session)
    },

    async updateSession(filter: any, session: any) {
        await sessionsModel.updateOne(filter, session)
    },

    async removeSession(filter: any):Promise<void> {
       await sessionsModel.deleteOne(filter)
    },

    async removeOtherSessions(filter: any) {
        const result = await sessionsModel.deleteMany(filter)
        return result.deletedCount >= 1
    },

    async removeAllSessions() {
        await sessionsModel.deleteMany({})
    },

}