import React from 'react';
import { Link } from 'react-router-dom';
import { BiArrowBack } from "react-icons/bi";
import watch from "../images/watch.jpg"

const Checkout = () => {
  return (
    <div className='checkout-wrapper py-5 home-wrapper-2'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-7'>
            <div className='checkout-left-data'>
              <h3 className='website-name'>Digitic</h3>
              <nav style={{ "--bs-breadcrumb-divider": ">" }} aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><Link to="/cart" className='text-dark total-price'>Cart</Link></li>
                  &nbsp;&nbsp;/
                  <li className="breadcrumb-item total-price active" aria-current="page">Information</li>
                  &nbsp;&nbsp;/
                  <li className="breadcrumb-item total-price active" aria-current="page">Shipping</li>
                  &nbsp;&nbsp;/
                  <li className="breadcrumb-item total-price active" aria-current="page">Payment</li>
                </ol>
              </nav>
              <h4 className='title'>Contact Information</h4>
              <p className='user-details total'>Pukar Chhatkuli (ckrp2018@gmail.com)</p>
              <h4 className='mb-3'>Shipping Address</h4>
              <form action='#' className='d-flex flex-wrap gap-15 justify-content-between'>
                <div className='w-100'>
                  <select name='' className='form-control form-select' id=''>
                    <option value="" selected disabled>Select Country</option>
                  </select>
                </div>
                <div className='flex-grow-1'>
                  <input type="text" placeholder='First Name' className="form-control"></input>
                </div>
                <div className='flex-grow-1'>
                  <input type="text" placeholder='Last Name' className="form-control"></input>
                </div>
                <div className='w-100'>
                  <input type="text" placeholder='Address' className="form-control"></input>
                </div>
                <div className='w-100'>
                  <input type="text" placeholder='Apartment, Suite, etc' className="form-control"></input>
                </div>
                <div className='flex-grow-1'>
                  <input type="text" placeholder='City' className="form-control"></input>
                </div>
                <div className='flex-grow-1'>
                  <select name='' className='form-control form-select' id=''>
                    <option value="" selected disabled>Select State</option>
                  </select>
                </div>
                <div className='flex-grow-1'>
                  <input type="text" placeholder='zipCode' className="form-control"></input>
                </div>
                <div className='w-100'>
                  <div className='d-flex justify-content-between align-items-center'>
                    <Link to="/cart" className='text-dark d-flex align-items-center'><BiArrowBack className='me-2' />Return to Cart</Link>
                    <Link to="/store" className='button'>Continue to Shopping</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className='col-5'>
            <div className='border-bottom py-4'>
              <div className='d-flex gap-10 mb-2 align-items-center'>
                <div className='w-75 d-flex gap-10'>
                  <div className='w-25 position-relative'>
                    <span style={{"top": "-5px", "right": "-5px"}} className=' position-absolute badge bg-secondary text-white rounded-circle p-1 px-2'>1</span>
                    <img src={watch} alt='watch' className='img-fluid' />
                  </div>
                  <div>
                    <h5 className='total-price'>dfgdfg</h5>
                    <p className='total-price'>sdfgsfgsf</p>
                  </div>
                </div>
                <div className='flex-grow-1'>
                  <h5 className='total'>$100</h5>
                </div>
              </div>
            </div>
            <div className='border-bottom py-4'>
              <div className='d-flex justify-content-between align-items-center'>
                <p className='total'>Subtotal</p>
                <p className='total-price'>$ 1000</p>
              </div>
              <div className='d-flex justify-content-between align-items-center'>
                <p className='mb-0 total'>Shipping</p>
                <p className='mb-0 total-price'>$ 1000</p>
              </div>
            </div>
            <div className='d-flex border-bottom py-4 justify-content-between align-items-center'>
              <h4 className='total'>Total</h4>
              <h5 className='total-price'>$ 1000</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout