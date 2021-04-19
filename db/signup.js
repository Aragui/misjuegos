const { UserModel } = require("../models/user");

exports.signUp = async (email, password) => await UserModel.create({
    email,
    password
});