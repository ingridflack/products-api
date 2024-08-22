import express from "express";
import ProductController from "../controllers/productController";

const routes = express.Router();

routes.get("/products", ProductController.getAllProducts);
routes.get("/products/:id", ProductController.getProductById);
routes.get("/categories", ProductController.getAllCategories);
routes.get("/brands", ProductController.getAllBrands);
routes.put("/products/:id", ProductController.updateProduct);
routes.delete("/products/:id", ProductController.deleteProduct);

export default routes;