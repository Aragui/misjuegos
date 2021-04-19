const { UserModel } = require("../models/user");

exports.login = async (email) => await UserModel.findOne({email: email});