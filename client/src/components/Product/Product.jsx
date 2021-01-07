import React from 'react';
import './Product.css'
import { Link } from 'react-router-dom'

const Product = (props) => {
  return (
    <>
    <Link className="product" to={`/products/${props._id}`}>
        <img className="product-image" src={props.imgURL} alt={props.name} />
        <div className='text-background'>
        <div className="product-name">{props.name}</div>
        <div className='line'></div>
        <div className="price">{`$${props.price}`}
        </div>
        </div>
    </Link>
    </>
  );
};

export default Product;