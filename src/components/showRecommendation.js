import React from 'react'
import { Link } from 'react-router-dom';

function ShowRecommendation({ random }) {
    return (
        <>
            {random.length > 0 && random.map((product) => (
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

export default ShowRecommendation;