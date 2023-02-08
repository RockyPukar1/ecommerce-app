import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from "react-fast-marquee";
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/SpecialProduct';
import { Helmet } from 'react-helmet';
const Home = () => {
  return (
    <>
      <Helmet>
            <meta charSet="utf-8" />
            <title>Home</title>
      </Helmet>
      <section className='home-wrapper-1 py-5'>
        <div className='container-xxl'>
          <div className='row py-3'>
            <div className='col-6'>
              <div className='main-banner position-relative'>
                <img className='img-fluid rounded-3' src='images/main-banner-1.jpg' alt='main banner' />
                <div className='main-banner-content position-absolute'>
                  <h4>supercharge for pros.</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From $999.00 or <br />$41.62/month</p>
                  <Link className='button' to="">BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className='col-6'>
              <div className='d-flex flex-wrap justify-content-between align-items-center gap-10'>
                <div className='small-banner position-relative'>
                  <img className='img-fluid rounded-3' src='images/catbanner-01.jpg' alt='main banner' />
                  <div className='small-banner-content position-absolute'>
                    <h4>supercharge for pros.</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>From $999.00 or <br />$41.62/month</p>
                  </div>
                </div>
                <div className='small-banner position-relative'>
                  <img className='img-fluid rounded-3' src='images/catbanner-02.jpg' alt='main banner' />
                  <div className='small-banner-content position-absolute'>
                    <h4>supercharge for pros.</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>From $999.00 or <br />$41.62/month</p>
                  </div>
                </div>
                <div className='small-banner position-relative'>
                  <img className='img-fluid rounded-3' src='images/catbanner-03.jpg' alt='main banner' />
                  <div className='small-banner-content position-absolute'>
                    <h4>supercharge for pros.</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>From $999.00 or <br />$41.62/month</p>
                  </div>
                </div>
                <div className='small-banner position-relative'>
                  <img className='img-fluid rounded-3' src='images/catbanner-04.jpg' alt='main banner' />
                  <div className='small-banner-content position-absolute'>
                    <h4>supercharge for pros.</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>From $999.00 or <br />$41.62/month</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='services d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center gap-15'>
                  <img src="images/service.png" alt="services" />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className='mb-0'>From all orders over $5</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src="images/service-02.png" alt="services" />
                  <div>
                    <h6>Daily Surprise Offers</h6>
                    <p className='mb-0'>Save upt0 25% off</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src="images/service-03.png" alt="services" />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className='mb-0'>Shop with an expert</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src="images/service-04.png" alt="services" />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className='mb-0'>Get Factory Default Price</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src="images/service-05.png" alt="services" />
                  <div>
                    <h6>Secure Payment</h6>
                    <p className='mb-0'>100% Protected Payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='col-12'>
            <div className='categories d-flex justify-content-between align-items-center flex-wrap'>
              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt='camera' />
              </div>
              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt='camera' />
              </div>
              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Smart TV</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/tv.jpg" alt='camera' />
              </div>
              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/headphone.jpg" alt='camera' />
              </div>
              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt='camera' />
              </div>
              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt='camera' />
              </div>
              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Smart TV</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/tv.jpg" alt='camera' />
              </div>
              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/headphone.jpg" alt='camera' />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='featured-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Featured Collection</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>

      <section className='famous-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img className='img-fluid' src='images/famous-1.webp' alt='famous' />
                <div className='famous-content position-absolute'>
                  <h5>Big Screen</h5>
                  <h6>Smart Watch Series 7</h6>
                  <p>From $399 or $16.62/month for 24 month</p>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img className='img-fluid' src='images/famous-2.webp' alt='famous' />
                <div className='famous-content position-absolute'>
                  <h5 className='text-dark'>Studio Display</h5>
                  <h6 className='text-dark'>600 nits of brightness.</h6>
                  <p className='text-dark'>27-inch 5K Retina display</p>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img className='img-fluid' src='images/famous-3.webp' alt='famous' />
                <div className='famous-content position-absolute'>
                  <h5 className='text-dark'>Smartphones</h5>
                  <h6 className='text-dark'>Smartphone 13 Pro.</h6>
                  <p className='text-dark'>Now in Green. From $999.00 or $41.62/mo.</p>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img className='img-fluid' src='images/famous-4.webp' alt='famous' />
                <div className='famous-content position-absolute'>
                  <h5 className='text-dark'>home speakers</h5>
                  <h6 className='text-dark'>Room-filling sound.</h6>
                  <p className='text-dark'>From $699 or $116.58/mo. for 12 mo.*</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='special-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='section-heading'>Special Products</div>
            </div>
          </div>
          <div className='row'>
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
          </div>
        </div>
      </section>

      <section className='popular-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Our Popular Products</h3>
            </div>
          </div>
          <div className='row'>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>

      <section className='marquee-wrapper py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='marquee-inner-wrapper card-wrapper'>
                <Marquee className='d-flex'>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-01.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-02.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-03.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-04.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-05.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-06.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-07.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-08.png' alt='brand' />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='blog-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Our Latest Blogs</h3>
            </div>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home