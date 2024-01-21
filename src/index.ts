import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.listen(PORT)
console.log(`Server in listening on port ${PORT} `);

