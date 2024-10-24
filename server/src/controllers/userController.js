import { Router } from "express";

const userController = Router();

userController.post("/users/register", (req, res) => { 
    const { email, password } = req.body;

    res.json({
        email: "",
        accessToken: "",
        _id: "",
    });
});

export default userController;