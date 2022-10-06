import {updateItem} from '../services/itemService';

const ItemService = require('../services/itemService');
// @ts-ignore
const ListService = require('../services/listService')


exports.addItem = async (req, res, next) => {
	try {
		await ItemService.createNewItem(req)
		res.json(await ListService.getTODO(req));
	} catch (error) {
		next(error);
	}
};
exports.flagItem = async (req, res, next) => {
	try {
		await ItemService.updateItem(req);
		res.json(await ListService.getTODO(req));
	} catch (error) {
		next(error);
	}
};
