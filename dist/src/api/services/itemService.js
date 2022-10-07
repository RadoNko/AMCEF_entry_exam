"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.updateItem = exports.createNewItem = void 0;
const listModel_1 = require("../models/listModel");
const itemModel_1 = require("../models/itemModel");
const bson_1 = require("bson");
const UserService = __importStar(require("../services/userService"));
function createNewItem(req) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const username = yield UserService.getUsername(req);
            const newItem = new itemModel_1.Item({ title: req.body.title, text: req.body.text, deadline: req.body.deadline, status: 'new' });
            yield newItem.save();
            return listModel_1.List.findOneAndUpdate({ name: req.body.name, allowedUsers: username }, { $push: { items: newItem } }, { upsert: true });
        }
        catch (e) {
            return 'Something went wrong, please try again!';
        }
    });
}
exports.createNewItem = createNewItem;
function updateItem(req) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const username = yield UserService.getUsername(req);
            return listModel_1.List.findOneAndUpdate({ 'items._id': new bson_1.ObjectId(req.body.task_id), allowedUsers: username }, { $set: { 'items.$.status': req.body.status } });
        }
        catch (e) {
            return 'Something went wrong, please try again!';
        }
    });
}
exports.updateItem = updateItem;
