import {Router} from "express";
import {authController} from "../controllers/auth-controller";
import {inputValidationMiddleware} from "../middleware/input-validation-middleware";
import {
    authValidation,
    checkIsValidUser,
} from "../validators/auth-validation";
import {authMiddleware} from "../middleware/authMiddleware";
import {DDOSControlMiddleware} from "../middleware/DDOSControlMiddleware";


export const authRouter = Router({})

//-------------------GET---------------//
authRouter.get('/me', authMiddleware, authController.getMe)
//-------------------POST---------------//
authRouter.post('/login', authValidation, DDOSControlMiddleware, checkIsValidUser, inputValidationMiddleware, authController.authorization)


