import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

import {authRouter} from "./src/routers/auth-router";
import {securityDevicesRouter} from "./src/routers/securityDevices-router";
import {testManagementRouter} from "./src/routers/testManagement-router";

export const app = express()

//---USE---//
app.set('trust proxy', true)
app.use(bodyParser.json())
app.use(cookieParser())
app.use('/auth', authRouter)
app.use('/test', testManagementRouter)
app.use('/security/devices', securityDevicesRouter)


