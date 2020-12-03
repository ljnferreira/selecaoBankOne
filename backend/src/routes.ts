import { request, response, Router } from "express";
import ProductsController from "./controllers/ProductsController";

const routes = Router();

routes.post('/products', ProductsController.create)
routes.post('/products/bydate', ProductsController.filterByDate)
routes.get('/products', ProductsController.index)
routes.get('/products/:id', ProductsController.show)
routes.get('/relatory', ProductsController.relatory)
routes.delete('/products/:id', ProductsController.delete)

export default routes;