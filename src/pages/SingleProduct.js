import React, { useState } from 'react';
import Meta from "../components/Meta";
import BreadCrumb from '../components/BreadCrumb';
import ProductCard from '../components/ProductCard';
import ReactStars from 'react-rating-stars-component';
// import ReactImageZoom from "react-image-zoom";
import { Link } from 'react-router-dom';
import Color from '../components/Color';
import { TbGitCompare } from 'react-icons/tb';
import { AiOutlineHeart } from 'react-icons/ai';
import Container from '../components/Container';
const SingleProduct = () => {
    const [orderedProduct] = useState(true);
    const copyToClipboard = (text) => {
        console.log('text', text)
        var textField = document.createElement('textarea')
        textField.innerText = text
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
    }
    return (
        <>
            <Meta title="Product Name" />
            <BreadCrumb title="Product Name" />
            <Container class1='main-product-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-6'>
                        <div className='main-product-image'>
                            <div>
                                <img src='/images/watch.jpg' alt='' />
                            </div>
                        </div>
                        <div className='other-product-images d-flex flex-wrap gap-15'>
                            <div><img src="/images/watch.jpg" className='img-fluid' alt='' /></div>
                            <div><img src="/images/watch.jpg" className='img-fluid' alt='' /></div>
                            <div><img src="/images/watch.jpg" className='img-fluid' alt='' /></div>
                            <div><img src="/images/watch.jpg" className='img-fluid' alt='' /></div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='main-product-details'>
                            <div className='border-bottom'>
                                <h3 className='title'>Smart Watch With Advanced Health Monitoring, Fitness Tracking</h3>
                            </div>
                            <div className='border-bottom py-3'>
                                <p className='price'>$ 100</p>
                                <div className='d-flex align-items-center gap-10'>
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        value={3}
                                        isHalf={true}
                                        edit={false}
                                        activeColor="#ffd700"
                                    />
                                    <p className='mb-0 t-review'>(2 reviews)</p>
                                </div>
                                <a href='#review' className='review-btn'>Write a Review</a>
                            </div>
                            <div>
                                <div className='d-flex align-items-center gap-10 my-2'>
                                    <h3 className='product-heading'>Type: </h3>
                                    <p className='product-data'>Laptops</p>
                                </div>
                                <div className='d-flex align-items-center gap-10 my-2'>
                                    <h3 className='product-heading'>Brand: </h3>
                                    <p className='product-data'>Bajaj</p>
                                </div>
                                <div className='d-flex flex-column gap-10 my-2'>
                                    <h3 className='product-heading'>Categories: </h3>
                                    <p className='product-data'>Accessoriescamera'sCameras & VideosHeadphonesheadphonesHome AppliancesHome pageiPadslaptopsmini speaker</p>
                                </div>
                                <div className='d-flex align-items-center gap-10 my-2'>
                                    <h3 className='product-heading'>Tags: </h3>
                                    <p className='product-data'>headphones laptop speaker tablet</p>
                                </div>
                                <div className='d-flex align-items-center gap-10 my-2'>
                                    <h3 className='product-heading'>SKU: </h3>
                                    <p className='product-data'>SKU036</p>
                                </div>
                                <div className='d-flex align-items-center gap-10 my-2'>
                                    <h3 className='product-heading'>Availability: </h3>
                                    <p className='product-data'>25 In Stock</p>
                                </div>
                                <div className='d-flex flex-column gap-10 mt-2 mb-3'>
                                    <h3 className='product-heading'>Size: </h3>
                                    <div className='d-flex flex-wrap gap-15'>
                                        <span className='badge border border-1 border-secondary text-dark'>S</span>
                                        <span className='badge border border-1 border-secondary text-dark'>M</span>
                                        <span className='badge border border-1 border-secondary text-dark'>XL</span>
                                        <span className='badge border border-1 border-secondary text-dark'>XXL</span>
                                    </div>
                                </div>
                                <div className='d-flex flex-column gap-10 mt-2 mb-3'>
                                    <h3 className='product-heading'>Color: </h3>
                                    <Color />
                                </div>
                                <div className='d-flex align-items-center gap-10 my-2'>
                                    <h3 className='product-heading'>Quantity: </h3>
                                    <div className=''>
                                        <input type="number" name="" min={1} max={10} style={{ width: "70px" }} className="form-control" />
                                    </div>
                                    <div className='d-flex gap-15 align-items-center ms-5'>
                                        <button className='button border-0'>Add to Cart</button>
                                        <button className='button signup border-0'>Buy it now</button>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-15'>
                                    <div>
                                        <a href='/compare-product'>
                                            <TbGitCompare className='fs-5 me-2' /> Add to compare</a>
                                    </div>
                                    <div>
                                        <a href='/wishlist'>
                                            <AiOutlineHeart className='fs-5 me-2' /> Add to wishlist</a>
                                    </div>
                                </div>
                                <div className='d-flex flex-column gap-10 my-2 mt-4 border-bottom'>
                                    <h3 className='product-heading'>Shipping and Returns</h3>
                                    <p className='product-data'>Free shipping and returns available on all orders!<br />We ship all US domestic orders within <strong>5-10 business days!</strong></p>
                                </div>
                                <div className='d-flex flex-column gap-10 my-2 mt-4'>
                                    <h3 className='product-heading'>Product Link: </h3>
                                    <a href="javascript:void(0);" onClick={() => { copyToClipboard("https://unsplash.com/photos/vCF5sB7QecM") }}>
                                        Copy Product Link
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1='description-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-12'>
                        <h4>Description</h4>
                        <div className='bg-white p-3'>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione beatae dolorum illo sapiente mollitia, consequuntur assumenda aliquam, provident non tenetur omnis delectus id, optio quod modi est ducimus fugiat dolorem.</p>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1='popular-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-12'>
                        <h4>Our Popular Products</h4>
                    </div>
                </div>
                <div className='row'>
                    <ProductCard />
                    <ProductCard />
                </div>
            </Container>
            <Container id='review' class1='reviews-wrapper pb-5 home-wrapper-2'>
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
            </Container>
        </>
    )
}

export default SingleProduct