import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Container from '../components/Container'
import Meta from '../components/Meta'
import CustomInput from '../components/CustomInput';

const Signup = () => {
    return (
        <>
            <Meta title="SignUp" />
            <BreadCrumb title="Signup" />
            <Container class1='signup-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='auth-card'>
                            <h3 className='text-center mb-3'>Create Account</h3>
                            <form action='#' className='d-flex flex-column gap-15'>
                                <CustomInput placeholder='First name' type="text" name='firstname' />
                                <CustomInput placeholder='Last name' type="text" name='lastname' />
                                <CustomInput placeholder='Email' type="email" name='email' />
                                <CustomInput type="password" placeholder='Password' name='password' />
                                <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                                    <button className='button border-0' type='submit'>Create</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Signup