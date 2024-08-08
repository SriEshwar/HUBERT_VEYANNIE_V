import React from 'react'
import { Link } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar, faStarHalfAlt, faStar as faStarEmpty } from '@fortawesome/free-solid-svg-icons';

export default function ProductCard({ product }) {
    // const renderStars = (rating) => {
    //     const fullStars = Math.floor(rating);
    //     const halfStar = rating % 1 !== 0;
    //     const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    //     return (
    //         <>
    //             {[...Array(fullStars)].map((_, index) => (
    //                 <FontAwesomeIcon key={index} icon={faStar} className="text-warning" />
    //             ))}
    //             {halfStar && <FontAwesomeIcon icon={faStarHalfAlt} className="text-warning" />}
    //             {[...Array(emptyStars)].map((_, index) => (
    //                 <FontAwesomeIcon key={index} icon={faStarEmpty} className="text-warning" />
    //             ))}
    //         </>
    //     );
    // };
    return (
        <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
            <div className="card h-100 p-3 rounded shadow-sm d-flex flex-column">
                <div className="image-container">
                    <img
                        className="card-img-top product-image img-fluid"
                        src={product.images[0].image}
                        alt='product'
                    />
                </div>
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">
                        <Link to={'/product/' + product._id} className="text-dark text-decoration-none">
                            {product.name}
                        </Link>
                    </h5>
                    <div className="ratings mt-auto">
                        <div className="rating-outer">
                            <div className="rating-inner" style={{ width: `${product.ratings / 5 * 100}%` }} ></div>
                        </div>
                    </div>
                    <p className="card-text font-weight-bold">${product.price}</p>
                    <Link to={'/product/' + product._id} className="btn btn-primary btn-block mt-auto">
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
}
