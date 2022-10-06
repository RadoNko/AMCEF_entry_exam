import express from 'express';
import dotenv from 'dotenv';
const ListController = require('../controllers/listController');

dotenv.config();

const router = express.Router();

router
	.route('/todo/')
	.get(ListController.listTODO)
	.post(ListController.addTODO)
	.delete(ListController.removeTODO)
	.put(ListController.shareTODO);

export const listRoute = router;
