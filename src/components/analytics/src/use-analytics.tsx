import React from 'react';
import { MEASUREMENT_ID } from 'utils/constants';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

export const useAnalytics = () => {
  const location = useLocation();

  React.useEffect(() => {
    initAnalytics();
  }, []);

  React.useEffect(() => {
    const currentPath = location.pathname + location.search;
    sendPageView(currentPath);
  }, [location]);
};

const initAnalytics = () => {
  // Setup Google analytics
  const isDev = window.location.href.includes('localhost');
  ReactGA.initialize(MEASUREMENT_ID, { testMode: isDev });
};

const sendPageView = (path: string) => {
  ReactGA.set({ page: path });
  ReactGA.send('pageview');
};

// const sendEvent = (payload: any) => {
//   ReactGA.event(payload);
// };
