"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = __importDefault(require("express"));
const listRoute_1 = require("./listRoute");
const itemRoute_1 = require("./itemRoute");
const authRoute_1 = require("./authRoute");
exports.routes = express_1.default.Router();
exports.routes.use(listRoute_1.listRoute);
exports.routes.use(itemRoute_1.itemRoute);
exports.routes.use(authRoute_1.authRoute);
