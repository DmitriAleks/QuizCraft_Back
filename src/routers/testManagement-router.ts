import {Router} from "express";
import {testManagementController} from "../controllers/testManagement-controller";

export const testManagementRouter = Router({})


//-------------------POST---------------//
testManagementRouter.post('/save',  testManagementController.add)


