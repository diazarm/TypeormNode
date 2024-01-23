import "reflect-metadata"
require("dotenv").config();
import app from "./app";
import {AppDataSource} from "./db"
require("dotenv").config();

const {DB_NAME} = process.env;
const port = 3000;

async function main(){
    try {
        await AppDataSource.initialize()
        console.log(`db ${DB_NAME} connection OK`);
        
        app.listen(port, ()=>{
            console.log(`Server in listening on port ${port}`);
        })
    } catch (error) {
        console.error("Initialization error", error)
    }
   
}

main()


