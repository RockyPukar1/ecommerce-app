import React from 'react'
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import Container from '../components/Container';

const Wishlist = () => {
    return (
        <>
            <Meta title="Wishlist" />
            <BreadCrumb title="Wishlist" />
            <Container className='wishlist-wrapper home-wrapper-2 py-5'>
                    <div className='row'>
                        <div className='col-3'>
                            <div className='wishlist-card position-relative'>
                                <img className='position-absolute cross img-fluid' src='images/cross.svg' alt='' />
                                <div className='wishlist-card-image'>
                                    <img src='images/watch.jpg' className="img-fluid w-100"
                                    alt='watch' />
                                </div>
                                <div className='py-3 px-3'>
                                    <h5 className='title'>Kids headphone bulk 10 pack multi colored for students</h5>
                                    <h6 className='price'>$100.00</h6>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='wishlist-card position-relative'>
                                <img className='position-absolute cross img-fluid' src='images/cross.svg' alt='' />
                                <div className='wishlist-card-image'>
                                    <img src='images/watch.jpg' className="img-fluid w-100"
                                    alt='watch' />
                                </div>
                                <div className='py-3 px-3'>
                                    <h5 className='title'>Kids headphone bulk 10 pack multi colored for students</h5>
                                    <h6 className='price'>$100.00</h6>
                                </div>
                            </div>
                        </div>
                    </div>
            </Container>
        </>
    )
}

export default Wishlist