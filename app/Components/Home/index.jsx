import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import Carousel from './Carousel';
import Discount from './Discount';
import FeaturedProducts from './FeaturedProducts';
import FlashDeals from './FlashDeals';
import Verify from './Verify';
import BrandCaraousel from './BrandCaraousel';
import TopSelling from './TopSelling';
import Testimonials from './Testimonials';
import ShopByBrands from './ShopByBrands';
import Popular from './Popular';
import Authenticity from './Authenticity';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

const Home = ({ data }) => {
  return (
    <>
      <Navbar />
      <Carousel />
      <FeaturedProducts collections={data.collections} />
      <TopSelling collection={data.collection} />
      <Popular />
      <Discount />
      <FlashDeals collection={data.flashDeals} />
      <ShopByBrands />
      <BrandCaraousel />
      <Verify />
      <Testimonials />
      <Authenticity />
      <Footer />

    </>
  );
};

export default Home;
