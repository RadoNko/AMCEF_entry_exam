import express from 'express';
import dotenv from 'dotenv';
const ItemController = require('../controllers/itemController');

dotenv.config();

const router = express.Router();

router
	.route('/item/')
	.post(ItemController.addItem)
	.put(ItemController.flagItem);

export const itemRoute = router;
