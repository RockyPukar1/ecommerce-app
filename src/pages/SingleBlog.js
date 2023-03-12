import React from 'react'
import { Link } from 'react-router-dom'
import BreadCrumb from '../components/BreadCrumb'
import { HiOutlineArrowLeft } from "react-icons/hi"
import Meta from '../components/Meta'
import ShopByCat from '../components/ShopByCat'
import blog from "../images/blog-1.jpg"
const SingleBlog = () => {
    return (
        <>
            <Meta title="Dynamic Blog Name" />
            <BreadCrumb title="Dynamic Blog Name" />
            <div className='blog-wrapper home-wrapper-2 py-3'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-3'>
                            <div className='filter-card mb-3'>
                                <ShopByCat />
                            </div>
                        </div>
                        <div className='col-9'>
                            <div className='single-blog-card'>
                                <Link to="/blog" className='d-flex align-items-center gap-10'>< HiOutlineArrowLeft className='fs-4' />Go back to Blogs</Link>
                                <h3 className='title'>A Beautiful Sunday Morning Renaissance</h3>
                                <img src={blog} class="img-fluid w-100" alt="blog" />
                                <p>A Beautiful Sunday Morning Renaissance
                                    A beautiful sunday morning renaissance
                                    You're only as good as your last collection, which is an enormous pressure. I think there is something about luxury - it-s not something people need, but it-s what they want. It really pulls at their heart. I have a fantastic relationship with money.Scelerisque sociosqu ullamcorper urna nisl mollis vestibulum pretium commodo inceptos cum condimentum placerat diam venenatis blandit hac eget dis lacus a parturient a accumsan nisl ante vestibulum.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleBlog