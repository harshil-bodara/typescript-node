import { Router } from "express";
import usersController from "../controller/users.controller";

const route: Router = Router();

route.get('/OneToOne', usersController.OneToOne);
route.get('/oneToMany', usersController.OneToMany);
route.get('/manyToMany', usersController.ManyToMany);

export default route;