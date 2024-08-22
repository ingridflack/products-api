import { Request, Response } from "express";
import ProductService from "../services/ProductService";

class ProductController {
  static async getProductById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const payload = await ProductService.getProductById(id);

      res.status(200).json({
        message: "Product retrieved successfully",
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async getAllProducts(req: Request, res: Response) {
    try {
      const payload = await ProductService.getAllProducts(req.query);

      res.status(200).json({
        message: "Products retrieved successfully",
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async updateProduct(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { name, image, brand, category, price } = req.body;

      const body = {
        name,
        image,
        brand,
        category,
        price: Number(price),
      };

      const payload = await ProductService.updateProduct(id, body);

      res.status(200).json({
        message: "Product updated successfully",
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async deleteProduct(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const payload = await ProductService.deleteProduct(id);

      res.status(200).json({
        message: "Product deleted successfully",
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async getAllCategories(req: Request, res: Response) {
    try {
      const payload = await ProductService.getAllCategories();

      res.status(200).json({
        message: "Categories retrieved successfully",
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async getAllBrands(req: Request, res: Response) {
    try {
      const payload = await ProductService.getAllBrands();

      res.status(200).json({
        message: "Brands retrieved successfully",
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  }
}

export default ProductController;
