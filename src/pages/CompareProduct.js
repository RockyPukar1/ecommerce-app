import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Color from '../components/Color';
import Meta from '../components/Meta';

const CompareProduct = () => {
    return (
        <>
            <Meta title="Compare" />
            <BreadCrumb title="Compare" />
            <div className='compare-product-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-3'>
                            <div className='compare-product-card position-relative'>
                                <img className='position-absolute cross img-fluid' src='images/cross.svg' alt='' />
                                <div className='product-card-image'>
                                    <img src='images/watch.jpg' alt='' />
                                    <div className='compare-product-details'>
                                        <h5 className='title'>Kids headphone bulk 10 pack multi colored for students</h5>
                                        <h6 className='price my-3'>$1000.00</h6>
                                        <div>
                                            <div className='product-detail'>
                                                <h5>Brand:</h5>
                                                <p>Havels</p>
                                            </div>
                                            <div className='product-detail'>
                                                <h5>Type:</h5>
                                                <p>Watch</p>
                                            </div>
                                            <div className='product-detail'>
                                                <h5>Availability:</h5>
                                                <p>In Stock</p>
                                            </div>
                                            <div className='product-detail'>
                                                <h5>Color:</h5>
                                                <div>
                                                    <Color />
                                                </div>
                                            </div>
                                            <div className='product-detail'>
                                                <h5>Size:</h5>
                                                <div className='d-flex gap-10'>
                                                    <p>S</p>
                                                    <p>M</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='compare-product-card position-relative'>
                                <img className='position-absolute cross img-fluid' src='images/cross.svg' alt='' />
                                <div className='product-card-image'>
                                    <img src='images/watch.jpg' alt='' />
                                    <div className='compare-product-details'>
                                        <h5 className='title'>Kids headphone bulk 10 pack multi colored for students</h5>
                                        <h6 className='price my-3'>$1000.00</h6>
                                        <div>
                                            <div className='product-detail'>
                                                <h5>Brand:</h5>
                                                <p>Havels</p>
                                            </div>
                                            <div className='product-detail'>
                                                <h5>Type:</h5>
                                                <p>Watch</p>
                                            </div>
                                            <div className='product-detail'>
                                                <h5>Availability:</h5>
                                                <p>In Stock</p>
                                            </div>
                                            <div className='product-detail'>
                                                <h5>Color:</h5>
                                                <div>
                                                    <Color />
                                                </div>
                                            </div>
                                            <div className='product-detail'>
                                                <h5>Size:</h5>
                                                <div className='d-flex gap-10'>
                                                    <p>S</p>
                                                    <p>M</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CompareProduct;