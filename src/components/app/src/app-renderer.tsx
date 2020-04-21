import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from '../../home';
import { IAppRendererProps } from './app-interface';
import { Stars } from '../../stars';
import { useTheme } from 'react-jss';
import styleResets from './style/app-style';

export const AppRenderer: React.FC<IAppRendererProps> = React.memo(
  ({ toggleDebug, toggleMagic, toggleTheme }) => {
    const theme: any = useTheme();
    styleResets(theme);

    return (
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home
              toggleDebug={toggleDebug}
              toggleMagic={toggleMagic}
              toggleTheme={toggleTheme}
            />
          </Route>
          <Route exact path='/portfolio'></Route>
        </Switch>
        <Stars />
      </Router>
    );
  }
);
