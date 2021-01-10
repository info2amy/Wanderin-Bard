import React, { useState, useEffect } from 'react'
import './Edit.css'
import { useParams, Redirect } from 'react-router-dom'
import Layout from '../../components/shared/Layout/Layout'
import { getProduct, updateProduct } from '../../services/products'

const Edit = (props) => {

    const [product, setProduct] = useState({
            name: '',
            description: '',
            imgURL: '',
            price: ''
    })

    const [isUpdated, setUpdated] = useState(false)
    let { id } = useParams()

    useEffect(() => {
        const fetchProduct = async () => {
            const product = await getProduct(id)
            setProduct(product)
        }
        fetchProduct()
    }, [id])


    const handleChange = (event) => {
      const { name, value } = event.target
        setProduct({
                ...product,
                [name]: value
        })
    }
  const handleSale = (event) => {
    setProduct({
      ...product,
      sale : event.target.checked 
    })
  }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const updated = await updateProduct(id, product)
        setUpdated(updated)
    }

    if (isUpdated) {
        return <Redirect to={`/products/${id}`} />
    }
    const addimage = (event) => {
      const { name, value } = event.target;
      setProduct({
        ...product,
        [name]: [...product.imageAddresses, value],
      });
    };

    return (
        <Layout user={props.user}>
            <div className="product-edit">
                <div className="image-container">
                    <img className="edit-product-image" src={product.imgURL} alt={product.name} />
                    <form onSubmit={handleSubmit}>
                        <input
                            className="edit-input-image-link"
                            placeholder='Image Link'
                            value={product.imageAddresses}
                            name="imageAddresses"
                            required
                            onChange={addimage}
                        />
                    </form>
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