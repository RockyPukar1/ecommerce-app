import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'

const OurStore = () => {
  return (
    <>
      <Meta title="Our Store" />
      <BreadCrumb title="Our Store" />
      <div className='store-wrapper home-wrapper-2 py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-3'>
              <div className='filter-card mb-3'>
                <h3 className='filter-title'>Shop By Categories</h3>
                <div>
                  <ul className='ps-0'>
                    <li>Watch</li>
                    <li>TV</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
              <div className='filter-card mb-3'>
                <h3 className='filter-title'>Filter By</h3>
                <div>
                  <h5 className='sub-title'>Availability</h5>
                  <div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" defaultValue id />
                      <label className="form-check-label" htmlFor>
                        In Stock (1)
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" defaultValue id />
                      <label className="form-check-label" htmlFor>
                        Out of Stock (0)
                      </label>
                    </div>
                  </div>
                  <h5 className='sub-title'>Price</h5>
                  <div className='d-flex align-itens-center gap-10'>
                    <div className="form-floating mb-3">
                      <input type="number" className="form-control" id="floatingInput" placeholder="From" />
                      <label htmlFor="floatingInput">From</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input type="number" className="form-control" id="floatingInput" placeholder="To" />
                      <label htmlFor="floatingInput">To</label>
                    </div>
                  </div>
                  <h5 className='sub-title'>Colors</h5>
                  <div className='d-flex flex-wrap '>
                    <ul className='colors ps-0'>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                  <h5 className='sub-title'>Size</h5>
                  <div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" defaultValue id="color-1" />
                      <label className="form-check-label" htmlFor>
                        s (0)
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" defaultValue id="color-2" />
                      <label className="form-check-label" htmlFor>
                        M (0)
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" defaultValue id="color-3" />
                      <label className="form-check-label" htmlFor>
                        L (0)
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" defaultValue id="color-4" />
                      <label className="form-check-label" htmlFor>
                        XL (0)
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" defaultValue id="color-5" />
                      <label className="form-check-label" htmlFor>
                        XXL (0)
                      </label>
                    </div>
                  </div>
                </div>
                <div>
                </div>

              </div>
              <div className='filter-card mb-3'>
                <h3 className='filter-title'>Random Product</h3>
              </div>
              <div className='filter-card mb-3'>
                <h3 className='filter-title'>Shop By Categories</h3>
              </div>
            </div>
            <div className='col-9'></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OurStore