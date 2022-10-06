"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
/**
 * Refresh Token Schema
 * @private
 */
const itemSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    deadline: {
        type: String,
        required: true,
    },
    status: {
        type: String,
    },
});
/*
* Run pre-save fn
*/
itemSchema.pre('save', (next) => {
    // this.updated_at = Date.now();
    return next();
});
exports.Item = mongoose_1.default.model('Item', itemSchema);
