import { Router } from "express";

const furnitureController = Router();

furnitureController.post('/', (req, res) => {
    res.json([]);
});

export default furnitureController;