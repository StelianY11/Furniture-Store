import { Router } from "express";
import userController from "./controllers/userController.js";

const routes = Router();

routes.use(userController);

routes.get('/data/catalog', (req, res) => {
    res.json([]);
});


export default routes;