import {sessionsRepository} from "../repositories/sessions-repository";
import {jwtService} from "../application/jwt-service";
import {securityDevicesModel} from "../models/securityDevices-model";


export const securityDevicesService = {

    async getActiveSessions(token: string) {
       const decodedToken = await jwtService.decodeReFreshToken(token)
        if(decodedToken){
            const {userId} = decodedToken
            const filter = {userId}
            const sessions =  await sessionsRepository.getAllUserSessions(filter)
            return securityDevicesModel(sessions)
        }
      return null
    },

    async removeOtherSessions(refreshToken: string) {
         const decodedToken = await jwtService.decodeReFreshToken(refreshToken)
         if(decodedToken){
             const {userId, deviceId} = decodedToken
             const filter = {userId, deviceId : { $ne: deviceId }}
             return await sessionsRepository.removeOtherSessions(filter)
        }
         return null
    },

    async removeSession(deviceId: string, userId: string): Promise<string> {
        const filter = {deviceId}
        const session = await sessionsRepository.getSession(filter)

        if(!session){
            return 'not_found'
        }
        if(session.userId !== userId){
            return 'forbidden'
        }
        await sessionsRepository.removeSession(filter)
        return 'success'
    },

}