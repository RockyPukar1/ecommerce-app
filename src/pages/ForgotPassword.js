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
                            <p className='text-center my-2 mb-3'>We will send you an email to reset your password</p>
                            <form action='#' className='d-flex flex-column gap-15'>
                                <div>
                                    <input className='form-control' placeholder='Email' type="email" name='email' />
                                </div>
                                <div className='mt-3 d-flex flex-column justify-content-center gap-15 align-items-center'>
                                    <button className='button border-0' type='submit'>Submit</button>
                                    <Link to="/login">Cancel</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ForgotPassword