import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CatShop from '../pages/CatShop';

function RecommendationProduct() {
  const [random, setRandom] = useState([]);
  useEffect(async()=>{
    const getDataAPI = await axios.get("https://6215ac43c9c6ebd3ce2e4ad8.mockapi.io/stuff");

    let limitData = [];
    for(let i=0; i<5; i++){
      limitData.push(getDataAPI.data[i]);
    }

    setRandom(limitData);
  })

  const ShowRecommendation = () => {
    return(
      <>
        {/* {random.map(() => (
          a
        ))} */}
      </>
    )
  }

  return (
    <div>
      <h3>Recommendation Product</h3>
      <CatShop />
    </div>
  )
}

export default RecommendationProduct;
