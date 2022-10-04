import express from 'express';
import dotenv from 'dotenv';
const controller = require('../controllers/itemController');

dotenv.config();

const router = express.Router();

router
	.route('/item/')
	.post(controller.addItem)
	.put(controller.flagItem);

export const itemRoute = router;
