import express from 'express'
import * as mainController from '../controllers/main.js'

export const mainRouter = express.Router()

mainRouter.get("/", mainController.loadContent)
mainRouter.post("/", mainController.postContent)
mainRouter.post("/delete", mainController.deleteContent)