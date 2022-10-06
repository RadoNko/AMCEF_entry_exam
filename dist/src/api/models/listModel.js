"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.List = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const itemModel_1 = require("./itemModel");
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
    // TODO :
    items: [{
            type: itemModel_1.Item.schema
        }],
    allowedUsers: {
        type: [String]
    },
});
/*
* Run pre-save fn
*/
listSchema.pre('save', (next) => {
    // this.updated_at = Date.now();
    return next();
});
exports.List = mongoose_1.default.model('List', listSchema);
