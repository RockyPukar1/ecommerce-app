import React from 'react'
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  return (
    <>
        <Meta title="Forgot Password" />
        <BreadCrumb title="forgot password" />
        <div className='login-wrapper py-5 home-wrapper-2'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='auth-card'>
                            <h3 className='text-center mb-3'>Reset Your Password</h3>
                            <form action='#' className='d-flex flex-column gap-15'>
                                <div>
                                    <input className='form-control' placeholder='Email' type="email" name='email' />
                                </div>
                                <div>
                                    <Link to="/forgot-password">Forgot Password</Link>
                                </div>
                                <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                                    <button className='button border-0'>Login</button>
                                    <Link to="" className='button signup'>Sign Up</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>'
    </>
  )
}

export default ForgotPassword