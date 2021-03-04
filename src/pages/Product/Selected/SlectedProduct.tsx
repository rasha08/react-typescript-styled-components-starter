import React, { FC } from 'react';
import { useCurrentRoute } from 'react-navi';
import { ProductsWrapperStyled } from '../styled';
import { AppHeadlineStyled } from '../../../shared/styles/AppHeadlineStyled';

const SelectedProduct: FC = () => {
  const {
    lastChunk: { request },
  } = useCurrentRoute();
  return (
    <ProductsWrapperStyled>
      <AppHeadlineStyled>SelectedProduct {request?.params?.id}</AppHeadlineStyled>
    </ProductsWrapperStyled>
  );
};

export default SelectedProduct;
