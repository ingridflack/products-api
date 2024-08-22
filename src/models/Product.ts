import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  name: { type: String, required: [true, "Product name is required."] },
  price: { type: Number, required: [true, "Product price is required."] },
  category: { type: String, required: [true, "Product category is required."] },
  brand: { type: String, required: [true, "Product brand is required."] },
  image: { type: String, required: [true, "Product image is required."] },
});

const Product = mongoose.model("Product", productSchema);

export default Product;
