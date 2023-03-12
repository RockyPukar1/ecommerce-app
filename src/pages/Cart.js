import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'

const Cart = () => {
  return (
    <>
        <Meta title="Cart" />
        <BreadCrumb title="Cart" />
        <section className='cart-wrapper home-wrapper-2'>
          <div className='container-xxl'>
            <div className='row'>
              <div className='col-12'>
                <div className='cart-header d-flex justify-content-between align-items-center'>
                  <h4 className='cart-col-1'>Product</h4>
                  <h4 className='cart-col-2'>Price</h4>
                  <h4 className='cart-col-3'>Quantity</h4>
                  <h4 className='cart-col-4'>Total</h4>
                </div>
                <div className='cart-data d-flex justify-content-between align-items-center'>
                  <div className='cart-col-1 d-flex align-items-center'>
                    <div></div>
                    <div></div>
                  </div>
                  <div className='cart-col-2'></div>
                  <div className='cart-col-3'></div>
                  <div className='cart-col-4'></div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Cart