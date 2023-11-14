import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import aboutinfo from '../img/aboutus-info.jpg'
import aboutus from '../img/about-us.jpg'
function AboutUs() {
  return (
    <>
      <Navbar />
      <div className="main-div" >

        <div className="about-us-text">
          <div className="top-left">
            <p className="our-story   " >OUR STORY</p>
            <p className="our-story2  " >
              The journey of becoming India’s leading Sports Nutrition Brand
            </p>
          </div>
        </div>
        <div className="about-us">
          <img src={aboutus} className="about-img" alt="" />
        </div>

        <div className="container-fluid">
          <div className="row p-4">
            <div className="col  about-us-text-border mt-4">
              <p className="p-4 aboutus-info  " style={{ color: '#474544' }}>
                Welcome to the official website of BuildMyBody™. If you are
                looking to buy health care Supplements Online in India, you are at
                the right place. Yes, you’re.
                <br /> <br />
                Buildmybody.in is a leading online store selling a wide range of
                health supplements to fitness conscious people like you. Yes, at
                this very moment, you are browsing India’s one of the most
                recommended one stop shops for health care and fitness products.
                While shopping with us here you can always be sure of 100% genuine
                and authentic products.
              </p>
            </div>
          </div>

          <div className="row p-4">
            <div className="col-lg-4 d-flex justify-content-center align-items-center ">
              <p className="aboutus-heading2  " style={{ color: '#474544' }}>About Us</p>
            </div>
            <div className="col  ">
              <p className="aboutus-info  " style={{ color: '#474544' }}>
                Buildmybody.in is a leading online store selling a wide range of
                health supplements to fitness conscious people like you. Yes, at
                this very moment, you are browsing India’s one of the most
                recommended one stop shops for health care and fitness products.
                While shopping with us here you can always be sure of 100% genuine
                and authentic products.
              </p>
            </div>
          </div>

          <div className="row mt-5 p-4">
            <div className="col-lg-4  ">
              <img
                src={aboutinfo}
                className="w-100 aboutus-info-img "
                alt=""
              />
            </div>
            <div className="col  ml-2 mt-sm-3">
              <p className="aboutus-heading  " style={{ color: '#474544' }}>First in Industry Innovations.</p>
              <p className="aboutus-info mt-4  " style={{ color: '#474544' }}>
                The driving force behind BuildMyBody™ has always been to cater to
                the needs of consumers effectively. They have consistently
                provided innovative solutions to various challenges faced by
                customers, such as combating counterfeit supplements, making it
                easier for customers to find the scoop in a new jar, and ensuring
                better results from regular protein supplements. At BuildMyBody™,
                our commitment to delivering top-notch fitness supplements has led
                us to search globally for the finest whey and flavors. However,
                our dedication to quality doesn't stop at sourcing premium raw
                materials.
              </p>
            </div>
          </div>

          <div className="row mt-5 p-4">
            <div className="col-lg-4  ">
              <div className=" d-flex justify-content-center">
                <img
                  src={aboutinfo}
                  className="w-100 aboutus-info-img "
                  alt=""
                />
              </div>
            </div>
            <div className="col ml-2 mt-sm-3">
              <p className="aboutus-heading  " style={{ color: '#474544' }}>
                Superior Ingredients and Manufacturing Procedures.
              </p>
              <p className="aboutus-info mt-4  " style={{ color: '#474544' }}>
                At BuildMyBody™, our commitment to delivering top-notch fitness
                supplements has led us to search globally for the finest whey and
                flavors. However, our dedication to quality doesn't stop at
                sourcing premium raw materials. We take the manufacturing process
                seriously, ensuring that our products are produced at a
                state-of-the-art plant, certified by FSSAI and HACCP. This means
                that each supplement undergoes thorough testing and multiple
                quality checks before it reaches your hands. We strive to empower
                your workouts with the best possible products, giving you the
                power to maximize your reps and sets.
              </p>
            </div>
          </div>
        </div>

        <div className="container mt-5 ">
          <div className="row ">
            <div className="col-lg-6 mt-5">
              <p className="aboutus-heading  " style={{ color: '#474544' }}>1 Cr boxes bought till now</p>
              <p className="aboutus-info  " style={{ color: '#474544' }}>
                We have established a robust fitness community based on trust,
                driven by determined goals that embody the spirit of unyielding
                determination
              </p>
            </div>
            <div className="col-lg-6 mt-5">
              <p className="aboutus-heading  " style={{ color: '#474544' }}>Leading the path</p>
              <p className="aboutus-info  " style={{ color: '#474544' }}>
                We have established a robust fitness community based on trust,
                driven by determined goals that embody the spirit of unyielding
                determination
              </p>
            </div>
            <div className="col-lg-6 mt-5">
              <p className="aboutus-heading  " style={{ color: '#474544' }}>Only authentic supplements</p>
              <p className="aboutus-info  " style={{ color: '#474544' }}>
                We have established a robust fitness community based on trust,
                driven by determined goals that embody the spirit of unyielding
                determination
              </p>
            </div>
            <div className="col-lg-6 mt-5 " >
              <p className="aboutus-heading  " style={{ color: '#474544' }}>Easy & secure payments</p>
              <p className="aboutus-info  " style={{ color: '#474544' }}>
                We have established a robust fitness community based on trust,
                driven by determined goals that embody the spirit of unyielding
                determination
              </p>
            </div>
          </div>
        </div>
        <br />
      </div>

      <Footer />
    </>
  );
}

export default AboutUs;
