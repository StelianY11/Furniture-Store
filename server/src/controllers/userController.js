import { Router } from "express";

const userController = Router();

userController.post("/users/register", (req, res) => { 
    console.log(req.body);
});

export default userController;