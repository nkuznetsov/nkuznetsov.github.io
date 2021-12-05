import React, { memo } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Experience } from 'components/experience';
import { Home } from 'components/home';
import { IAppRendererProps } from './app-interface';
import { Starfall } from 'components/starfall';
import { Theme } from 'models';
import { useTheme } from 'react-jss';
import styleResets from './style/app-style';

export const AppRenderer: React.FC<IAppRendererProps> = memo(
  ({ toggleDebug, toggleMagic, toggleTheme }) => {
    const theme = useTheme() as Theme;
    styleResets(theme);

    return (
      <Router>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Starfall />
                <Home
                  toggleDebug={toggleDebug}
                  toggleMagic={toggleMagic}
                  toggleTheme={toggleTheme}
                />
                <Experience />
              </>
            }
          />
        </Routes>
      </Router>
    );
  }
);

AppRenderer.displayName = 'AppRenderer';
