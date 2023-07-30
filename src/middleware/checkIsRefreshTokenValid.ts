import {NextFunction, Request, Response} from "express";
import {HTTP_STATUSES} from "../http_statuses";
import {jwtService} from "../application/jwt-service";
import {sessionsRepository} from "../repositories/sessions-repository";


export const checkIsRefreshTokenValid = async (req: Request, res: Response, next: NextFunction) => {
    const {refreshToken} = req.cookies;

    if (!refreshToken) {
        return res.sendStatus(HTTP_STATUSES.UNAUTHORIZED_401);
    }
    const decodedToken = await jwtService.decodeReFreshToken(refreshToken.refreshToken)

    if (!decodedToken) {
        return res.sendStatus(HTTP_STATUSES.UNAUTHORIZED_401);
    }
    const {deviceId, lastUpdateDate} = decodedToken

    const isHaveSession = await sessionsRepository.getAllUserSessions({deviceId})

    if(!isHaveSession.length || isHaveSession[0].lastUpdateDate !== lastUpdateDate){
        return res.sendStatus(HTTP_STATUSES.UNAUTHORIZED_401);
    }
    return  next();
};