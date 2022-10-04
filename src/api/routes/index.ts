import express from 'express';
import { listRoute } from './listRoute';
import { itemRoute } from './itemRoute';
import { authRoute } from './authRoute';



export const routes = express.Router();

routes.use(listRoute);
routes.use(itemRoute);
routes.use(authRoute);
