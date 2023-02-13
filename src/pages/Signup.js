import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'

const Signup = () => {
  return (
    <>
        <Meta title="SignUp" />
        <BreadCrumb title="Signup" />
        <div className='signup-wrapper py-5 home-wrapper-2'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='auth-card'>
                            <h3 className='text-center mb-3'>Create Account</h3>
                            <form action='#' className='d-flex flex-column gap-15'>
                                <div>
                                    <input className='form-control' placeholder='First name' type="text" name='firstname' />
                                </div>
                                <div>
                                    <input className='form-control' placeholder='Last name' type="text" name='lastname' />
                                </div>
                                <div>
                                    <input className='form-control' placeholder='Email' type="email" name='email' />
                                </div>
                                <div className='mt-1'>
                                    <input className='form-control' type="password" placeholder='Password' name='password' />
                                </div>
                                <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                                    <button className='button border-0' type='submit'>Create</button>
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

export default Signup