import React, { memo } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Experience } from 'components/experience';
import { Home } from 'components/home';
import { IAppRendererProps } from './app-interface';
import { Starfall } from 'components/starfall';
import { Theme } from 'models';
import { useAnalytics } from 'components/analytics/src/use-analytics';
import { useTheme } from 'react-jss';
import styleResets from './style/app-style';

export const AppRenderer: React.FC<IAppRendererProps> = memo(props => {
  const theme = useTheme() as Theme;
  styleResets(theme);

  return (
    <Router>
      <RoutesWithAnalytics {...props} />
    </Router>
  );
});

AppRenderer.displayName = 'AppRenderer';

const RoutesWithAnalytics: React.FC<IAppRendererProps> = props => {
  useAnalytics();

  return (
    <Routes>
      <Route
        path='/'
        element={
          <>
            <Starfall />
            <Home {...props} />
            <Experience />
          </>
        }
      />
      <Route
        path='/exp'
        element={
          <>
            <Starfall />
            <Experience />
          </>
        }
      />
    </Routes>
  );
};

RoutesWithAnalytics.displayName = 'RoutesWithAnalytics';
