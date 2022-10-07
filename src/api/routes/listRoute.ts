import express from 'express';
import dotenv from 'dotenv';
import * as AuthService from '../services/authService';
const ListController = require('../controllers/listController');

dotenv.config();

const router = express.Router();


router
	.route('/todo/')
	.get(ListController.listTODO)
	.post(AuthService.auth,ListController.addTODO)
	.delete(AuthService.auth,ListController.removeTODO)
	.put(AuthService.auth,ListController.shareTODO);


export const listRoute = router;
