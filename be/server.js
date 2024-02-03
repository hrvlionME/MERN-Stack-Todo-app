import express from 'express'
import cors from 'cors'
import { mainRouter } from './routes/main.js';

const app = express()
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use('/', mainRouter);
app.listen(4000, () => {console.log("Server running on port 4000")})

