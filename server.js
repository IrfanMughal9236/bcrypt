import express from 'express'
import colors from 'colors'
import router from './routers/authRouter.js'
import dbConnection from './config/dbCon.js'
import Schema from './models/userSchema.js'
dbConnection()

 
const app = express()

app.use(router)

app.use(express.json())


const port =  1100

app.listen(port,()=>{
    console.log(`server is started ${port} PORT`.bgMagenta);
})