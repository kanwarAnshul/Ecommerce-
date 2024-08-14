import React from 'react'
import fashion from '../../../src/assets/images/fashion.jpg'
import fashion5 from '../../../src/assets/images/fashion5.jpg'
import fashion6 from '../../../src/assets/images/fashion6.jpg'

import { Button } from '@mui/material'
const MainCrousel = () => {
  return (
    <>
      <div id="carouselExampleDark" className="carousel carousel-dark slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src={fashion} className="d-block w-100" alt="First Slide" />

            <div
              className="carousel-caption d-flex flex-column justify-content-center align-items-center"
              style={{ height: '100%' }}
            >
              <section className="text-center container d-flex justify-content-center align-items-center">
                <div className="col-12 col-md-10 col-lg-8 mx-auto text-white">
                  <div className="fw-bold display-4" style={{ fontSize: '2rem', color: 'yellow' }}>
                    Women Collection 2024
                  </div>
                  <p className="lead  " style={{ color: '#fff' }}>
                    xplore chic, seasonal women's fashion—perfect styles for every occasion, all year round
                  </p>
                  <p>
                    <Button variant="contained" color="primary" sx={{ flexShrink: 0 }}>
                      Show Now
                    </Button>
                  </p>
                </div>
              </section>
            </div>
          </div>

          <div className="carousel-item " data-bs-interval="10000">
            <img src={fashion6} className="d-block w-100" alt="First Slide" />
            <div
              className="carousel-caption d-flex flex-column justify-content-center align-items-center"
              style={{ height: '100%' }}
            >
              <section className="text-center container d-flex justify-content-center align-items-center">
                <div className="col-lg-6 col-md-8 mx-auto text-white">
                  <h1 className="fw-bold" style={{ fontSize: '2rem' }}>
                    Women Fashion
                  </h1>
                  <p className="lead ">
                    Elevate your style with the latest trends in women's fashion—timeless elegance meets modern flair.
                  </p>
                  <p>
                  <Button variant="contained" color="primary" sx={{ flexShrink: 0 }}>
                      Show Now
                    </Button>
                  </p>
                </div>
              </section>
            </div>
          </div>

          <div className="carousel-item " data-bs-interval="10000">
            <img src={fashion5} className="d-block w-100" alt="First Slide" />
            <div
              className="carousel-caption d-flex flex-column justify-content-center align-items-center"
              style={{ height: '100%' }}
            >
              <section className="text-center container d-flex justify-content-center align-items-center">
                <div className="col-lg-6 col-md-8 mx-auto text-white">
                  <h1 className="fw-bold" style={{ fontSize: '2rem' }}>
                    Mens Fashion
                  </h1>
                  <p className="lead ">
                    Elevate your style with the latest trends in women's fashion—timeless elegance meets modern flair.
                  </p>
                  <p>
                  <Button variant="contained" color="primary" sx={{ flexShrink: 0 }}>
                      Show Now
                    </Button>
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}

export default MainCrousel
