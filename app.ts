import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { routes } from './src/api/routes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

mongoose.connect('mongodb://mongodb:27017/node-app').then(() => {
	console.log(`⚡️[database]: Database connection successful!`);

	dotenv.config();

	const app: Express = express();
	const port = process.env.PORT;

	app.use(bodyParser.urlencoded({ extended: false }))
	app.use('/', routes);

	app.listen(port, () => {
		console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
	});

}).catch((err) => {
	console.error(`⚡️[database]: Error connecting to DBS! ${err}`);
});

