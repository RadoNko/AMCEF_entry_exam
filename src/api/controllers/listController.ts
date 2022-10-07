// @ts-ignore
import express, {Express} from 'express';
import expressBasicAuth from 'express-basic-auth';

const ListService = require('../services/listService');

exports.listTODO = async (req, res, next) => {
	try {
		res.json(await ListService.getTODO(req));
	} catch (error) {
		next(error);
	}
};
exports.addTODO = async (req, res, next) => {
	try {
		res.json(await ListService.saveNewTODO(req));
	} catch (error) {
		next(error);
	}
};
exports.removeTODO = async (req, res, next) => {
	try {
		await ListService.deleteTODO(req);
		res.json('Success!');
	} catch (error) {
		next(error);
	}
};
exports.shareTODO = async (req, res, next) => {
	try {
		await ListService.shareUserTODO(req)
		res.json(await ListService.getTODO(req));
	} catch (error) {
		next(error);
	}
};
