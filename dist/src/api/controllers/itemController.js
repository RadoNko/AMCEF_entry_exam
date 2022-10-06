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
const ItemService = require('../services/itemService');
// @ts-ignore
const ListService = require('../services/listService');
exports.addItem = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield ItemService.createNewItem(req);
        res.json(yield ListService.getTODO(req));
    }
    catch (error) {
        next(error);
    }
});
exports.flagItem = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield ItemService.updateItem(req);
        res.json(yield ListService.getTODO(req));
    }
    catch (error) {
        next(error);
    }
});
