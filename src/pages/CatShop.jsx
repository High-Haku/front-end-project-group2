import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { getAPICatShopAct } from '../Redux/Actions/getAPICatShopAct';

function CatShop() {
  const dispatch = useDispatch();

  const dataCatShop = useSelector((state)=>state.data);
//   console.log(dataCatShop);
  const [filter, setFilter] = useState([]);
//   console.log(filter);

  useEffect(()=>{
    dispatch(getAPICatShopAct());
  }, [dispatch]);

  const filterProduct = (category) => {
    const updatedList = dataCatShop.filter((item) => item.category === category)
    setFilter(updatedList);
  };

  const ShowProducts = () => {
      return(
        <>
          <div className="buttons d-flex justify-content-center mb-5 pb-5">
            <button className="btn btn-outline-dark me-2" onClick={() => setFilter(dataCatShop)}>All</button>
            <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("Makanan Kucing")}>Makanan Kucing</button>
            <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("Obat & Vitamin Kucing")}>Obat & Vitamin Kucing</button>
          </div>
          {dataCatShop.map((product) => {
              return(
                  <> 
                    <div className="col-md-3 mb-4">
                        <div className="card h-100 p-4" key={product.id}>
                            <img src={product.image} className="card-img-top" alt={product.title} height="300px" />
                            <div className="card-body">
                                <h5 className="card-title text-start mb-0">{product.title.substring(0, 25)}...</h5>
                                <p className="card-text text-start lead fw-bold">
                                    Rp {product.price}
                                </p>
                                <Link to={`/catshop/${product.id}`} className="btn btn-outline-dark ">Buy Now</Link>
                            </div>
                        </div>
                    </div>
                  </>
              )
          })}
        </>
      );
  };

  return (
    <div>
        <div className="container my-5 py-5">
            <div className="row">
                <div className="col-12 mb-5">
                    <h1 className="display-6 fw-bolder text-center">Latest Product</h1>
                    <hr />
                </div>
            </div>
            <div className="row justify-content-center">
                {<ShowProducts />}
            </div>
        </div>
    </div>
  )
}

export default CatShop
