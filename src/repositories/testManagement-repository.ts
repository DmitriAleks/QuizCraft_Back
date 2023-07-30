import {testManagementModel} from "../../mongoDB";
import {UserFromDBType} from "../types/types";
import {log} from "util";


export const testManagementRepository = {

    async add(test: any, userID: string): Promise<any> {
        const owner = testManagementModel.findOne({ownerID: userID});
        //@ts-ignore
        console.log(owner.testList)
        //@ts-ignore
        if (owner.ownerID) {
            //const testToUpdate = owner.testList.find(test => test.testId === test.id);
            return testManagementModel.updateOne(
                {owner: userID, 'tests.id': test.testId},
                {$set: {'tests.$.title': test.title, questions: test.questions}}
            );
        } else {
            return testManagementModel.updateOne(
                {owner: userID},
                {$push: {tests: {id: test.testId, title: test.title, questions: test.questions}}}
            );
        }

    },

}