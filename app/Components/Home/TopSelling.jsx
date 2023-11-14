import {useLoaderData} from '@remix-run/react';
import {useEffect} from 'react';
import ProductForm from '../Product/ProductForm';
import data from '~/routes/data';

const TopSelling = ({collection}) => {
  return (
    <>
      <section id="featured-section" data-aos="fade-up">
        {/* <section id="featured-section" style={{background: '#FAF4EF'}}> */}
        <div
          id="carouselExampleControls1"
          className="carousel slide mt-3"
          data-ride="carousel"
        >
          <div
            className="d-flex justify-content-center mb-5"
            style={{flexDirection: 'column', alignItems: 'center'}}
          >
            <h1 className="font-weight-bold custom-heading3">
              <em>Featured Products</em>
            </h1>
            <hr className="h1-hr" />
          </div>
          <div className="carousel-inner" id="featured-carousel">
            {collection.products.nodes.map((product, index) => (
              <div
                className={
                  index === 0 ? 'carousel-item active' : 'carousel-item'
                }
              >
                <div className="row ">
                  <div className="col-md-5 col-lg-6 d-flex justify-content-center">
                    <img
                      className="featured-img"
                      src={product.variants.nodes[0].image?.url || ''}
                      alt={product.variants.nodes[0].image?.altText || ''}
                    />
                  </div>
                  <div className="col featured-details ">
                    <h2 className="w-lg-75">{product.title}</h2>
                    <h4>
                      {product.variants.nodes[0].compareAtPrice && (
                        <del className="discount-text">
                          ₹{product.variants.nodes[0].compareAtPrice.amount}
                        </del>
                      )}{' '}
                      ₹ {product.variants.nodes[0].price.amount}
                    </h4>
                    {/* {product.descriptionHtml} */}
                    {/* <div dangerouslySetInnerHTML={{__html: product.descriptionHtml}}> */}
                    {/* </div> */}
                    <div className="featured-btn">
                      <ProductForm variantId={product.variants.nodes[0].id} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls1"
            id="carousel-controls"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls1"
            id="carousel-controls"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </section>
    </>
  );
};

export default TopSelling;
