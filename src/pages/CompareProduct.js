import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';

const CompareProduct = () => {
  return (
    <>
        <Meta title="Compare"/>
        <BreadCrumb title="Compare" />
        <div className='compare-product-wrapper py-5 home-wrapper-2'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-3'>
                        <div className='compare-product-card'>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default CompareProduct;