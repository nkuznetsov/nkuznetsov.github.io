import React from 'react';
import lobster from '../../../assets/images/lobster.svg';
import { FelaComponent, RendererProvider } from 'react-fela';
import { createRenderer } from 'fela';

const renderer = createRenderer();

const style = {
  fontSize: '20px'
};

export const AppRenderer = () => {
  return (
    <RendererProvider renderer={renderer}>
      <FelaComponent style={style}>
        <p>Just a fluffy lobster here for now</p>
        <img src={lobster} className='lobster' alt='lobster' />
      </FelaComponent>
    </RendererProvider>
  );
};
