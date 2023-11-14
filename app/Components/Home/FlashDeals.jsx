import {Link} from '@remix-run/react';
import * as React from 'react';
import {useEffect, useState, useRef} from 'react';
import Slider from 'react-slick';
import ProductForm from '../Product/ProductForm';

const FlashDeals = ({collection}) => {
  const [nav1, setNav1] = useState();
  const products = collection.collection.products;
  const [nav2, setNav2] = useState();
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  return (
    <>
      <section id="trending-products" data-aos="fade-up">
        <div className="container-fluid  py-5">
          <div
            className="d-flex justify-content-center mb-5"
            style={{flexDirection: 'column', alignItems: 'center'}}
          >
            <h1 className=" custom-heading3">
              <em>Trending Products</em>
            </h1>
            <hr className="h1-hr" style={{backgroundColor: 'black'}} />
          </div>

          {/* <ul className="nav nav-tabs mt-5 " id="myTab" role="tablist">
            <li className="nav-item">
              <Link
                className="nav-link"
                id="home-tab"
                data-toggle="tab"
                to="#home"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                All
              </Link>
            </li>
            <div className="vl"></div>
            <li className="nav-item">
              <Link
                className="nav-link"
                id="profile-tab"
                data-toggle="tab"
                to="#profile"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                Whey Protein
              </Link>
            </li>
            <div className="vl"></div>

            <li className="nav-item">
              <Link
                className="nav-link"
                id="contact-tab"
                data-toggle="tab"
                to="#contact"
                role="tab"
                aria-controls="contact"
                aria-selected="false"
              >
                Enhanced Athelete
              </Link>
            </li>
            <div className="vl"></div>

            <li className="nav-item">
              <Link
                className="nav-link"
                id="new-tab"
                data-toggle="tab"
                to="#new"
                role="tab"
                aria-controls="new"
                aria-selected="false"
              >
                Gainers
              </Link>
            </li>
            <div className="vl"></div>

            <li className="nav-item">
              <Link
                className="nav-link"
                id="test-tab"
                data-toggle="tab"
                to="#test"
                role="tab"
                aria-controls="test"
                aria-selected="false"
              >
                Tesosterone Support
              </Link>
            </li>
            <div className="vl"></div>

            <li className="nav-item">
              <Link
                className="nav-link"
                id="mult-tab"
                data-toggle="tab"
                to="#mult"
                role="tab"
                aria-controls="mult"
                aria-selected="false"
              >
                Multivitamins
              </Link>
            </li>
            <div className="vl"></div>

            <li className="nav-item">
              <Link
                className="nav-link"
                id="fat-tab"
                data-toggle="tab"
                to="#fat"
                role="tab"
                aria-controls="fat"
                aria-selected="false"
              >
                Fat burners
              </Link>
            </li>
          </ul> */}

          <div className="tab-content " id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <div className="container-fluid" id="wheyprotein">
                <Slider
                  className="ml-lg-5 mr-lg-5"
                  asNavFor={nav1}
                  ref={slider2}
                  slidesToShow={3}
                  swipeToSlide={true}
                  focusOnSelect={true}
                  responsive={[
                    {
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true,
                      },
                    },
                    {
                      breakpoint: 969,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2,
                        dots: true,
                      },
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true,
                      },
                    },
                  ]}
                >
                  {products.nodes.map((product) => (
                    <div className="card" id="trend-card" key={product.id}>
                      <div
                        className="d-flex justify-content-center"
                        id="trending-card-container"
                      >
                        <img
                          className="card-img-trending"
                          src={product.variants.nodes[0].image?.url || ''}
                          alt={product.variants.nodes[0].image?.altText}
                        />
                      </div>
                      <div className="card-content ml-3 mr-3">
                        <h5
                          className="d-flex justify-content-center mt-5 text-center product-title"
                          style={{fontSize: '1.1rem'}}
                        >
                          {product.title}
                        </h5>
                        <p className="d-flex justify-content-center font-weight-bold mt-3">
                          {product.variants.nodes[0].price.amount}
                        </p>
                        <ProductForm
                          variantId={product.variants?.nodes[0].id}
                          custom={true}
                          button={
                            <button className="d-flex justify-content-center btn mt-4 category-btn w-100">
                              Add to Cart
                            </button>
                          }
                        />
                      </div>
                    </div>

                    // <div className="card" id="trend-card" key={product.id}>
                    //   <div className="d-flex justify-content-center" id='trending-card-container'>
                    //     <img
                    //       className="card-img-trending"
                    //       src={product.variants.nodes[0].image?.url || ''}
                    //       alt={product.variants.nodes[0].image?.altText}
                    //     />
                    //   </div>
                    //   <div className="card-content ml-3 mr-3">
                    //     <h5 className="d-flex justify-content-center mt-5 text-center product-title">
                    //       {product.title}
                    //     </h5>
                    //     <p className="d-flex justify-content-center font-weight-bold mt-3">
                    //       {product.variants.nodes[0].price.amount}
                    //     </p>
                    //     <Link
                    //       to="#"
                    //       className="d-flex justify-content-center btn  mt-4 trend-btn"
                    //     >
                    //       Add To Cart
                    //     </Link>
                    //   </div>
                    // </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FlashDeals;
