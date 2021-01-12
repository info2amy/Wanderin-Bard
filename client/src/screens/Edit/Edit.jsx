import React, { useState, useEffect } from "react";
import "./Edit.css";
import { useParams, Redirect } from "react-router-dom";
import Layout from "../../components/shared/Layout/Layout";
import { getProduct, updateProduct } from "../../services/products";

const Edit = (props) => {
  const [product, setProduct] = useState({
    name: "",
    images: [],
    description: "",
    price: "",
    category: "",
    origin: "",
  });
  const [newImage, setNewImage] = useState("");
  const [isUpdated, setUpdated] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProduct(id);
      setProduct(product);
    };
    fetchProduct();
  }, [id]);

  const handleSale = (event) => {
    setProduct({
      ...product,
      sale: event.target.checked,
    });
  };

  if (isUpdated) {
    return <Redirect to={`/products/${id}`} />;
  }

  let images = product.images;
  const editImage = (event) => {
    const imageIndex = event.target.attributes["data-index"].value;
    if (imageIndex) {
      images[imageIndex] = event.target.value;
      setProduct({
        ...product,
        images: images,
      });
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "images") {
      setNewImage(event.target.value);
    } else {
      setProduct({
        ...product,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (newImage) {
      images.push(newImage);
    }
    setProduct({
      ...product,
      images: images,
    });
    const updated = await updateProduct(id, product);
    setUpdated(updated);
  };
  let lastItem = product.images.length - 1;
  console.log(lastItem);

  return (
    <Layout user={props.user}>
      <div className="product-edit">
        <form className="edit-form" onSubmit={handleSubmit}>
          <h1>Edit Your Product</h1>
          <label htmlFor="name">Name</label>
          <input
            className="input-name"
            placeholder="Name"
            value={product.name}
            name="name"
            required
            autoFocus
            onChange={handleChange}
          />
          <label htmlFor="images">Image URL</label>
          <input
            placeholder="Add a New Image"
            type="text"
            value={newImage}
            name="images"
            className="input-image"
            id="login-pass"
            onChange={handleChange}
          />
          <label htmlFor="price">Price</label>
          <input
            className="input-price"
            placeholder="Price"
            value={product.price}
            name="price"
            required
            onChange={handleChange}
          />
          <label htmlFor="description">Description</label>
          <textarea
            className="textarea-description"
            rows={7}
            placeholder="Description"
            value={product.description}
            name="description"
            required
            onChange={handleChange}
          />
          <div className="sale">
            <label htmlFor="sale">On Sale? </label>
            <input
              name="sale"
              type="checkbox"
              checked={product.sale}
              onChange={handleSale}
            />
          </div>
          <label htmlFor="images-container"> Edit Images</label>
          <div className="images-container">
            {product.images.map((image, index) => (
              <div className="image-container">
                <img
                  className="edit-product-image"
                  src={image}
                  alt={product.name}
                />
                {/* <form onSubmit={handleSubmit}> */}
                <input
                  id="image-link"
                  placeholder="Image Link"
                  value={image}
                  name="images"
                  required
                  onChange={editImage}
                  key={index}
                  data-index={index}
                />
                {/* </form> */}
              </div>
            ))}
          </div>

          <button type="submit" className="save-button">
            Save
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Edit;
