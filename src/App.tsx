import React, { FC, Suspense } from 'react';
import { Router, View } from 'react-navi';
import routes from './routing/routes';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import { StoreState } from './store';
import { AppThemeState } from './store/theme/types';
import Header from './shared/components/Header/Header';

const App: FC = () => {
  const { theme } = useSelector<StoreState, AppThemeState>(s => s.theme);
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Router routes={routes}>
        <Suspense fallback={'loading...'}>
          <View />
        </Suspense>
      </Router>
    </ThemeProvider>
  );
};

export default App;
