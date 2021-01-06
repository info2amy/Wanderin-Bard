import React from "react";
import {createProduct} from "../../services/products.js";
import { Redirect } from 'react-router-dom';
import { useState } from "react";
import Layout from "../../components/shared/Layout/Layout";

const Add = (props) => {
  // const [name, setName] = useState("");
  // const [ImgUrl, setImgUrl] = useState("");
  // const [description, setDescription] = useState("");
  // const [price, setPrice] = useState("");
  // const [category, setCategory] = useState("");
  // const [origin, setOrigin] = useState("");

  const [product, setProduct] = useState({
    name: '',
    imgURL: '',
    description: '',
    price: '',
    category: '',
    origin: ''
})

  const [isCreated, setCreated] = useState(false)
  
  const handleChange = (event) => {
    const { name, value } = event.target
    setProduct({
            ...product,
            [name]: value
    })
}

  const handleSubmit = async (event) => {
    event.preventDefault()
    const created = await createProduct(product)
    setCreated({ created })
  }

  if (isCreated) {
    return <Redirect to={`/products`} />
  }
 
  return (
    <Layout user={props.user}>
    <div>
      <form onSubmit={handleSubmit} className="addForm">
        <input
          placeholder="Instrument Name"
          type="text"
          value={product.name}
          name='name'
          required
          onChange={handleChange}
          
        />
        <input
        placeholder="image Url"
          type="text"
          value={product.imgURL}
          name='imgURL'
          required
          onChange={handleChange}
        />
        <input
          placeholder="Description"
          type="text"
          value={product.description}
          name='description'
          required
          onChange={handleChange}
        />
        <input
          placeholder="Price"
          type="text"
          value={product.price}
          name='price'
          required
          onChange={handleChange}
        />
        <input
          placeholder="Category"
          type="text"
          value={product.category}
          name='category'
          required
          onChange={handleChange}
        />
        <input
          placeholder="Origin"
          type="text"
          value={product.origin}
          name='origin'
          required
          onChange={handleChange}
        />
         <input type="submit" value="Submit" />
      </form>
      </div>
      </Layout>
  );
};

export default Add;
