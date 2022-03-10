import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function RecommendationProduct() {
  const [dataCatShop, setDataCatShop] = useState([]);
  console.log(dataCatShop);
  const [random, setRandom] = useState([]);
  console.log(random);
  let getData = true;

  useEffect(async()=>{
    const getProducts = async () => {
        const getDataAPICatShop = await fetch("https://6215ac43c9c6ebd3ce2e4ad8.mockapi.io/stuff");
        if(getData){
            setDataCatShop(await getDataAPICatShop.clone().json());
            setRandom(await getDataAPICatShop.json());
        }

        return () => {
            getData = false;
        }
    }
    getProducts();

    // const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);

    // const newData = shuffle(dataCatShop);

    // console.log(newData)
    
    let limitData = [];
    for(let i=0; i<4; i++){
      limitData.push(dataCatShop.data[i]);
    }
    console.log(limitData);

    setRandom(limitData);
  }, [])

  const ShowRecommendation = () => {
    return(
      <>
        {random.map((product) => (
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
        ))}
      </>
    )
  }

  return (
    <div>
      <div className="row mt-4">
        <h3 className="fw-bolder">Recommendation Product</h3>
      </div>
      <div className="row mt-4 justify-content-center">
        <ShowRecommendation />
      </div>
    </div>
  )
}

export default RecommendationProduct;
