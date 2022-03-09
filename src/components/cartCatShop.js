import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addCart, delCart } from '../Redux/Actions/cartProductAct';

function CartCatShop() {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  console.log(state);

  const handleAdd = (product) => {
    dispatch(addCart(product));
  };

  const handleDel = (product) => {
    dispatch(delCart(product));
  };

  const cartProduct = (product) => {
      return (
        <>
            <div className="px-4 my-5 bg-light rounded-3 py-5">
                <div className="container py-4">
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <img src={product.image} alt={product.title} height="200px" width="180px" />
                        </div>
                        <div className="col-md-4">
                            <h3>{product.title}</h3>
                            <p className="lead fw-bold">
                                {product.qty} x Rp {product.price} = Rp {product.total}
                            </p>
                            <button className="btn btn-outline-dark me-4" onClick={() => handleDel(product)}>
                                <i className="fa fa-minus"></i>
                            </button>
                            <button className="btn btn-outline-dark me-4" onClick={() => handleAdd(product)}>
                                <i className="fa fa-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
      )
  }

  const emptyCart = () => {
    return (
      <div className="container py-5 my-5 text-center">
        <img src="/images/purr-shopping.png"  width="500" alt="" srcset="" />
        <Link to="/catshop" className="text-decoration-none text">
          <h3 className="text-warning">Oopps your cart is empty. Let's go to CatShop</h3>
        </Link>
      </div>
    )
  }

  const buttonCheckout = () => {
    return (
      <>
        <div className="container">
          <div className="row">
            <Link to="/checkout" className="btn btn-outline-dark mb-5 w-25 mx-auto">
              Proceed To Checkout
            </Link>
          </div>
        </div>
      </>    
    )
  }

  return (
    <div>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartProduct)}
      {state.length !== 0 && buttonCheckout()}
    </div>
  )
}

export default CartCatShop;