import React, { useState, useEffect } from 'react'
import './Edit.css'
import { useParams, Redirect } from 'react-router-dom'
import Layout from '../../components/shared/Layout/Layout'
import { getProduct, updateProduct } from '../../services/products'

const Edit = (props) => {

  const [product, setProduct] = useState({
    name: "",
    images: [],
    description: "",
    price: "",
    category: "",
    origin: "",
  });

    const [isUpdated, setUpdated] = useState(false)
    let { id } = useParams()

    useEffect(() => {
        const fetchProduct = async () => {
            const product = await getProduct(id)
            setProduct(product)
        }
        fetchProduct()
    }, [id])
  
  const handleSale = (event) => {
    setProduct({
      ...product,
      sale : event.target.checked 
    })
  }

  if (isUpdated) {
      return <Redirect to={`/products/${id}`} />
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setProduct({
      ...product,
      [name]: value
    })
  }
  
  const addimage = (event) => {
    const { name, value } = event.target;
    setProduct({
      ...product,
      [name]: [...product.images, value],
    });
  };
  
  const handleSubmit = async (event) => {
      event.preventDefault()
      const updated = await updateProduct(id, product)
      setUpdated(updated)
  }

  return (
        <Layout user={props.user}>
        <div className="product-edit">
          <div className="images-container">
            {product.images.map((image, index) => 
          <div className="image-container">
                    <img className="edit-product-image" src={image} alt={product.name} />
                    <form onSubmit={handleSubmit}>
                        <input
                            className="edit-input-image-link"
                            placeholder='Image Link'
                            value={product.images}
                            name="images"
                            required
                            onChange={addimage}
                            />
                    </form>
                </div>
                            )}
          </div>
                <form className="edit-form" onSubmit={handleSubmit}>
                    <input
                        className="input-name"
                        placeholder='Name'
                        value={product.name}
                        name='name'
                        required
                        autoFocus
                        onChange={handleChange}
                     />
                      <input
                        placeholder="add image url"
                        type="text"
                        value={product.images}
                        name="images"
                        className="input-image"
                        id="login-pass"
                        required
                        onChange={handleChange}
                        />
                    <input
                        className="input-price"
                        placeholder='Price'
                        value={product.price}
                        name='price'
                        required
                        onChange={handleChange}
                    />
                    <textarea
                        className="textarea-description"
                        rows={10}
                        cols={78}
                        placeholder='Description'
                        value={product.description}
                        name='description'
                        required
                        onChange={handleChange}
            />
            <div className='sale'>
            <label htmlFor="sale">Sale</label>
            <input
              name='sale'
                type='checkbox'
                checked={product.sale}
              onChange={handleSale}
            />
            </div>
                    
                    <button type='submit' className="save-button">Save</button>
                </form>
            </div>
        </Layout>
    )
}

export default Edit