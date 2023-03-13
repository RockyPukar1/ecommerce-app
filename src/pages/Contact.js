import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import {AiOutlineHome} from "react-icons/ai";
import {BiPhoneCall} from "react-icons/bi";
import {BiInfoCircle} from "react-icons/bi";
import {AiOutlineMail} from "react-icons/ai";
import { Link } from 'react-router-dom';
import Container from '../components/Container';

const Contact = () => {
  return (
    <>
      <Meta title={"Contact"} />
      <BreadCrumb title="Contact" />
      <Container class1='contact-wrapper py-5 home-wrapper-2'>
          <div className='row'>
            <div className='col-12'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1781700.7621204634!2d74.91767492154283!3d29.28572557402137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390db00b8670400b%3A0x732eaab4aaa6c143!2sHaryana%2C%20India!5e0!3m2!1sen!2snp!4v1676111162560!5m2!1sen!2snp" className='w-100' height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='map'/>
            </div>
            <div className='col-12 mt-5'>
              <div className='contact-inner-wrapper d-flex justify-content-between'>
                <div>
                  <h3 className='contact-title mb-4'>Contact</h3>
                  <form action='' className='d-flex flex-column gap-15'>
                    <div>
                      <input type="text" placeholder='Name' className='form-control' />
                    </div>
                    <div>
                      <input type="email" placeholder='Email *' className='form-control' />
                    </div>
                    <div>
                      <input type="tel" placeholder='Phone number' className='form-control' />
                    </div>
                    <div>
                      <textarea name='' type="text" id='' className='w-100 form-control' cols='30' rows="4" placeholder='Comment'></textarea>
                    </div>
                    <div>
                      <button className='button border-0'>Submit</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className='contact-title mb-4'>Get in Touch with Us</h3>
                  <div>
                    <ul className='ps-0 get-touch'>
                      <li className='mb-3 d-flex align-items-center gap-2'><AiOutlineHome className='fs-5' /><address className='mb-0'>33 New Montgomery St. Ste 750 San Francisco, CA, USA 94105</address></li>
                      <li className='mb-3 d-flex align-items-center gap-2'><BiPhoneCall className='fs-5' />
                      <Link className='get-touch' to="tel: (+91)7-723-4608">(+91)7-723-4608</Link></li>
                      <li className='mb-3 d-flex align-items-center gap-2'><AiOutlineMail className='fs-5' /><Link className='get-touch' to="mailto: demo@company.com" >mailto: demo@company.com</Link></li>
                      <li className='mb-3 d-flex align-items-center gap-2'><BiInfoCircle className='fs-5' /><p className='mb-0'>Monday - Friday 10 AM - 8 PM</p></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </Container>
    </>
  )
}

export default Contact;