import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

import authRouter from "./routes/auth.route.js"
import messageRouter from "./routes/message.route.js"
import userRouter from './routes/user.route.js'
import connMongoDB from './db/connMongo.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// app.use(cors())
app.use(express.json())
app.use(cookieParser())

app.use('/api/auth', authRouter)
app.use('/api/message', messageRouter)
app.use('/api/users', userRouter)


app.get('/', (req, res) => {
    res.send('Hello Herin! :)')
})

app.listen(PORT, () => {
    connMongoDB()
    console.log(`server start on port ${PORT}`);
})
