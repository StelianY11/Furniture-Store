import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../models/User.js";

const userService = {
    async register(email, password) {
        const user = await User.findOne({ email });

        if (user) {
            throw new Error("The user already exists!")
        }

        const createdUser = await User.create({ email, password });

        return generateResponse(createdUser);
    },
    async login(email, password) {
        const user = await User.findOne({ email });

        if (!user) {
            throw new Error("Invalid username or password!");
        }

        const isValid = await bcrypt.compare(password, user.password);

        if (!isValid) {
            throw new Error("Invalid username or password!");
        }

        return generateResponse(user);
    },
    logout() {
        return true;
    }
}

function generateResponse(user) {
    const payload = {
        _id: user._id,
        email: user.email,
    };

    const token = jwt.sign(payload, "MySecret", { expiresIn: "2h" });

    return {
        _id: user._id,
        email: user.email,
        accessToken: token,
    };
};

export default userService;