import {Request, Response} from "express";
import {HTTP_STATUSES} from "../http_statuses";
import {testManagementService} from "../services/testManagement-service";
import {jwtService} from "../application/jwt-service";
import {logger} from "../utils/logger";

export const testManagementController = {

    async add(req: Request, res: Response) {

        if (!req.headers.authorization) {
            res.sendStatus(HTTP_STATUSES.UNAUTHORIZED_401)
            return
        }

        const token = req.headers.authorization.split(' ')[1]
        const userID = await jwtService.getUserIdByToken(token)

        await testManagementService.add(req.body, userID)
        res.sendStatus(HTTP_STATUSES.OK200)
    },

}