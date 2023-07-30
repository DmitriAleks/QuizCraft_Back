import {userRepository} from "../repositories/user-repositpry";
import {testManagementRepository} from "../repositories/testManagement-repository";
import {jwtService} from "../application/jwt-service";


export const testManagementService = {

    async add(test: any, userID: string) {
        await testManagementRepository.add(test, userID)
    },
}