import { Router } from "express";
import userController from "./controllers/userController.js";
import furnitureController from "./controllers/furnitureController.js";

const routes = Router();

routes.use(userController);
routes.use("/data/catalog", furnitureController);

export default routes;