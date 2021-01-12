import React from "react";
import { createProduct } from "../../services/products.js";
import { Redirect } from "react-router-dom";
import { useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import "./Add.css";

const Add = (props) => {
  const [product, setProduct] = useState({
    name: "",
    images: "",
    description: "",
    price: "",
    category: "",
    origin: "",
  });

  const [isCreated, setCreated] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const submitProduct = {
      ...product,
      images: [product.images],
    };
    const created = await createProduct(submitProduct);
    setCreated({ created });
  };

  if (isCreated) {
    return <Redirect to={`/products`} />;
  }
  console.log("MyProduct", product);
  return (
    <Layout user={props.user}>
      <div className="login">
        <div className="login-screen">
          <div className="app-title">
            <h1>Register a New Product</h1>
          </div>
          <form onSubmit={handleSubmit} className="login-form">
            <input
              placeholder="Product Name"
              type="text"
              value={product.name}
              name="name"
              className="login-field"
              id="login-name"
              required
              onChange={handleChange}
            />
            <input
              placeholder="Image URL"
              type="text"
              value={product.images}
              name="images"
              className="login-field"
              id="login-pass"
              required
              onChange={handleChange}
            />
            <textarea
              placeholder="Description"
              type="text"
              rows={7}
              value={product.description}
              name="description"
              className="login-field"
              id="login-pass"
              required
              onChange={handleChange}
            />
            <input
              placeholder="Price"
              type="text"
              value={product.price}
              name="price"
              className="login-field"
              id="login-pass"
              required
              onChange={handleChange}
            />
            <input
              placeholder="Category"
              type="text"
              value={product.category}
              name="category"
              className="login-field"
              id="login-pass"
              required
              onChange={handleChange}
            />
            <input
              placeholder="Origin"
              type="text"
              value={product.origin}
              name="origin"
              className="login-field"
              id="login-pass"
              required
              onChange={handleChange}
            />
            <button className="submit">Submit</button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Add;
