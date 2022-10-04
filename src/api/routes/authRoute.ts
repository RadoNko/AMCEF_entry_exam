import express from 'express';
import dotenv from 'dotenv';
const controller = require('../controllers/authController');

dotenv.config();

const router = express.Router();

router
	.route('/auth/register')
	.post(controller.register);

router
	.route('/auth/login')
	.post(controller.login);

export const authRoute	 = router;
