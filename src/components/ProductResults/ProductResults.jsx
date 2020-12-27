import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsStart } from '../../redux/Products/products.actions';
import Product from './Product/Product';
import './ProductResults.scss';

const mapState = ({ productsData }) => ({
  products: productsData.products,
});

const ProductResults = () => {
  const dispatch = useDispatch();
  const { products } = useSelector(mapState);
  useEffect(() => {
    dispatch(
      fetchProductsStart(),
    );
  }, []);

  if (!Array.isArray(products)) return null;

  if (products.length < 1) {
    return (
      <div className="products">
        No search results...
      </div>
    );
  }
  return (

    <div className="products">
      <h1>Browse Products</h1>
      <div className="productResults">
        {products.map((product) => {
          const { productThumbnail, productName, productPrice } = product;
          if (!product.productThumbnail || !product.productName
          || typeof product.productPrice === 'undefined') return null;

          const configProduct = {
            productThumbnail,
            productName,
            productPrice,
          };
          return (
            <Product {...configProduct} />
          );
        })}
      </div>
    </div>
  );
};

export default ProductResults;
