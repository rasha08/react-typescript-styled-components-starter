import React from 'react';
import { mount, route } from 'navi';

import { routePaths } from '../../routing/routePaths';
import Home from './Home';

export default mount({
  [routePaths.home.root]: route(() => ({
    title: 'Home Page',
    view: <Home />,
  })),
});
