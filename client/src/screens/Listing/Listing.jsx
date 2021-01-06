import React, { useState, useEffect } from 'react'
import './Listing.css'
import Product from '../../components/Product/Product'
import Search from '../../components/Search/Search'
import { AZ, ZA, lowestFirst, highestFirst } from "../../utils/sort"
import Sort from '../../components/Sort/Sort'
import Layout from '../../components/shared/Layout/Layout'
import { getProducts } from '../../services/products'

const Listing = (props) => {
  const [allProducts, setAllProducts] = useState([])
  const [queriedProducts, setQueriedProducts] = useState([])
  const [sortType, setSortType] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts()
      setAllProducts(products)
      setQueriedProducts(products)
    }
    fetchProducts()
  }, [])

  const handleSort = type => {
    setSortType(type)
    switch (type) {
      case "name-ascending":
        setQueriedProducts(AZ(queriedProducts))
        break
      case "name-descending":
        setQueriedProducts(ZA(queriedProducts))
        break
      case "price-ascending":
        setQueriedProducts(lowestFirst(queriedProducts))
        break
      case "price-descending":
        setQueriedProducts(highestFirst(queriedProducts))
        break
      default:
        break
    }
  }

  const handleSearch = event => {
    const newQueriedProducts = allProducts.filter(product => product.name.toLowerCase().includes(event.target.value.toLowerCase()))
    setQueriedProducts(newQueriedProducts, () => handleSort(sortType))
  }

  const handleSubmit = event => event.preventDefault()

  const productsJSX = queriedProducts.map((product, index) =>
    <Product _id={product._id} name={product.name} imgURL={product.imgURL} price={product.price} key={index} />
  )

  return (
    <Layout user={props.user}>
      <Search onSubmit={handleSubmit} 
      onChange={handleSearch} 
      />
      {/* <Sort onSubmit={handleSubmit}
      onChange={handleSort}
      /> */}
      <div className="products">
        {productsJSX}
      </div>
    </Layout>
  )
}


export default Listing