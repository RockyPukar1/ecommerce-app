import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';

const ProductCard = (props) => {
    const {grid} = props;
    let location = useLocation();
    console.log(location);
    return (
        <div className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3" }`}>
            <Link to="" className='product-card position-relative'>
                <div className='wishlist-icon position-absolute'>
                    <Link to=""><img src='images/wish.svg' alt='wishlist' /></Link>
                </div>
                <div className='product-image'>
                    <img src='images/watch.jpg' alt='product' />
                </div>
                <div className='product-details'>
                    <h6 className='brand'>Havels</h6>
                    <h5 className='product-title'>Kids headphone bulk 10 pack multi colored for students</h5>
                    <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        isHalf={true }
                        edit={false}
                        activeColor="#ffd700"
                    />
                    <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt...</p>
                    <p className='price'>$1000.00</p>
                </div>
                <div className='action-bar position-absolute'>
                    <div className='d-flex flex-column gap-15'>
                        <Link to=""><img src='images/view.svg' alt='view' /></Link>
                        <Link to=""><img src='images/prodcompare.svg' alt='compare' /></Link>
                        <Link to=""><img src='images/add-cart.svg' alt='addcart' /></Link>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ProductCard  