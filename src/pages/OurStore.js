import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import ReactStars from "react-rating-stars-component";
import ProductCard from '../components/ProductCard';

const OurStore = () => {
  const [grid, setGrid] = useState(4);
  
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
                <h3 className='filter-title'>Product Tags</h3>
                <div>
                  <div className='product-tags d-flex flex-wrap align-items-center gap-10'>
                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Headphone</span>
                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Laptop</span>
                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Mobile</span>
                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Oppo</span>
                  </div>
                </div>
              </div>
              <div className='filter-card mb-3'>
                <h3 className='filter-title'>Random Product</h3>
                <div className='random-products mb-3 d-flex'>
                  <div className='w-50'>
                    <img className='img-fluid' src='images/watch.jpg' alt=''></img>
                  </div>
                  <div className='w-50'>
                    <h5>Kids headphones bulk 10 pack multi colored for students</h5>
                    <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        isHalf={true }
                        edit={false}
                        activeColor="#ffd700"
                    />
                    <strong>$100.00</strong>
                  </div>
                </div>
                <div className='random-products d-flex'>
                  <div className='w-50'>
                    <img className='img-fluid' src='images/watch.jpg' alt=''></img>
                  </div>
                  <div className='w-50'>
                    <h5>Kids headphones bulk 10 pack multi colored for students</h5>
                    <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        isHalf={true }
                        edit={false}
                        activeColor="#ffd700"
                    />
                    <strong>$100.00</strong>
                  </div>
                </div>
              </div>
              <div className='filter-card mb-3'>
                <h3 className='filter-title'>Shop By Categories</h3>
              </div>
            </div>
            <div className='col-9 mb-4'>
              <div className='filter-sort-grid'>
                <div className='d-flex justify-content-between align-items-center'>
                  <div className='d-flex align-items-center gap-10'>
                    <p className='mb-0 col-3'>Sort By:</p>
                    <select class="form-select form-select-lg fs-6">
                      <option value="manual">Featured</option>
                      <option value="best-selling" selected="selected">Best selling</option>
                      <option value="title-ascending">Alphabetically, A-Z</option>
                      <option value="title-descending">Alphabetically, Z-A</option><option value="price-ascending">Price, low to high</option>
                      <option value="price-descending">Price, high to low</option>
                      <option value="created-ascending">Date, old to new</option>
                      <option value="created-descending">Date, new to old</option>
                    </select>
                  </div>
                  <div className='d-flex align-items-center gap-10'>
                    <p className='total-products mb-0'>21 Products</p>
                    <div className='d-flex gap-10 align-items-center grid'>
                      <img onClick={() => {
                        setGrid(3)
                      }} src='images/gr4.svg' className='d-block img-fluid' alt='grid' />
                      <img onClick={() => {
                        setGrid(4)
                      }} src='images/gr3.svg' className='d-block img-fluid' alt='grid' />
                      <img onClick={() => {
                        setGrid(6);
                      }} src='images/gr2.svg' className='d-block img-fluid' alt='grid' />
                      <img onClick={() => {
                        setGrid(12)
                      }} src='images/gr.svg' className='d-block img-fluid' alt='grid' />
                    </div>
                  </div>
                </div>
              </div>
              <div className='product-list my-3 flex-wrap d-flex gap-15 justify-content-between'>
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OurStore;