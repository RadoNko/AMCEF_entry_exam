"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.itemRoute = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const controller = require('../controllers/itemController');
dotenv_1.default.config();
const router = express_1.default.Router();
router
    .route('/item/')
    .post(controller.addItem)
    .put(controller.flagItem);
exports.itemRoute = router;
