import express from 'express';
import dotenv from 'dotenv';
const ItemController = require('../controllers/itemController');
import * as AuthService from '../services/authService';

dotenv.config();

const router = express.Router();

router
	.route('/item/')
	.post(AuthService.auth,ItemController.addItem)
	.put(AuthService.auth,ItemController.flagItem);

export const itemRoute = router;
