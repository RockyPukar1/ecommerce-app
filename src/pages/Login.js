import React from 'react'
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
        <Meta title="Login" />
        <BreadCrumb title="login" />
        <div className='login-wrapper py-5 home-wrapper-2'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='auth-card'>
                            <h3 className='text-center mb-3'>Login</h3>
                            <form action='#' className='d-flex flex-column gap-15'>
                                <div>
                                    <input className='form-control' placeholder='Email' type="email" name='email' />
                                </div>
                                <div className='mt-1'>
                                    <input className='form-control' type="password" placeholder='Password' name='password' />
                                </div>
                                <div>
                                    <Link to="/forgot-password">Forgot Password</Link>
                                </div>
                                <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                                    <button className='button border-0'>Login</button>
                                    <Link to="/signup" className='button signup'>Sign Up</Link>
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

export default Login