import express from "express";
import routes from "./routes.js";

import cors from "cors";
//import { corsMiddleware } from "./middlewares/cors.js";

const app = express();

//app.use(corsMiddleware); 
app.use(cors()); //Cors library(by default everything is allowed)

app.use(routes);

app.listen(3030, () => console.log("App is listening on port http://localhost:3030"));
