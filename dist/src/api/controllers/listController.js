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
exports.listTODO = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.json('TEST listTODO');
    }
    catch (error) {
        next(error);
    }
});
exports.addTODO = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.json('TEST addTODO');
    }
    catch (error) {
        next(error);
    }
});
exports.removeTODO = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.json('TEST removeTODO');
    }
    catch (error) {
        next(error);
    }
});
exports.shareTODO = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.json('TEST shareTODO');
    }
    catch (error) {
        next(error);
    }
});
