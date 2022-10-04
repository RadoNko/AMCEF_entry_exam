"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const userModel_1 = require("./userModel");
/**
 * Refresh Token Schema
 * @private
 */
const listSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        index: true,
        required: true,
    },
    allowedUsers: {
        type: [userModel_1.userModel.schema]
    },
});
/*
* Run pre-save fn
*/
listSchema.pre('save', (next) => {
    // this.updated_at = Date.now();
    return next();
});
exports.listModel = mongoose_1.default.model('Item', listSchema);
