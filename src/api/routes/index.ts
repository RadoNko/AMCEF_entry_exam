import express from 'express';
import * as basicAuth from 'express-basic-auth'

import { listRoute } from './listRoute';
import { itemRoute } from './itemRoute';
import { authRoute } from './authRoute';

import { User } from '../models/userModel';


export const routes = express.Router();

routes.use(listRoute);
routes.use(itemRoute);
routes.use(authRoute);
