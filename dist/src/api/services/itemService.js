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
exports.updateItem = exports.createNewItem = void 0;
const listModel_1 = require("../models/listModel");
const itemModel_1 = require("../models/itemModel");
const bson_1 = require("bson");
function createNewItem(req) {
    return __awaiter(this, void 0, void 0, function* () {
        // TODO:get current user
        const username = 'test';
        // ----------------
        const newItem = new itemModel_1.Item({ title: req.body.title, text: req.body.text, deadline: req.body.deadline, status: 'new' });
        yield newItem.save();
        return listModel_1.List.findOneAndUpdate({ name: req.body.name, allowedUsers: username }, { $push: { items: newItem } }, { upsert: true });
    });
}
exports.createNewItem = createNewItem;
function updateItem(req) {
    return __awaiter(this, void 0, void 0, function* () {
        // TODO:get current user
        const username = 'test';
        // ----------------
        // const newItem = new Item({title:req.body.title,text:req.body.text,deadline:req.body.deadline})
        console.log(req.body.task_id);
        console.log(req.body.status);
        // const x = await List.findOneAndUpdate(
        // 	{_id: new ObjectId(req.body.task_id)},{status : req.body.status},{upsert: true});
        // console.log(x);
        // return Item.findOneAndUpdate({_id:new ObjectId(req.body.task_id)},{status : req.body.status},{upsert: true});
        return listModel_1.List.findOneAndUpdate({ 'items._id': new bson_1.ObjectId(req.body.task_id) }, { $set: { 'items.$.status': req.body.status } });
    });
}
exports.updateItem = updateItem;
