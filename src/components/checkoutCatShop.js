import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import swal from '@sweetalert/with-react';
import { useNavigate } from 'react-router-dom';

function CheckoutCatShop() {
  const state = useSelector((state) => state.handleCart);
  console.log(state);
  const navigate = useNavigate();
  
  const [totalPrice, setTotalPrice] = useState(0);
  const [isCheck, setIsCheck] = useState(false);

  useEffect(() => {
    const total = state
      .map(item => item.total)
      .reduce((prevItem, currItem) => prevItem + currItem, 0);

    setTotalPrice(total);
  }, [state]);

  const delivery = () => {
    setIsCheck(!isCheck)
  }

  useEffect(() => {
    if (totalPrice > 0) {
      if (isCheck) {
        let newTotal = totalPrice + 16000;
        setTotalPrice(newTotal);
      }
      else {
        let newTotal = totalPrice - 16000;
        setTotalPrice(newTotal);
      }
    }
  }, [isCheck])

  console.log(isCheck);

  const cartProduct = (product) => {
    return (
      <>

        <div className="container">
          <div className="row">
            <div className="col-md-3 my-3 text-center">
              <img src={product.image} alt={product.title} height="100px" width="100px" />
            </div>
            <div className="col-md-9 my-3">
              <h4>{product.title}</h4>
              <p className="lead fw-bold">
                {product.qty} x Rp {product.price} = Rp {product.total}
              </p>
            </div>
          </div>
        </div>

      </>
    )
  }

  const succesPayment = () => {
    localStorage.setItem("transaction", JSON.stringify(state));
    localStorage.setItem("total", totalPrice);
    return (
      <>
        {swal(
          <div>
            <h1>Berhasil!</h1>
            <p>
              Terima kasih sudah membeli produk kami <i className="fa fa-heart"></i>
            </p>
          </div>,
          { buttons: "Belanja lagi yuk!" }
        ).then(() => {
          window.location.href = "/catshop";
//           navigate("/catshop");
        })}
      </>
    )
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 my-4 me-2 border border-2 rounded-3 bg-light">
          {state.length !== 0 && state.map(cartProduct)}
        </div>
        <div className="col-md-5 my-4 ms-2">
          <div className="row mb-md-3 border border-2 rounded-3 bg-light">
            <div className="row mt-md-3">
              <div className="col">
                <label>
                  <input type="checkbox" className="form-check-input" onChange={delivery} checked={isCheck} />
                  <span className="form-check-label"> Mau dianterin? (+ Rp 16000)</span>
                </label>
                <hr />
              </div>
            </div>
            <div className="row">
              <div className="col-md-7">
                <h5>Total pembayaran</h5>
              </div>
              <div className="col-md-5 text-end">
                <h5>Rp {totalPrice}</h5>
              </div>
            </div>
          </div>
          <div className="row mt-md-2 border border-2 rounded-3 bg-light text-center">
            <p className="text-center fs-5 fw-bold">Cara Pembayaran</p>
            <span className="text-center">Anda dapat melakukan pembayaran dengan
              <br /> men-scan QR Code dibawah ini, terima kasih <i className="fa fa-heart"></i></span>
            <div className="col">
              <br />
              <img src="/images/scanqr.png" alt="Scan Me!" height="240px" width="190px" />
            </div>
            <div className="row mt-3 mb-4 ps-5 pe-4"><button type="button" className="btn btn-outline-success fw-bold" onClick={() => succesPayment()}>Konfirmasi Pembayaran</button></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutCatShop
