import React, { FC } from 'react';
import { ProductsWrapperStyled, ProductListItemStyled } from '../styled';
import { AppHeadlineStyled } from '../../../shared/styles/AppHeadlineStyled';

const products = [
  { id: 'test 1', name: 'Product 1' },
  { id: 'test 2', name: 'Product 2' },
  { id: 'test 3', name: 'Product 3' },
];

const ProductsList: FC = () => {
  return (
    <ProductsWrapperStyled>
      <AppHeadlineStyled>ProductsList</AppHeadlineStyled>
      {products.map(product => (
        <ProductListItemStyled key={product.id} href={product.name}>
          {product.name}
        </ProductListItemStyled>
      ))}
    </ProductsWrapperStyled>
  );
};

export default ProductsList;
