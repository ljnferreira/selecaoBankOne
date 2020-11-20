import { request, response, Router } from "express";
import ProductsController from "./controllers/ProductsController";

const routes = Router();

routes.post('/products', ProductsController.create)
routes.get('/products', ProductsController.index)
routes.get('/products/:id', ProductsController.show)
routes.delete('/products/:id', ProductsController.delete)

export default routes;