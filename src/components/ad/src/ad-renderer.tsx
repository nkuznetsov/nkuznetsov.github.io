import React, { memo, useEffect } from 'react';
import { AD_CLIENT, AD_SLOT } from 'utils/constants';
import { IAdRendererProps } from './ad-interface';

export const AdRenderer: React.FC<IAdRendererProps> = memo(({ path }) => {
  useEffect(() => {
    (window as any).adsbygoogle = (window as any).adsbygoogle || [];
    (window as any).adsbygoogle.push({});
  }, [path]);

  return (
    <div key={path}>
      <ins
        className='adsbygoogle'
        style={{ display: 'block' }}
        data-ad-client={AD_CLIENT}
        data-ad-slot={AD_SLOT}
        data-ad-format='auto'
        data-full-width-responsive='true'
      />
    </div>
  );
});

AdRenderer.displayName = 'AdRenderer';
