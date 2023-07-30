import mongoose from "mongoose";
import {
    AccountDataType, AnswersType, ApiRequestControlType,
    BlogResponseType,
    EmailConformationType,
    PostResponseType, QuestionsType, SessionType, TestManagementType,
    UserFromDBType
} from "../types/types";
import {testManagementModel} from "../../mongoDB";

export const blogSchema = new mongoose.Schema<BlogResponseType>({
    id: String,
    isMembership: Boolean,
    createdAt: String,
    name: String,
    description: String,
    websiteUrl: String,
}, {_id: false})

export const postSchema = new mongoose.Schema<PostResponseType>({
    id: String,
    blogId: String,
    blogName: String,
    createdAt: String,
    title: String,
    shortDescription: String,
    content: String,
})

const accountDataSchema = new mongoose.Schema<AccountDataType>({
    userName: String,
    email: String,
    createdAt: String,
    hash: String,
    salt: String,
})

const emailConformationSchema = new mongoose.Schema<EmailConformationType>({
    confirmationCode: String,
    expirationDate: Date,
    isConfirmed: Boolean
})

export const userSchema = new mongoose.Schema<UserFromDBType>({
    id: String,
    accountData : accountDataSchema,
    emailConformation : emailConformationSchema,
})

export const commentsSchema = new mongoose.Schema<any>({ //исправить any
    userName: String,
    email: String,
    createdAt: String,
    hash: String,
    salt: String,
})

const requestControlSchema = new mongoose.Schema<any>({ //исправить any
    lastEntryDate: Date,
    endpoint: String,
    amountTry: Number,
})

export const apiRequestControlSchema = new mongoose.Schema<any>({ //исправить any
    api: String,
    requestControl: [requestControlSchema]
})

export const sessionsSchema = new mongoose.Schema<SessionType>({
    ip: String,
    title: String,
    lastActiveDate: String,
    deviceId: String,
})
const answersSchema = new mongoose.Schema<AnswersType>({
    answer: String,
    id: String
})

const questionsSchema = new mongoose.Schema<QuestionsType>({
    questionNumber: String,
    question: String,
    id: String,
    answers: [answersSchema]
})

export const testManagementSchema = new mongoose.Schema<any>({
   ownerID: String,
   testList: [{
        title: String,
        testId: String,
        questions: [questionsSchema]
    }]
})