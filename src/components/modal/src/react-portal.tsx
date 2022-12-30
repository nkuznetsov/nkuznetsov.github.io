import React, { memo, useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface IReactPortalRendererProps {
  children: React.ReactNode;
  wrapperId: string;
}

const createWrapperAndAppendToBody = (wrapperId: string) => {
  if (document.getElementById(wrapperId))
    return document.getElementById(wrapperId) as HTMLDivElement;
  else {
    const wrapperElement = document.createElement('div');
    wrapperElement.setAttribute('id', wrapperId);
    document.body.appendChild(wrapperElement);
    return wrapperElement;
  }
};

export const ReactPortalRenderer: React.FC<IReactPortalRendererProps> = memo(
  ({ children, wrapperId = 'react-portal-wrapper' }) => {
    const [wrapperElement, setWrapperElement] = useState<HTMLDivElement | null>(
      null
    );
    useLayoutEffect(() => {
      setWrapperElement(createWrapperAndAppendToBody(wrapperId));
      return () => {
        createWrapperAndAppendToBody(wrapperId)?.remove();
      };
    }, [wrapperId]);
    return wrapperElement ? createPortal(children, wrapperElement) : null;
  }
);

ReactPortalRenderer.displayName = 'ReactPortalRenderer';
