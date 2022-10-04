import express from 'express';
import dotenv from 'dotenv';
const controller = require('../controllers/listController');

dotenv.config();

const router = express.Router();

router
	.route('/todo/')
	.get(controller.listTODO)
	.post(controller.addTODO)
	.delete(controller.removeTODO)
	.put(controller.shareTODO);

export const listRoute = router;
