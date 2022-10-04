import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { routes } from './src/api/routes';
import mongoose from './src/config/mongoose';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use('/', routes);

app.listen(port, () => {
	console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
