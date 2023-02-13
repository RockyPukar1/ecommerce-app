import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = (props) => {
  return (
    <div className={`${props.grid === 6 ? "col-6" : "col-3"} mb-3`}>
      <div className='blog-card'>
        <div className='card-image'>
          <img src='images/blog-1.jpg' className='img-fluid w-100' alt='blog' />
        </div>
        <div className='blog-content'>
          <p className='date'>1 Dec, 2022</p>
          <h5 className='title'>A beautiful sunday morning renaissance</h5>
          <p className='desc'>lorem ipsum dolar sat amet lorem ipsum dolar sat amet</p>
          <Link className='button' to="/blog/:id">Read More</Link>
        </div>
      </div>
    </div>
  )
}

export default BlogCard