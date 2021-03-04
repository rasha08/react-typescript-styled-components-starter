import React from 'react';
import { mount, route } from 'navi';

import { routePaths } from '../../routing/routePaths';
import SelectedProduct from './Selected/SlectedProduct';
import ProductsList from './List/ProductstList';

export default mount({
  [routePaths.products.sub.list]: route(() => ({
    title: 'All Products Page',
    view: <ProductsList />,
  })),
  [routePaths.products.sub.selected]: route(() => ({
    title: 'Selectedl Products Page',
    view: <SelectedProduct />,
  })),
});
