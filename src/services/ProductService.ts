import { FilterQuery } from "mongoose";
import ProductModel from "../models/Product";

interface IProduct {
  id: number;
  name: string;
  price: number;
  brand: string;
  image: string;
  category: string;
}

interface IProductSearchParams {
  brand: string;
  name: string;
  categories: string;
  minPrice: string;
  maxPrice: string;
}

class ProductService {
  static async getProductById(id: string): Promise<IProduct | null> {
    return ProductModel.findById(id);
  }

  static async getAllProducts(
    filter: Partial<IProductSearchParams>
  ): Promise<IProduct[] | null> {
    const search = await buildSearchParams(filter);

    return ProductModel.find(search);
  }

  static async updateProduct(
    id: string,
    body: Omit<IProduct, "id">
  ): Promise<IProduct | null> {
    return ProductModel.findByIdAndUpdate(id, body, {
      new: true,
    });
  }

  static async deleteProduct(id: string): Promise<IProduct | null> {
    return ProductModel.findByIdAndDelete(id);
  }

  static async getAllCategories(): Promise<string[]> {
    return ProductModel.distinct("categories");
  }

  static async getAllBrands(): Promise<string[]> {
    return ProductModel.distinct("brand");
  }
}

async function buildSearchParams(params: Partial<IProductSearchParams>) {
  const { brand, name, categories, minPrice, maxPrice } = params;

  let search: FilterQuery<IProductSearchParams> = {};

  // Filter by brand
  if (brand) search.brand = { $in: brand.split(",") };

  // Filter by categories
  if (categories) search.categories = { $in: categories.split(",") };

  // Filter price range
  if (minPrice || maxPrice) search.price = {};
  if (minPrice) search.price.$gte = minPrice;
  if (maxPrice) search.price.$lte = maxPrice;

  // Filter by product name
  if (name) search.name = { $regex: name, $options: "i" };

  return search;
}

export default ProductService;
