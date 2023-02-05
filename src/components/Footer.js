import React from 'react'
import { Link } from 'react-router-dom'
import {BsLinkedin, BsGithub, BsYoutube, BsInstagram} from 'react-icons/bs';

function Footer() {
  return (
    <>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-5'>
              <div className='footer-top-data d-flex gap-30 align-items-center'>
                <img src="images/newsletter.png" alt='' />
                <h2 className='mb-0 text-white'>Sign Up for Newletter</h2>
              </div>
            </div>
            <div className='col-7'>
              <div className="input-group">
                <input type="text" className="form-control py-1" placeholder="Your Email Address" aria-label="Your Email Address" aria-describedby="basic-addon2" />
                <span className="input-group-text" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className='py-4'>
        <div className='container'>
          <div className='row'>
            <div className='col-4'>
              <h4 className='text-white mb-4'>Contact Us</h4>
              <div>
                <address className='text-white fs-6'>Hno: 277 Near Vill chopal,<br/> Sonipat, Haryana <br />
                Pincode: 121103</address>
                <a href='tel: +91 826484843' className='mt-3 d-block mb-1 text-white'>+91 826484843</a>
                <a href='mailto: hello@hello.com' className='mt-4 d-block mb-0 text-white'>hello@hello.com</a>
                <div className='social-icons d-flex align-items-center gap-30 mt-4'>
                  <Link className='text-white' to='#'>
                    <BsLinkedin className='fs-4' />
                  </Link>
                  <Link className='text-white' to='#'>
                    <BsInstagram className='fs-4' />
                  </Link>
                  <Link className='text-white' to='#'>
                    <BsGithub className='fs-4' />
                  </Link>
                  <Link className='text-white' to='#'>
                    <BsYoutube className='fs-4' />
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4'>Information</h4>
              <div className='footer-link d-flex flex-column'>
                <Link className="text-white py-2 mb-1" to="">Privacy Policy</Link>
                <Link className="text-white py-2 mb-1" to="">Refund Policy</Link>
                <Link className="text-white py-2 mb-1" to="">Shipping Policy</Link>
                <Link className="text-white py-2 mb-1" to="">Terms & Conditions</Link>
                <Link className="text-white py-2 mb-1" to="">Blogs</Link>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4'>Account</h4>
              <div className='footer-link d-flex flex-column'>
                <Link className="text-white py-2 mb-1" to="">About Us</Link>
                <Link className="text-white py-2 mb-1" to="">Faq</Link>
                <Link className="text-white py-2 mb-1" to="">Contact</Link>
              </div>
            </div>
            <div className='col-2'>
              <h4 className='text-white mb-4'>Quick Links</h4>
              <div className='footer-link d-flex flex-column'>
                <Link className="text-white py-2 mb-1" to="">Laptops</Link>
                <Link className="text-white py-2 mb-1" to="">Headphones</Link>
                <Link className="text-white py-2 mb-1" to="">Tablets</Link>
                <Link className="text-white py-2 mb-1" to="">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <p className='text-center mb-0 text-white'>&copy; {new Date().getFullYear()}: Powered by Developer's Corner</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer