import React from 'react'
import BlogCard from '../components/BlogCard'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'

const Blog = () => {
  return (
    <>
      <Meta title={"Blogs"} />
      <BreadCrumb title="Blogs" />
      <div className='blog-wrapper home-wrapper-2 py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-3'>
              <div className='filter-card mb-3'>
                <h3 className='filter-title'>SFind By Categories</h3>
                <div>
                  <ul className='ps-0'>
                    <li>Watch</li>
                    <li>TV</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-9'>
              <div className='row'>
                <BlogCard grid={6} />
                <BlogCard grid={6} />
                <BlogCard grid={6} />
                <BlogCard grid={6} />
                <BlogCard grid={6} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog