import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import router from './routes/index'
import dbConnection from './dbConnection'
const app = express()
require('dotenv').config()
const port = process.env.PORT || 3000
app.use(cors())
app.use(cookieParser())
app.use(bodyParser.json())
app.use(router)

app.listen(port, ()=>{
    dbConnection()
    console.log(`Server is running on port ${port}`)
})