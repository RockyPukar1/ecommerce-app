import React from 'react'
import { Link } from 'react-router-dom'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'

const ResetPassword = () => {
    return (
        <>
            <Meta title="Reset Password" />
            <BreadCrumb title="Reset Password" />
            <div className='resetpassword-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='auth-card'>
                                <h3 className='text-center mb-3'>Reset Password</h3>
                                <form action='#' className='d-flex flex-column gap-15'>
                                    <div className='mt-1'>
                                        <input className='form-control' type="password" placeholder='Password' name='password' />
                                    </div>
                                    <div className='mt-1'>
                                        <input className='form-control' type="password" placeholder='Confirm Password' name='confpassword' />
                                    </div>
                                    <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                                        <div className='mt-3 flex-column d-flex justify-content-center gap-15 align-items-center'>
                                            <button className='button border-0' type='submit'>OK</button>
                                            <Link to="/login">Cancel</Link>
                                        </div>
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

export default ResetPassword