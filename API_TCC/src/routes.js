import express from "express";

import user from './controller/userController.js'

const route = express();

route.use('/user', user);

export default route;