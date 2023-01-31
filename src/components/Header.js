import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import {BsSearch} from "react-icons/bs";

const Header = () => {
  return (
    <>
      <header className='header-top-strip py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <p className='text-white mb-0'>Free Shipping Over $100 & Free Returns</p>
            </div>
            <div className='col-6'>
              <p className='text-end text-white mb-0'>Hotline: <a className='text-white' href="tel:+91 8264954234">+01 8264954234</a></p>
            </div>
          </div>
        </div>
      </header>

      <header className='header-upper py-3'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-2'>
              <h2>
                <Link to="#" className='text-white'>Digitic</Link>
              </h2>
            </div>
            <div className='col-5'>
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search Product Here..." aria-label="Search Product Here..." aria-describedby="basic-addon2" />
                <span className="input-group-text" id="basic-addon2">
                  <BsSearch className='fs-6' />
                </span>
              </div>
            </div>
            <div className='col-5'>
              <div className='header-upper-links d-flex align-items-center justify-content-between'>
                <div>
                  <Link to="" className='d-flex align-items-center gap-10 text-white'>
                    <img src="images/compare.svg" alt="compare" />
                    <p className='mb-0'>Compare <br /> Products</p>
                  </Link>
                </div>
                <div>
                  <Link to="" className='d-flex align-items-center gap-10 text-white'>
                    <img src="images/wishlist.svg" alt="wishlist" />
                    <p className='mb-0'>Favorite <br /> Wishlist</p>
                  </Link>
                </div>
                <div>
                  <Link to="" className='d-flex align-items-center gap-10 text-white'>
                    <img src="images/user.svg" alt="user" />
                    <p className='mb-0'>Log in <br /> My Account</p>
                  </Link>
                </div>
                <div>
                  <Link to="" className='d-flex align-items-center gap-10 text-white'>
                    <img src="images/cart.svg" alt="cart" />
                    <div className='d-flex flex-column gap-10'>
                      <span className='badge bg-white text-dark'>0</span>
                      <p className='mb-0'>$ 500</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header;