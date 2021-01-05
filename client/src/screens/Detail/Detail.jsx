import React, { useState, useEffect } from 'react'
import './Detail.css'
import Layout from '../../components/shared/Layout/Layout'
import { getProduct, deleteProduct } from '../../services/products'
import { useParams, Link } from 'react-router-dom'

const Detail = (props) => {

  const [product, setProduct] = useState(null)
  const [isLoaded, setLoaded] = useState(false)
  const { id } = useParams()

  useEffect(() => {
      const fetchProduct = async () => {
          const product = await getProduct(id)
          setProduct(product)
          setLoaded(true)
      }
      fetchProduct()
  }, [id])

  if (!isLoaded) {
      return <h1>Loading...</h1>
  }

  return (
      <Layout user={props.user}>
          <div className="detail-parent-div">
              <img className="detail-image" src={product.imgURL} alt={product.name} />
              <div className="detail">
                  <div className="name">{product.name}</div>
                  <div className="price">{`$${product.price}`}</div>
                  <div className="description">{product.description}</div>
                  <div className="button-container">
                      <button className="edit-button"><Link className="edit-link" to={`/products/${product._id}/edit`}>Edit</Link></button>
                      <button className="delete-button" onClick={() => deleteProduct(product._id)}>Delete</button>
                  </div>
              </div>
          </div>
      </Layout>
  )
}

export default Detail