import React from "react";
import { createProduct } from "../../services/products.js";
import { Redirect } from "react-router-dom";
import { useState } from "react";

const Add = () => {
 

  const [product, setProduct] = useState({
    name: "",
    imgURL: "",
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
    const created = await createProduct(product);
    setCreated({ created });
  };

  if (isCreated) {
    return <Redirect to={`/products`} />;
  }
  console.log("MyProduct", product);
  return (
    <div className="login">
      <div className="login-screen">
        <div className="app-title">
          <h1>Register A New Product</h1>
        </div>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="control-group">
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
          </div>

          <div className="control-group">
            <input
              placeholder="imageUrl"
              type="text"
              value={product.imgURL}
              name="imgURL"
              class="login-field"
              id="login-pass"
              required
              onChange={handleChange}
            />
          </div>
          <input
            placeholder="Description"
            type="text"
            value={product.description}
            name="description"
            class="login-field"
            id="login-pass"
            required
            onChange={handleChange}
          />
          <input
            placeholder="Price"
            type="text"
            value={product.price}
            name="price"
            class="login-field"
            id="login-pass"
            required
            onChange={handleChange}
          />
          <input
            placeholder="Category"
            type="text"
            value={product.category}
            name="category"
            class="login-field"
            id="login-pass"
            required
            onChange={handleChange}
          />
          <input
            placeholder="Origin"
            type="text"
            value={product.origin}
            name="origin"
            class="login-field"
            id="login-pass"
            required
            onChange={handleChange}
          />
 <button class="btn btn-primary btn-large btn-block">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Add;
