import React, { useState, useEffect } from "react";
import "./Detail.css";
import Layout from "../../components/shared/Layout/Layout";
import { getProduct, deleteProduct } from "../../services/products";
import { useParams, Link, useHistory } from "react-router-dom";

const Detail = (props) => {
  const [product, setProduct] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const [imageAddresses, setImageAddresses] = useState([
    "https://2.bp.blogspot.com/-_lgP4zMbsEY/Uf1ge4FiYlI/AAAAAAAAAEQ/hWrZmyb_pQc/s1600/Sarangi.jpg",
    "https://images.reverb.com/image/upload/s--JHR_M82D--/a_exif,c_limit,e_unsharp_mask:80,f_auto,fl_progressive,g_south,h_620,q_90,w_620/v1487530594/fkah9h3xxjsoexrpp2j7.jpg",
    "https://images.reverb.com/image/upload/s--piJ5wn3p--/a_exif,c_limit,e_unsharp_mask:80,f_auto,fl_progressive,g_south,h_620,q_90,w_620/v1487530596/i3jrgqupxnfch9wrvqcu.jpg",
  ]);
  const [mainPicImageAddress,setMainPicImageAddress] = useState()
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProduct(id);
      setProduct(product);
      setLoaded(true);
      const imageAddressUpdated = [...imageAddresses, product.imgURL];
      setImageAddresses(imageAddressUpdated);
      setMainPicImageAddress(product.imgURL)
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
        <img className="detail-image" src={mainPicImageAddress} alt={product.name} />
        <div className="detail">
          <div className="name">{product.name}</div>
          <div className="price">{`$${product.price}`}</div>
          <div className="description">{product.description}</div>
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
          <em id="additional-pictures-text">Additional pictures: </em>
          <div className="detail-extra-photo-container">
            <div className="detail-extra-photo-container">
              {imageAddresses.map((item) => {
                return (
                  <img
                    className="detail-extra-photo-div"
                    src={item}
                    alt={product.name}
                    onClick={(e) => { e.preventDefault();setMainPicImageAddress(item) }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Detail;
