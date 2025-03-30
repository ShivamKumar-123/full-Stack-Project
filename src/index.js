// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
// import mongoose, { connect } from "mongoose"
// import {DB_NAME} from "./constants";
import connectDB from "./db/index.js";













dotenv.config({
    path:'./env'
})



connectDB()












































/*
import express from "express"
const app = express();

( async()=>{
    try{

        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error",(error)=>{ // listner if our express is not able to talk with the db 
            console.log("Not able to talk to db");
            throw error;
        })
        app.listen(process.env.PORT,()=>{
            console.log(`App is listing on port : ${process.env.PORT}`)
        });

    } catch(error){
        console.log("Error:",error);
        throw error;
    }
})();
*/