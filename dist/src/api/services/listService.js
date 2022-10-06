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
exports.shareUserTODO = exports.deleteTODO = exports.getTODO = exports.saveNewTODO = void 0;
const listModel_1 = require("../models/listModel");
const userModel_1 = require("../models/userModel");
function saveNewTODO(req) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // TODO:get current user
            const user = yield userModel_1.User.findOneAndUpdate({ username: 'test' }, { username: 'test', password: 'test' }, { upsert: true });
            //------------------
            yield listModel_1.List.findOneAndUpdate({ name: req.body.name }, { name: req.body.name, allowedUsers: [user.username] }, { upsert: true });
            return 'Success!';
        }
        catch (e) {
            console.log(`${e}`);
            return 'An error occured, please try again!';
        }
    });
}
exports.saveNewTODO = saveNewTODO;
function getTODO(req) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield listModel_1.List.findOne({ name: req.body.name }, 'name allowedUsers items');
        if (result === null)
            return `TODO List does not exist`;
        else
            return result;
    });
}
exports.getTODO = getTODO;
function deleteTODO(req) {
    return __awaiter(this, void 0, void 0, function* () {
        return listModel_1.List.findOneAndRemove({ name: req.body.name });
    });
}
exports.deleteTODO = deleteTODO;
function shareUserTODO(req) {
    return __awaiter(this, void 0, void 0, function* () {
        // TODO:get current user
        const username = 'test';
        // ----------------
        return listModel_1.List.findOneAndUpdate({ name: req.body.name, allowedUsers: username }, { $push: { allowedUsers: req.body.username } }, { upsert: true });
    });
}
exports.shareUserTODO = shareUserTODO;
