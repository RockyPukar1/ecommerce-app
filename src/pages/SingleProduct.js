import React, { useState } from 'react';
import Meta from "../components/Meta";
import BreadCrumb from '../components/BreadCrumb';
import ProductCard from '../components/ProductCard';
import ReactStars from 'react-rating-stars-component'
import { Link } from 'react-router-dom';

const SingleProduct = () => {
    
    
    const [orderedProduct] = useState(true);
    return (
        <>
            <Meta title="Product Name" />
            <BreadCrumb title="Product Name" />
            <div className='main-product-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl p-3 bg-white'>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='main-product-image'>
                                <div></div>
                            </div>
                        </div>
                        <div className='col-6'></div>
                    </div>
                </div>
            </div>
            <div className='description-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <h4>Description</h4>
                            <div className='bg-white p-3'>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione beatae dolorum illo sapiente mollitia, consequuntur assumenda aliquam, provident non tenetur omnis delectus id, optio quod modi est ducimus fugiat dolorem.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className='popular-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <h4>Our Popular Products</h4>
                        </div>
                    </div>
                    <div className='row'>
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>
            </section>
            <section className='reviews-wrapper pb-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <h4>Reviews</h4>
                            <div className='review-inner-wrapper'>
                                <div className='review-head d-flex justify-content-between align-items-end'>
                                    <div>
                                        <h4 className='mb-2'>Customer Review</h4>
                                        <div className='d-flex gap-10 align-items-center'>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={3}
                                                isHalf={true}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            <p className='mb-0'>Based on 2 reviews</p>
                                        </div>
                                    </div>
                                    {
                                        orderedProduct && (<div>
                                            <Link to='' className='text-dark text-decoration-underline'>Write a Review</Link>
                                        </div>)
                                    }
                                </div>
                                <div className='review-form py-4'>
                                    <form className='d-flex flex-column gap-15'>
                                        <h4>Write a Review</h4>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={3}
                                            isHalf={true}
                                            edit={true}
                                            activeColor="#ffd700"

                                        />
                                        <div>
                                            <textarea name='' type="text" id='' className='w-100 form-control' cols='30' rows="4" placeholder='Comment'></textarea>
                                        </div>
                                        <div className='d-flex justify-content-end'>
                                            <button className='button border-0'>Submit Review</button>
                                        </div>
                                    </form>
                                </div>
                                <div className='reviews mt-3'>
                                    <div className='review'>
                                        <div className='d-flex gap-10 align-items-center'>
                                            <h6 className="mb-0">Pukar Chhatkuli</h6>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={3}
                                                isHalf={true}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                        </div>
                                        <p className='mt-3'>Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem</p>
                                    </div>
                                    <div className='review'>
                                        <div className='d-flex gap-10 align-items-center'>
                                            <h6 className="mb-0">Pukar Chhatkuli</h6>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={3}
                                                isHalf={true}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                        </div>
                                        <p className='mt-3'>Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem</p>
                                    </div>
                                    <div className='review'>
                                        <div className='d-flex gap-10 align-items-center'>
                                            <h6 className="mb-0">Pukar Chhatkuli</h6>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={3}
                                                isHalf={true}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                        </div>
                                        <p className='mt-3'>Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem</p>
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

export default SingleProduct