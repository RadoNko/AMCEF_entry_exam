"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = require("./src/api/routes");
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
mongoose_1.default.connect('mongodb://mongodb:27017/node-app').then(() => {
    console.log(`⚡️[database]: Database connection successful!`);
    dotenv_1.default.config();
    const app = (0, express_1.default)();
    const port = process.env.PORT;
    app.use(body_parser_1.default.urlencoded({ extended: false }));
    app.use('/', routes_1.routes);
    app.listen(port, () => {
        console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
    });
}).catch((err) => {
    console.error(`⚡️[database]: Error connecting to DBS! ${err}`);
});
