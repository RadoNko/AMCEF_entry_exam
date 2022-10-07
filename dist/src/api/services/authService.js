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
exports.auth = void 0;
const userModel_1 = require("../models/userModel");
function auth(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const authHeader = req.headers.authorization;
        const auth = Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':');
        const userAuth = auth[0];
        const passAuth = auth[1];
        const users = yield userModel_1.User.find();
        let success = false;
        users.forEach((user) => {
            if (user.username === userAuth && user.password === passAuth) {
                next();
                success = true;
                return;
            }
        });
        if (!success)
            res.status(400).json({ error: "Invalid credentials" });
    });
}
exports.auth = auth;
