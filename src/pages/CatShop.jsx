import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

function CatShop() {
  const [dataCatShop, setDataCatShop] = useState([]);
  const [filter, setFilter] = useState(dataCatShop);
  const [loading, setLoading] = useState(false);
  let getData = true;

  useEffect(() => {
    const getProducts = async () => {
        setLoading(true);
        const getDataAPICatShop = await fetch("https://6215ac43c9c6ebd3ce2e4ad8.mockapi.io/stuff");
        if(getData){
            setDataCatShop(await getDataAPICatShop.clone().json());
            setFilter(await getDataAPICatShop.json());
            setLoading(false);
        }

        return () => {
            getData = false;
        }
    }
    getProducts();
  }, []);

  const Loading = () => {
      return (
        <> 
            <div className="col-md-3">
                <Skeleton height={350} duration={2} />
            </div>
            <div className="col-md-3">
                <Skeleton height={350} duration={2} />
            </div>
            <div className="col-md-3">
                <Skeleton height={350} duration={2} />
            </div>
            <div className="col-md-3">
                <Skeleton height={350} duration={2} />
            </div>
        </>
      )
  }

  const filterProduct = (category) => {
    const updatedList = dataCatShop.filter((item) => item.category === category)
    setFilter(updatedList);
  }

  const ShowProducts = () => {
      return(
        <>
          <div className="buttons d-flex justify-content-center mb-5 pb-5">
            <button className="btn btn-outline-dark me-2" onClick={() => setFilter(dataCatShop)}>All</button>
            <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("Makanan Kucing")}>Makanan Kucing</button>
            <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("Obat & Vitamin Kucing")}>Obat & Vitamin Kucing</button>
            <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("Mainan Kucing")}>Mainan Kucing</button>
            <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("Pakaian Kucing")}>Pakaian Kucing</button>
          </div>
          {filter.map((product) => {
              return(
                  <> 
                    <div className="col-md-3 mb-4">
                        <div className="card h-100 p-4" key={product.id}>
                            <img src={product.image} className="card-img-top" alt={product.title} height="300px" />
                            <div className="card-body">
                                <h5 className="card-title text-start mb-0">
                                  {product.title.substring(0, 23)}...
                                </h5>
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
                {loading ? <Loading/> : <ShowProducts />}
            </div>
        </div>
    </div>
  )
}

export default CatShop
