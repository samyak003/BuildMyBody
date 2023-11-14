import React from 'react';
import article1 from '../../img/article1.jpg';
// import article2 from '../../img/article2.jpg'
// import article3 from '../../img/article3.jpg'

const Verify = () => {
  return (
    <>
      <section id="verify" data-aos="fade-up">
        <div className="container pt-5 pb-5">
          <div
            className="d-flex justify-content-center"
            style={{flexDirection: 'column', alignItems: 'center'}}
          >
            <h1
              className="custom-heading3"
              style={{color: '#ff2828', fontWeight: '900'}}
            >
              <em>Verify Your Products</em>
            </h1>
            <hr className="h1-hr" />
          </div>

          {/* <h1 className='d-flex justify-content-center font-weight-bold custom-heading2'><em>VERIFY YOUR PRODUCT</em></h1> */}
          <div className="verify-img d-flex justify-content-center">
            <img
              className="verify-vid mt-5 "
              style={{width: '100%'}}
              src={article1}
              alt="verify-product-vid"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Verify;
