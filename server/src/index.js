import express from "express";
import routes from "./routes.js";
import mongoose from "mongoose";

import cors from "cors";
//import { corsMiddleware } from "./middlewares/cors.js";

try {
    await mongoose.connect("mongodb://localhost:27017", {dbName: "furniture"});
    console.log("DB connected successfully!");
} catch (error) {
    console.log("Cannot connect to DB!");
}

const app = express();

app.use(express.json());

//app.use(corsMiddleware); 
app.use(cors()); //Cors library(by default everything is allowed)

app.use(routes);

app.listen(3030, () => console.log("App is listening on port http://localhost:3030"));
