import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import { addCart } from '../Redux/Actions/cartProductAct';
import RecommendationProduct from './recommendationProduct';
import { Rating } from "react-simple-star-rating";

function ProductCatShop() {
  const {id} = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  
  const addProduct = (product) => {
      dispatch(addCart(product));
  }

  useEffect(() => {
    const getProduct = async () => {
        setLoading(true);
        const singleData = await fetch (`https://6215ac43c9c6ebd3ce2e4ad8.mockapi.io/stuff/${id}`);
        setProduct(await singleData.json());
        setLoading(false);
    }
    getProduct();
  }, []);

  const Loading = () => {
      return(
          <>
              <div className="col-md-6">
                  <Skeleton height={400} duration={2} />
              </div>
              <div className="col-md-6" style={{lineHeight:2}}>
                  <Skeleton height={50} width={300} duration={2} />
                  <Skeleton height={75} duration={2} />
                  <Skeleton height={25} width={150} duration={2} />
                  <Skeleton height={50} duration={2} />
                  <Skeleton height={150} duration={2} />
                  <Skeleton height={50} width={100} duration={2} inline={true} />
                  <Skeleton height={50} width={100} duration={2} style={{marginLeft:6}} />
              </div>
          </>
      );
  };

  const ShowProduct = () => {
    return(
          <>
            <div className="col-md-6">
                <img src={product.image} alt={product.title}
                height="400px" width="400px" />
            </div>
            <div className="col-md-6">
                <h4 className="text-uppercase text-black-50">
                    {product.category}
                </h4>
                <h1 className="display-5">
                    {product.title}
                </h1>
                <Rating className="lead" ratingValue={product.rating *20} readonly/>
                
                <h3 className="display-6 fw-bold my-4">
                    Rp {product.price}
                </h3>
                <p className="lead">
                    Description: {product.description}
                </p>
                <button className="btn btn-outline-dark px-3 py-2"
                 onClick={()=>addProduct(product)}>
                    Add to Cart
                </button>
                <Link to="/cart" className="btn btn-dark ms-2 px-3 py-2">
                    Go to Cart
                </Link>
            </div>
          </>
      )
  }

  return (
    <div>
        <div className="container py-5">
            <div className="row py-4">
                {loading ? <Loading /> : <ShowProduct/>}
            </div>
            <hr />
            <div className="row">
              <RecommendationProduct/>
            </div>
        </div>
    </div>
  )
}

export default ProductCatShop