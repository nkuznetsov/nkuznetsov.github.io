import React, { memo } from 'react';
import { Helmet } from 'react-helmet';
import { ISeoRendererProps, Page } from './seo-interface';
import { SITE_NAME } from 'utils/constants';

export const SeoRenderer: React.FC<ISeoRendererProps> = memo(({ page }) => {
  return (
    <Helmet>
      <meta name='title' content={getTitle(page)} />
      <meta name='description' content={getDescription(page)} />
      <meta name='og:title' content={getTitle(page)} />
      <meta name='og:description' content={getDescription(page)} />
      <meta name='og:type' content='website' />
      <meta name='og:site_name' content={getSiteName()} />
      <meta name='og:image' content={getImage(page)} />
      <meta name='twitter:title' content={getTitle(page)} />
      <meta name='twitter:description' content={getDescription(page)} />
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:creator' content='nkuznetsov' />
      <meta name='twitter:image' content={getImage(page)}></meta>
    </Helmet>
  );
});

SeoRenderer.displayName = 'SeoRenderer';

const getSiteName = () => SITE_NAME;

const getTitle = (page: Page) => {
  switch (page) {
    case Page.Home: {
      return `${SITE_NAME} ${Page.Home}`;
    }
    case Page.Experience: {
      return `${SITE_NAME} ${Page.Experience}`;
    }
    default: {
      return undefined;
    }
  }
};

const getDescription = (page: Page) => {
  switch (page) {
    case Page.Home: {
      return `${Page.Home} page of the ${SITE_NAME}. It has main controls to navigate the site and provides a link to navigate to experience`;
    }
    case Page.Experience: {
      return `${Page.Experience} page of the ${SITE_NAME}. It describes the experience`;
    }
    default: {
      return undefined;
    }
  }
};

const getImage = (page: Page) => {
  switch (page) {
    case Page.Home: {
      return 'https://fluffyoyster.cc/oyster.png';
    }
    case Page.Experience: {
      return 'https://fluffyoyster.cc/oyster.png';
    }
    default: {
      return undefined;
    }
  }
};
