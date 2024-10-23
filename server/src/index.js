import express from "express";
import routes from "./routes.js";
import { corsMiddleware } from "./middlewares/cors.js";

const app = express();

app.use(corsMiddleware);

app.use(routes);

app.listen(3030, () => console.log("App is listening on port http://localhost:3030"));
