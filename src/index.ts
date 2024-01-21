require('dotenv').config();
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
const app = express();

const PORT = process.env.PORT || 3001;

app.use(morgan('dev'))
app.use(cors())

app.listen(PORT)
console.log(`Server in listening on port ${PORT} `);

