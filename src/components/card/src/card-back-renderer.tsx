import React, { memo, useCallback, useState } from 'react';
import { Box, Grid } from '@material-ui/core';
import { Cursor, Image } from 'components/image';
import { Gallery } from 'components/gallery';
import { HIDE_MODAL_CONTROLS_WHEN_IDLE_TIMEOUT } from 'utils/constants';
import { ICardSideRendererProps } from './card-interface';
import { IImage } from 'components/gallery/src/gallery-interface';
import { Theme } from 'models';
import { useIntl } from 'react-intl';
import { useTheme } from 'react-jss';
import cardStyle from './style/card-style';
// import Carousel, { Modal, ModalGateway, ViewType } from 'react-images'; // https://jossmac.github.io/react-images

export const CardBackRenderer: React.FC<ICardSideRendererProps> = memo(
  ({ experience, cardContainerStyle, onFlip, flipImage }) => {
    const theme = useTheme() as Theme;
    const styles = cardStyle(theme);
    const { formatMessage } = useIntl();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const flip = useCallback(
      (e: any) => {
        e.preventDefault();
        onFlip && onFlip(false);
      },
      [onFlip]
    );

    const handleClick = useCallback(
      (_event: any, selectedIndex?: number) => {
        // 0 is falsy, but valid value here
        if (!selectedIndex && selectedIndex !== 0) {
          return;
        }

        setIsModalOpen(!isModalOpen);
        setSelectedImageIndex(selectedIndex);
      },
      [isModalOpen]
    );

    const closeModal = useCallback((_event: any) => {
      setIsModalOpen(false);
    }, []);

    if (!experience?.details) {
      return null;
    }

    const { images, isDynamic } = experience.details;
    if (!images) {
      return null;
    }

    const flipImgBackText = formatMessage({ id: 'experience.flipImgBackText' });

    return (
      <Grid container className={cardContainerStyle}>
        {onFlip && (
          <Box className={styles.flipImgContainer}>
            <Image
              alt={flipImgBackText}
              className={styles.flipImg}
              cursor={Cursor.Pointer}
              Svg={flipImage}
              onClick={flip}
            />
          </Box>
        )}

        <Grid container item xs={12} className={styles.cardBack}>
          <Gallery
            images={images}
            onClick={handleClick}
            isDynamic={isDynamic}
          />

          {/* {isModalOpen && (
            <ModalGateway>
              <Modal onClose={closeModal}>
                <Carousel
                  views={convertImagesToViewTypes(formatMessage, images)}
                  currentIndex={selectedImageIndex}
                  hideControlsWhenIdle={HIDE_MODAL_CONTROLS_WHEN_IDLE_TIMEOUT}
                />
              </Modal>
            </ModalGateway>
          )} */}
        </Grid>
      </Grid>
    );
  }
);

// const convertImagesToViewTypes = (
//   formatMessage: any,
//   images: IImage[]
// ): ViewType[] => {
//   return images.map(image => {
//     return {
//       source: image.source.regular,
//       caption: image.caption
//     };
//   });
// };

CardBackRenderer.displayName = 'CardBackRenderer';
