import React, { memo, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Cursor, ImageEffect } from 'components/image/src/image-interface';
import { Image } from 'components/image';
import { ReactComponent as CloseDarkImg } from './style/close-dark.svg';
import { ReactComponent as CloseLightImg } from './style/close-light.svg';
import { ReactPortalRenderer as ReactPortal } from './react-portal';
import { Theme, ThemeType } from 'models';
import { useIntl } from 'react-intl';
import { useTheme } from 'react-jss';
import modalStyle from './style/modal-style';
import './style/base-style.css';

type Listener = (this: HTMLElement, ev: KeyboardEvent) => any;

interface IModalRendererProps {
  children: React.ReactNode;
  isOpen: boolean;
  handleClose: () => void;
}

const useOnEscapeClick = (callback: () => void) => {
  useEffect(() => {
    const closeOnEscapeKey: Listener = e =>
      e.key === 'Escape' ? callback() : null;
    document.body.addEventListener('keydown', closeOnEscapeKey);
    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey);
    };
  }, [callback]);
};

export const ModalRenderer: React.FC<IModalRendererProps> = memo(
  ({ children, isOpen, handleClose }) => {
    const theme = useTheme() as Theme;
    const styles = modalStyle(theme);
    const { formatMessage } = useIntl();
    const closeImg =
      theme.type === ThemeType.Light ? CloseDarkImg : CloseLightImg;
    useOnEscapeClick(handleClose);
    const nodeRef = useRef(null);

    return (
      <ReactPortal wrapperId='react-portal-modal-container'>
        <CSSTransition
          in={isOpen}
          timeout={{ enter: 0, exit: 300 }}
          unmountOnExit
          classNames='modal'
          nodeRef={nodeRef}
        >
          <div className='modal' ref={nodeRef}>
            <Image
              alt={formatMessage({ id: 'home.experience' })}
              className={styles.closeIcon}
              onClick={handleClose}
              effect={ImageEffect.Rotate360OnHover}
              Svg={closeImg}
              cursor={Cursor.Pointer}
            />
            <div className='modal-content'>{children}</div>
          </div>
        </CSSTransition>
      </ReactPortal>
    );
  }
);

ModalRenderer.displayName = 'ModalRenderer';
