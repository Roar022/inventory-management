import axios from "axios";
import { toast } from "react-toastify";


export const BACKEND_URL = process.env.REACT_APP_BACKED_URL;

const API_URL = `${BACKEND_URL}/api/product/`

// Create New Product
const createProduct = async (fromData) => {
  // console.log(formData)
  const response = await axios.post(API_URL, fromData);
  return response.data;
};

// Get All Product
const getProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Delete Product
const deleteProduct = async (id) => {
  const response = await axios.delete(API_URL+id);
  return response.data;
};

// Get a Product
const getProduct = async (id) => {
  const response = await axios.get(API_URL+id);
  return response.data;
};

// Update Product
const updateProduct = async (id, formData) => {
  const response = await axios.patch(`${API_URL}${id}`, formData);
  return response.data;
};

const productService = {
    createProduct,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct
}

export default productService;

