import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import "reflect-metadata"
import userRoute from "./routes/user.router"

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());


app.use(userRoute)




export default app;