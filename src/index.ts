require("dotenv").config();
import app from "./app";


const PORT = process.env.PORT;



app.listen(3000)
console.log(`Server in listening on port ${PORT} `);

