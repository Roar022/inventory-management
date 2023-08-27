import React, { useState } from "react";
import ProductForm from "../../components/product/productForm/ProductForm";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader";
import {
  createProduct,
  selectIsLoading,
} from "../../redux/features/product/productSlice";
import { useNavigate } from "react-router-dom";
const initialState = {
  name: "",
  category: "",
  quantity: "",
  price: "",
};
const AddProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [product, setProduct] = React.useState(initialState);
  const [productImage, setProductImage] = React.useState("");
  const [imagePreview, setImagePreview] = React.useState(null);
  const [description, setDescription] = React.useState("");

  // from redux initial state
  const isLoading = useSelector(selectIsLoading);

  const { name, category, price, quantity } = product;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e) => {
    // used to get first file from event object
    setProductImage(e.target.files[0]);
    // to create image url for preview
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };

  const generateSKU = (category) => {
    const letter = category.slice(0, 3).toUpperCase();
    const number = Date.now();
    const sku = letter + "-" + number;
    return sku;
  };

  const saveProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("sku", generateSKU(category));
    formData.append("category", category);
    formData.append("quantity", quantity);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("image", productImage);

    await dispatch(createProduct(formData));
    navigate("/dashboard")
  };
  return (
    <div>
      {isLoading && <Loader />}
      <h3 className="--mt">Add New Product</h3>
      <ProductForm
        product={product}
        productImage={productImage}
        imagePreview={imagePreview}
        description={description}
        setDescription={setDescription}
        handleInputChange={handleInputChange}
        handleImageChange={handleImageChange}
        saveProduct={saveProduct}
      />
    </div>
  );
};

export default AddProduct;
