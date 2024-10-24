import User from "../models/User.js";

const userService = {
    register(email, password) {
        // Chack if user exists

        return User.create({ email, password });
    },
}

export default userService;