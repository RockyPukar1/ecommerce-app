import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import watch from "../images/watch.jpg";
import {AiFillDelete} from "react-icons/ai";
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <>
      <Meta title="Cart" />
      <BreadCrumb title="Cart" />
      <section className='cart-wrapper home-wrapper-2'>
        <div className='container-xxl py-5'>
          <div className='row'>
            <div className='col-12'>
              <div className='cart-header d-flex justify-content-between align-items-center'>
                <h4 className='cart-col-1'>Product</h4>
                <h4 className='cart-col-2'>Price</h4>
                <h4 className='cart-col-3'>Quantity</h4>
                <h4 className='cart-col-4'>Total</h4>
              </div>
              <div className='cart-data my-2 d-flex justify-content-between align-items-center'>
                <div className='cart-col-1 d-flex align-items-center gap-15'>
                  <div className='w-25'>
                    <img src={watch} className="img-fluid" alt='product image' />
                  </div>
                  <div className='w-75'>
                    <p>KJHjlk</p>
                    <p>Size: </p>
                    <p>Color: </p>
                  </div>
                </div>
                <div className='cart-col-2'>
                  <h5 className='price'>$234</h5>
                </div>
                <div className='cart-col-3 d-flex align-items-center gap-15'>
                  <div><input min={0} max={10} type="number" className='form-control' name='' id='' /></div>
                  <div><AiFillDelete className="text-danger" /></div>
                </div>
                <div className='cart-col-4'>
                  <h5 className='price'>$234</h5>
                </div>
              </div>
              <div className='col-12 py-2 mt-4'>
                <div className='d-flex justify-content-between align-items-baseline'>
                  <Link to='/store' className="button">Contitnue to Shopping</Link>
                  <div className='text-end'>
                    <h4>SubTotal: $1000</h4>
                    <p>Taxes and shipping calculated at checkout</p>
                    <Link to="/checkout" className='button'>Checkout</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Cart