import {Request, Response} from "express";
import {authService} from "../services/auth-service";
import {HTTP_STATUSES} from "../http_statuses";

export const logger = {
    time: new Date().toLocaleTimeString(),
    debug(val: any) {
        console.log(`${this.time} DEBUG: ${JSON.stringify(val)}`)
    },


}