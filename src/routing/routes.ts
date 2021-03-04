import { lazy, mount } from 'navi';
import { routePaths } from './routePaths';

const routes = {
  [routePaths.home.root]: lazy(() => import('../pages/Home')),
  [routePaths.products.root]: lazy(() => import('../pages/Product')),
};

export default mount(routes);
