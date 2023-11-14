import banner1 from '../../img/banner1.jpg'
import banner2 from '../../img/banner2.jpg'
import banner3 from '../../img/banner3.jpg'

const Carousel = () => {
  return (
    <section>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to={0}
            className="active d-none"
          />
          <li className="d-none" data-target="#carouselExampleIndicators " data-slide-to={1} />
          <li className="d-none" data-target="#carouselExampleIndicators " data-slide-to={2} />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={banner1} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={banner2} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={banner3} alt="Third slide" />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    </section>
  );
};

export default Carousel;
