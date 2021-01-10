import React, { useState, useEffect } from "react";
import "./Detail.css";
import Layout from "../../components/shared/Layout/Layout";
import { getProduct, deleteProduct } from "../../services/products";
import { useParams, Link, useHistory } from "react-router-dom";

const Detail = (props) => {
  const [product, setProduct] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const [imageAddresses, setImageAddresses] = useState([]);
  const [mainPicImageAddress, setMainPicImageAddress] = useState();
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProduct(id);
      setProduct(product);
      setLoaded(true);
      setImageAddresses(product.imageAddresses);
      setMainPicImageAddress(product.imageAddresses[0]);
    };
    fetchProduct();
  }, [id]);

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }
  let handleDelete = () => {
    deleteProduct(product._id);
    history.push("/products");
  };
  return (
    <Layout user={props.user}>
      <div className="detail-parent-div">
        <div className="detail-leftside">
          <img
            className="detail-image"
            src={mainPicImageAddress}
            alt={product.name}
          />
          <em id="additional-pictures-text">Additional Pictures: </em>
          <div className="detail-extra-photo-container">
            {imageAddresses.map((item, index) => {
              return (
                <img
                  className="detail-extra-photo-div"
                  src={item}
                  alt={product.name}
                  key={index}
                  onClick={(e) => {
                    e.preventDefault();
                    setMainPicImageAddress(item)
                  }}
                />
              );
            })}
          </div>
        </div>
        <div className="detail">
          <div className="detail-text">
            <div className="name">{product.name}</div>
            <div className="price">
              <h2>{`$${product.price}`}</h2>
            </div>
            <div className="description">{product.description}</div>
          </div>
          <div className="button-container">
            <button className="edit-button">
              <Link className="edit-link" to={`/products/${product._id}/edit`}>
                Edit
              </Link>
            </button>
            <button className="delete-button" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Detail;
