import { Router } from "express";

const routes = Router();

routes.get('/data/catalog', (req, res) => {
    res.send("It works");
});


export default routes;