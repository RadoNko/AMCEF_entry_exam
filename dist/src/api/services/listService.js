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
exports.shareUserTODO = exports.deleteTODO = exports.getTODO = exports.saveNewTODO = void 0;
const listModel_1 = require("../models/listModel");
const UserService = __importStar(require("../services/userService"));
function saveNewTODO(req) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const username = yield UserService.getUsername(req);
            if (req.body.name.trim().length < 3) {
                return 'TODO List name needs to be atleast 3 characters long...';
            }
            yield listModel_1.List.findOneAndUpdate({ name: req.body.name }, { name: req.body.name, allowedUsers: [username] }, { upsert: true });
            return 'Success!';
        }
        catch (e) {
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
        try {
            const username = yield UserService.getUsername(req);
            if (!(yield listModel_1.List.findOne({ name: req.body.name }))) {
                return 'List does not exist!';
            }
            return listModel_1.List.findOneAndUpdate({ name: req.body.name, allowedUsers: username }, { $push: { allowedUsers: req.body.username } });
        }
        catch (e) {
            return 'An error occured, please try again!';
        }
    });
}
exports.shareUserTODO = shareUserTODO;
