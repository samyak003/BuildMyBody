import React from 'react';
import photo from '../../img/cellu.png';
import photo1 from '../../img/mt.png';
import photo3 from '../../img/mp.png';
import photo5 from '../../img/onn.png';
const ShopByBrands = () => {
  return (
    <>
      <section id="shopbb" className="container" data-aos="fade-up">
        {/* <div style={{ paddingTop: "3.7rem", paddingBottom: "3.7rem" }} >
          <div className="container ">
            <div
              className="d-flex justify-content-center mb-5"
              style={{ flexDirection: 'column', alignItems: 'center' }}
            >
              <h1 className="custom-heading3">
                <em>Shop By Brands</em>
              </h1>
              <hr className="h1-hr" />
            </div>
            
            <div className="row">
              <div
                className="col shopby-flex"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                }}
              >
                <img
                  src={photo}
                  className="  w-50   shopby-img"
                  
                  alt=""
                />
                <img
                  src={photo1}
                  className=" w-50  cus3  shopby-img  left"
                  
                  alt=""
                />
                
              </div>
            </div>

            <div className="row">
              <div
                className="col shopby-flex mt-lg-3 "
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                }}
              >
                <img
                  src={photo3}
                  className=" w-50   cus2    shopby-img  "
                  
                  alt=""
                />
                
                <img
                  src={photo5}
                  className="  w-50   shopby-img   cus2 left"
                  
                  alt=""
                />
              </div>
            </div>
          </div>
        </div> */}

        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12  ">
            <div className="certificate-card ">
              <p className="text-center mt-4 ">
                <img src={photo} className="w-100" alt="" />
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12  ">
            <div className="certificate-card">
              <p className="text-center mt-4">
                <img src={photo1} className="w-100   " alt="" />
              </p>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12  mb-lg-4 mb-1 ">
            <div className="certificate-card">
              <p className="text-center mt-4">
                <img src={photo3} className="w-100   " alt="" />
              </p>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12  mb-4">
            <div className="certificate-card">
              <p className="text-center mt-4">
                <img src={photo5} className="w-100   " alt="" />
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopByBrands;
