"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
/**
 * Refresh Token Schema
 * @private
 */
const userSchema = new mongoose_1.default.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
});
/*
* Run pre-save fn
*/
userSchema.pre('save', (next) => {
    // this.updated_at = Date.now();
    return next();
});
exports.User = mongoose_1.default.model('User', userSchema);
