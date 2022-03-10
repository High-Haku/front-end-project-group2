import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ShowRecommendation from './showRecommendation';

function RecommendationProduct() {
  const [dataCatShop, setDataCatShop] = useState([]);
  const [random, setRandom] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const getDataAPICatShop = await fetch("https://6215ac43c9c6ebd3ce2e4ad8.mockapi.io/stuff");
      const resultData = await getDataAPICatShop.json();
      setDataCatShop(resultData);

      // return () => {
      //     getData = false;
      // }
    }
    getProducts();
  }, [])

  useEffect(() => {
    if (dataCatShop.length > 0) {
      const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);

      const newData = shuffle(dataCatShop);

      // console.log(newData)

      let limitData = [];
      for (let i = 0; i < 4; i++) {
        limitData.push(newData[i]);
      }
      // console.log(limitData);

      setRandom(limitData);
    }
  }, [dataCatShop])


  console.log(dataCatShop);
  console.log(random);
  return (
    <div>
      <div className="row mt-4">
        <h3 className="fw-bolder">Recommendation Product</h3>
      </div>
      <div className="row mt-4 justify-content-center">
        <ShowRecommendation random={random} />
      </div>
    </div>
  )
}

export default RecommendationProduct;
