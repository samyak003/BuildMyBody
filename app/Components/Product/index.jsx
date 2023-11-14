import {useEffect, useState} from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import {MediaFile, ShopPayButton} from '@shopify/hydrogen-react';
import {Image, Money} from '@shopify/hydrogen';
import ProductCarousal from './ProductCarousal';
import ProductOptions from './ProductOptions';
import ProductForm from './ProductForm';
import Protien from '../../img/protien.png';
import {Link} from '@remix-run/react';
const Product = ({data}) => {
  const {
    product,
    selectedVariant,
    FeaturedProductsCollection,
    TrendingProductsCollection,
    storeDomain,
    orderable,
  } = data;
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
    setIsOpen2(false);
    setIsOpen3(false);
  };

  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
    setIsOpen1(false);
    setIsOpen3(false);
  };

  const toggleDropdown3 = () => {
    setIsOpen3(!isOpen3);
    setIsOpen1(false);
    setIsOpen2(false);
  };

  return (
    <>
      <Navbar />
      <div className="product ">
        <div className="container-fluid">
          <div className="row ">
            {/* image column  */}
            <div className="col-sm-12 col-md-12 col-lg-3 mt-5">
              <ProductCarousal media={product.media.nodes} />
            </div>
            {/* middle column  */}
            <div className="col-sm-12 col-lg-6 col-md-12 mt-5">
              <h2
                className="text-lg-left text-md-center text-sm-center m-lg-0 ml-md-5 mr-md-5 ml-sm-5 mr-sm-5  "
                style={{fontSize: '30px', fontWeight: '800'}}
              >
                {product.title}
              </h2>
              <div className="off m-lg-0 ml-md-5 mr-md-5 ml-sm-5 mr-sm-5">
                <a href="">
                  <p className="knowmore  "> Know More</p>
                </a>
                <div className="offers d-flex justify-content-md-center">
                  <div className="d-flex p-3 ">
                    <span>
                      <p
                        className="front  p-2"
                        style={{
                          border: '1px dashed',
                          fontWeight: '700',
                          fontSize: '28px',
                        }}
                      >
                        OFFERS
                      </p>
                    </span>
                    <span>
                      <p
                        className="front  p-2 "
                        style={{border: '1px dashed', fontSize: '15px'}}
                      >
                        Extra 30% off site wide Use Code: Om30 Terms and
                        Condtions Applied.
                      </p>
                    </span>
                  </div>
                </div>
              </div>
              <div className="row mt-5 d-flex flex-column">
                {/* weight/flavour section  */}
                <div className="col ">
                  <p className="title  ">
                    MRP:<del>₹5,999</del>
                  </p>
                  <h2 className="d-flex title  ">
                    Price:
                    <Money
                      withoutTrailingZeros
                      data={selectedVariant.price}
                      className="ml-2"
                      style={{fontSize: '38px'}}
                    />
                    <div className="ml-3 d-flex align-items-center">
                      <p style={{color: '#ff2828'}} className="product-btn p-2">
                        {' '}
                        25% off
                      </p>
                    </div>
                  </h2>
                  <p
                    className="title  "
                    style={{fontSize: '14px', opacity: '.7'}}
                  >
                    (EMI starts from ₹211.45) | Earn BMB Cash ₹90{' '}
                    <span className=""> Free Shipping</span>
                  </p>
                  {/* show now btn  */}
                  <div className=" mt-4 d-flex row ">
                    <div className="col  ">
                      <ProductForm variantId={selectedVariant?.id} />
                    </div>
                    <div className="col">
                      {orderable && (
                        <ShopPayButton
                          storeDomain={storeDomain}
                          variantIds={[selectedVariant?.id]}
                          className="btn  "
                        />
                      )}
                    </div>
                  </div>
                </div>
                <div className="col title  mt-4">
                  <ProductOptions
                    options={product.options}
                    selectedVariant={selectedVariant}
                  />
                </div>

                {/* mrp section  */}
              </div>
              <hr className="w-100" />
              <h4 className="mt-5 title  ">Check Delivery</h4>
              <div className="input-group mb-3 m-lg-0 ml-md-5 mr-md-5 ml-sm-5 mr-sm-5 title">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter Pincode"
                  aria-describedby="basic-addon2"
                />
                <div className="input-group-append">
                  <button className="btn btn-outline-secondary  " type="button">
                    Check
                  </button>
                </div>
              </div>
            </div>

            <div
              className="col-lg-8  d-lg-none"
              id="product-tabs"
              data-aos="fade-up"
            >
              <ul
                className="nav nav-tabs mt-4 d-flex justify-content-start justify-content-lg-around justify-content-md-around w-100"
                style={{background: 'black'}}
                id="myTab"
                role="tablist"
              >
                <li className="nav-item">
                  <a
                    className="nav-link active   "
                    id="descr-tab"
                    data-toggle="tab"
                    href="#home"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    Description
                  </a>
                </li>

                <div className="vl mt-2 py-3 mx-2"></div>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="howto-tab"
                    data-toggle="tab"
                    href="#profile"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    Directions To Use
                  </a>
                </li>

                <div className="vl mt-2 py-3 mx-2"></div>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="reviews-tab"
                    data-toggle="tab"
                    href="#contact"
                    role="tab"
                    aria-controls="contact"
                    aria-selected="false"
                  >
                    Reviews
                  </a>
                </li>
              </ul>

              <div className="tab-content mt-3" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="descr-tab"
                  dangerouslySetInnerHTML={{
                    __html: product.descriptionHtml,
                  }}
                ></div>

                <div
                  className="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="howto-tab"
                >
                  <div>
                    <div>
                      <button
                        onClick={toggleDropdown1}
                        className="w-100 text-left p-3"
                        style={{border: '1px solid transparent'}}
                      >
                        <span className="ques-product">Question</span>
                        <span
                          data-title="Question"
                          className="ml-5"
                          data-show=""
                        >
                          What should I do if I receive a Damaged item, wrong
                          product or missing units in my order?
                        </span>
                      </button>
                      {isOpen1 && (
                        <div style={{fontSize: '14px'}}>
                          <br /> <br />
                          <span className="answer-product">Answer</span>
                          <span data-title="Answer" className="" data-show="">
                            <p className="mt-4">
                              If an item is found damaged or incorrect as per
                              description on our website or units are missing as
                              per ordered quantity, please send a snapshot of
                              the outer packaging, MRP Hologram, Batch Number
                              and images of products received with invoice copy
                              to our customer care at care@buildmybody.in or
                              call us on +91 9494 979191.
                            </p>
                            <p className="mt-4">
                              Once you raise the concern we will investigate for
                              same you will get revert in 24-48 hrs. If we need
                              we might raise the concern to brand or importer
                              and in those situations, we need to wait for the
                              revert from same.
                            </p>
                            <p className="mt-5">
                              Once the investigation is over if we arrange a
                              reverse pickup then below will be the process:
                            </p>
                            <p className="mt-4">
                              1/ Our courier partner will take 1-2 working days
                              to pick up the product/item from you.
                              <br /> <br />
                              2/As reverse pick up is done by standard delivery
                              it takes minimum 5-7 working days to get back to
                              our warehouse.
                              <br /> <br />
                              3/Once the product is received back to us quality
                              team check it and give update related to the
                              product condition, as we need the product in the
                              same condition as delivered to you.
                              <br /> <br />
                              4/On receiving a positive response we will get
                              back to you and as per your request we will
                              replace or refund you for the order (replacement
                              are subject to availability of the particular
                              product.
                              <br /> <br />
                              5/ In case we receive a negative response the
                              product would be sent back to you in the same
                              condition.
                            </p>
                          </span>
                        </div>
                      )}
                    </div>
                    <div>
                      <button
                        onClick={toggleDropdown2}
                        className="w-100 text-left p-3 mt-4"
                        style={{border: '1px solid transparent'}}
                      >
                        <span className="ques-product">Question</span>
                        <span
                          data-title="Question"
                          className="ml-5"
                          data-show=""
                        >
                          Is there a policy for returns?
                        </span>
                      </button>
                      {isOpen2 && (
                        <div style={{fontSize: '14px'}}>
                          <br />
                          <br />
                          <span className="answer-product">Answer</span>
                          <span data-title="Answer" className="" data-show="">
                            <p className="mt-4">
                              Yes. Products should be received in original
                              packaging and sealed condition. <br /> Opened or
                              used boxes will not be accepted as returns. For
                              issues like rashes, stomach upset, headache,
                              flavor like/dislike, flavor difference from one
                              brand to other etc. products would not be
                              applicable for return. Please consult with the
                              doctor before buying the product
                            </p>
                          </span>
                        </div>
                      )}
                    </div>
                    <div>
                      <button
                        onClick={toggleDropdown3}
                        className="w-100 text-left p-3 mt-4"
                        style={{border: '1px solid transparent'}}
                      >
                        <span className="ques-product">Question</span>
                        <span
                          data-title="Question"
                          className="ml-5"
                          data-show=""
                        >
                          What are the modes of refund available after
                          cancellation?
                        </span>
                      </button>
                      {isOpen3 && (
                        <div style={{fontSize: '14px'}}>
                          <br />
                          <br />
                          <span className="answer-product">Answer</span>
                          <span data-title="Answer" className="" data-show="">
                            <p className="mt-4">
                              In order to confirm cancellation of item(s) in
                              your order, you need to indicate your refund
                              preference. <br /> The money will be refunded back
                              to the payment mode/account that was originally
                              used to make the transaction. Once you have
                              requested the cancellation of item(s) in your
                              order, BuildMyBody will complete the cancellation
                              and initiate the refund, depending on your
                              preference.
                            </p>
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="contact"
                  role="tabpanel"
                  aria-labelledby="reviews-tab"
                >
                  Etsy mixtape wayfarers, ethical wes anderson tofu before they
                  sold out mcsweeney's organic lomo retro fanny pack lo-fi
                  farm-to-table readymade. Messenger bag gentrify pitchfork
                  tattooed craft beer, iphone skateboard locavore carles etsy
                  salvia banksy hoodie helvetica. DIY synth PBR banksy irony.
                  Leggings gentrify squid 8-bit cred pitchfork. Williamsburg
                  banh mi whatever gluten-free, carles pitchfork biodiesel fixie
                  etsy retro mlkshk vice blog. Scenester cred you probably
                  haven't heard of them, vinyl craft beer blog stumptown.
                  Pitchfork sustainable tofu synth chambray yr.
                </div>
              </div>
            </div>

            {/* featured products section   */}
            <div
              id="third"
              className="col-lg-3 flex-lg-column mt-0 mt-lg-5 mt-md-5 mt-sm-0 "
            >
              <h4 className="d-flex justify-content-center font-weight-bolder ">
                <em className=" ">FEATURED PRODUCTS</em>
              </h4>
              <div className="custom-fl-product d-md-flex flex-lg-column justify-content-around">
                {FeaturedProductsCollection.collection.products.nodes.map(
                  (product) => (
                    <Link
                      key={product.handle}
                      to={`/product/${product.handle}`}
                      className="d-flex mt-4 flex-column"
                    >
                      <div
                        className="w-100"
                        style={{maxWidth: '250px', margin: '0 auto'}}
                      >
                        <Image
                          data={product.variants.nodes[0].image}
                          style={{
                            objectFit: 'contain',
                            height: '100%',
                          }}
                          alt={product.title}
                        />
                      </div>
                      <div>
                        <h6 className="font-weight-bold mt-4  text-center text-dark">
                          {product.title}
                        </h6>
                        <h6 className="mt-3 font-weight-bold  text-center text-dark">
                          <Money
                            withoutTrailingZeros
                            data={product.variants?.nodes[0].price}
                          />
                        </h6>
                        <div className="text-center ">
                          <ProductForm
                            variantId={product.variants?.nodes[0].id}
                          />
                        </div>
                      </div>
                    </Link>
                  ),
                )}
              </div>
            </div>
          </div>

          <div className="container-fluid ">
            {/* <hr /> */}
            <div className="row">
              <div
                className="col-lg-9 d-lg-block d-md-none d-sm-none pro-none"
                id="product-tabs"
              >
                <ul
                  className="nav nav-tabs mt-4 d-flex justify-content-start justify-content-lg-around justify-content-md-around w-100"
                  style={{background: 'black'}}
                  id="myTab"
                  role="tablist"
                >
                  <li className="nav-item">
                    <a
                      className="nav-link active   "
                      id="descr-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      Description
                    </a>
                  </li>

                  <div className="vl mt-2 py-3 mx-2"></div>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="howto-tab"
                      data-toggle="tab"
                      href="#profile"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      Directions To Use
                    </a>
                  </li>

                  <div className="vl mt-2 py-3 mx-2"></div>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="reviews-tab"
                      data-toggle="tab"
                      href="#contact"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                    >
                      Reviews
                    </a>
                  </li>
                </ul>

                <div className="tab-content mt-3" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="descr-tab"
                    dangerouslySetInnerHTML={{
                      __html: product.descriptionHtml,
                    }}
                  ></div>

                  <div
                    className="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="howto-tab"
                  >
                    <div>
                      <div>
                        <button
                          onClick={toggleDropdown1}
                          className="w-100 text-left p-3"
                          style={{border: '1px solid transparent'}}
                        >
                          <span className="ques-product">Question</span>
                          <span
                            data-title="Question"
                            className="ml-5"
                            data-show=""
                          >
                            What should I do if I receive a Damaged item, wrong
                            product or missing units in my order?
                          </span>
                        </button>
                        {isOpen1 && (
                          <div style={{fontSize: '14px'}}>
                            <br /> <br />
                            <span className="answer-product">Answer</span>
                            <span data-title="Answer" className="" data-show="">
                              <p className="mt-4">
                                If an item is found damaged or incorrect as per
                                description on our website or units are missing
                                as per ordered quantity, please send a snapshot
                                of the outer packaging, MRP Hologram, Batch
                                Number and images of products received with
                                invoice copy to our customer care at
                                care@buildmybody.in or call us on +91 9494
                                979191.
                              </p>
                              <p className="mt-4">
                                Once you raise the concern we will investigate
                                for same you will get revert in 24-48 hrs. If we
                                need we might raise the concern to brand or
                                importer and in those situations, we need to
                                wait for the revert from same.
                              </p>
                              <p className="mt-5">
                                Once the investigation is over if we arrange a
                                reverse pickup then below will be the process:
                              </p>
                              <p className="mt-4">
                                1/ Our courier partner will take 1-2 working
                                days to pick up the product/item from you.
                                <br /> <br />
                                2/As reverse pick up is done by standard
                                delivery it takes minimum 5-7 working days to
                                get back to our warehouse.
                                <br /> <br />
                                3/Once the product is received back to us
                                quality team check it and give update related to
                                the product condition, as we need the product in
                                the same condition as delivered to you.
                                <br /> <br />
                                4/On receiving a positive response we will get
                                back to you and as per your request we will
                                replace or refund you for the order (replacement
                                are subject to availability of the particular
                                product.
                                <br /> <br />
                                5/ In case we receive a negative response the
                                product would be sent back to you in the same
                                condition.
                              </p>
                            </span>
                          </div>
                        )}
                      </div>
                      <div>
                        <button
                          onClick={toggleDropdown2}
                          className="w-100 text-left p-3 mt-4"
                          style={{border: '1px solid transparent'}}
                        >
                          <span className="ques-product">Question</span>
                          <span
                            data-title="Question"
                            className="ml-5"
                            data-show=""
                          >
                            Is there a policy for returns?
                          </span>
                        </button>
                        {isOpen2 && (
                          <div style={{fontSize: '14px'}}>
                            <br />
                            <br />
                            <span className="answer-product">Answer</span>
                            <span data-title="Answer" className="" data-show="">
                              <p className="mt-4">
                                Yes. Products should be received in original
                                packaging and sealed condition. <br /> Opened or
                                used boxes will not be accepted as returns. For
                                issues like rashes, stomach upset, headache,
                                flavor like/dislike, flavor difference from one
                                brand to other etc. products would not be
                                applicable for return. Please consult with the
                                doctor before buying the product
                              </p>
                            </span>
                          </div>
                        )}
                      </div>
                      <div>
                        <button
                          onClick={toggleDropdown3}
                          className="w-100 text-left p-3 mt-4"
                          style={{border: '1px solid transparent'}}
                        >
                          <span className="ques-product">Question</span>
                          <span
                            data-title="Question"
                            className="ml-5"
                            data-show=""
                          >
                            What are the modes of refund available after
                            cancellation?
                          </span>
                        </button>
                        {isOpen3 && (
                          <div style={{fontSize: '14px'}}>
                            <br />
                            <br />
                            <span className="answer-product">Answer</span>
                            <span data-title="Answer" className="" data-show="">
                              <p className="mt-4">
                                In order to confirm cancellation of item(s) in
                                your order, you need to indicate your refund
                                preference. <br /> The money will be refunded
                                back to the payment mode/account that was
                                originally used to make the transaction. Once
                                you have requested the cancellation of item(s)
                                in your order, BuildMyBody will complete the
                                cancellation and initiate the refund, depending
                                on your preference.
                              </p>
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="contact"
                    role="tabpanel"
                    aria-labelledby="reviews-tab"
                  >
                    Etsy mixtape wayfarers, ethical wes anderson tofu before
                    they sold out mcsweeney's organic lomo retro fanny pack
                    lo-fi farm-to-table readymade. Messenger bag gentrify
                    pitchfork tattooed craft beer, iphone skateboard locavore
                    carles etsy salvia banksy hoodie helvetica. DIY synth PBR
                    banksy irony. Leggings gentrify squid 8-bit cred pitchfork.
                    Williamsburg banh mi whatever gluten-free, carles pitchfork
                    biodiesel fixie etsy retro mlkshk vice blog. Scenester cred
                    you probably haven't heard of them, vinyl craft beer blog
                    stumptown. Pitchfork sustainable tofu synth chambray yr.
                  </div>
                </div>
              </div>
              <div
                id="third"
                className="col-lg-3 flex-lg-column mt-5 mt-lg-4 mt-md-4 mt-sm-2"
              >
                <h4 className="d-flex justify-content-center font-weight-bolder  ">
                  <em>RELATED PRODUCTS</em>
                </h4>
                <div className="custom-fl-product d-md-flex flex-lg-column justify-content-around">
                  {TrendingProductsCollection.collection.products.nodes.map(
                    (product) => (
                      <Link
                        key={product.handle}
                        to={`/product/${product.handle}`}
                        className="d-flex mt-4 flex-column"
                      >
                        <div
                          className="w-100"
                          style={{maxWidth: '250px', margin: '0 auto'}}
                        >
                          <Image
                            data={product.variants.nodes[0].image}
                            style={{
                              objectFit: 'contain',
                              height: '100%',
                            }}
                            alt={product.title}
                          />
                        </div>
                        <div>
                          <h6 className="font-weight-bold mt-4  text-center text-dark">
                            {product.title}
                          </h6>
                          <h6 className="mt-3 font-weight-bold  text-center text-dark">
                            <Money
                              withoutTrailingZeros
                              data={product.variants?.nodes[0].price}
                            />
                          </h6>
                          <div className="text-center">
                            <ProductForm
                              variantId={product.variants?.nodes[0].id}
                            />
                          </div>
                        </div>
                      </Link>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Product;
