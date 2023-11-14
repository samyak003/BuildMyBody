import {Link} from '@remix-run/react';
import {Image, Money} from '@shopify/hydrogen';
import {useEffect} from 'react';
import ProductForm from '~/Components/Product/ProductForm';

export default function ProductCard({product}) {
  const {price, compareAtPrice} = product.variants?.nodes[0] || {};
  const isDiscounted = compareAtPrice?.amount > price?.amount;
  return (
    <div className="col productCard" data-aos="fade-up">
      <Link to={`/product/${product.handle}`} className="">
        <div className="card">
          <div className="card-img-all d-flex justify-content-center mt-3 ">
            <Image
              data={product.variants.nodes[0].image}
              alt={product.title}
              className="all-img"
            />{' '}
          </div>
          <div className="card-content-all mt-4">
            <h3 className=" text-center" style={{fontSize: '1.3rem'}}>
              {' '}
              {product.title}
            </h3>
            <p className="card-text mt-3 text-center">
              {isDiscounted && (
                <Money
                  style={{color: '#ff2828', textDecoration: 'dashed'}}
                  className="line-through opacity-50"
                  withoutTrailingZeros
                  data={compareAtPrice}
                />
              )}
              <Money withoutTrailingZeros data={price} />
            </p>
          </div>
        </div>
      </Link>
      <div className="all-btn mt-3 d-flex flex-lg-column pro-clr ">
        <ProductForm variantId={product.variants?.nodes[0].id} />
      </div>
    </div>
  );
}
