import express from 'express'
import dotenv from "dotenv";
import connectDB from './src/db/index.js'
import cors from 'cors'
import bcrypt from "bcrypt"
import jwt  from 'jsonwebtoken';
import UserRoutes from "./src/routes/user.route.js"
import courseRoute from "./src/routes/course.routes.js";
import studentRoute from "./src/routes/student.routes.js";
dotenv.config()



const app = express()
app.use(express.json())
// app.use(cors())


app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  app.use("/api/v1",UserRoutes)
  app.use("/api/v1", courseRoute)
  app.use("/api/v1", studentRoute)



connectDB()
.then(()=>{
    app.listen(process.env.PORT, () => {
        console.log(`⚙️  Server is running at port : ${process.env.PORT}`);
      });
})
.catch((err)=>{
    console.log("MONGO DB connection failed !!! ", err);
})