"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = exports.getUsername = exports.getUsers = void 0;
const userModel_1 = require("../models/userModel");
function getUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        return userModel_1.User.find();
    });
}
exports.getUsers = getUsers;
function getUsername(req) {
    return __awaiter(this, void 0, void 0, function* () {
        const authHeader = req.headers.authorization;
        const auth = Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':');
        const userName = auth[0];
        return userName;
    });
}
exports.getUsername = getUsername;
function register(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Creates new user if it does not exist otherwise won't update
            // await User.updateOne(
            // 	{username:req.body.username},
            // 	{ $setOnInsert: {username:req.body.username,password:req.body.password} },
            // 	{ upsert: true }
            // )
            const userExists = yield userModel_1.User.findOne({ username: req.body.username });
            if (!userExists) {
                const user = new userModel_1.User({ username: req.body.username, password: req.body.password });
                yield user.save();
                return res.json('Registration successful!');
            }
            else
                return res.json('User already exists!');
        }
        catch (e) {
            return res.json('Something went wrong, please try again!');
        }
    });
}
exports.register = register;
