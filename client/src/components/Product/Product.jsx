import React from 'react';
import './Product.css'
import { Link } from 'react-router-dom'
const Product = (props) => {

  let sale = Number(props.price) * .9
  return (
    <>
    <Link className="product" to={`/products/${props._id}`}>
        <img className="product-image" src={props.images[0]} alt={props.name} />
        <div className='text-background'>
        <div className="product-name">{props.name}</div>
          <div className='line'></div>
          {props.sale ? <div className="price"><span className = 'slash'>{`$${props.price}`}</span>-{`$${sale}`}</div> : <div className="price">{`$${props.price}`}</div>}
        </div>
    </Link>
    </>
  );
};

export default Product;