import React, { memo, useCallback, useState } from 'react';
import { Cursor, Image } from 'components/image';
import { Gallery } from 'components/gallery';
import { ICardSideRendererProps } from './card-interface';
import { useIntl } from 'react-intl';
import { useTheme } from 'react-jss';
import Box from '@material-ui/core/Box';
import cardStyle from './style/card-style';
import Carousel, { Modal, ModalGateway, ViewType } from 'react-images';
import Grid from '@material-ui/core/Grid';
import { IImage } from 'components/gallery/src/gallery-interface';

export const CardBackRenderer: React.FC<ICardSideRendererProps> = memo(
  ({ experience, cardContainerStyle, onFlip, flipImage }) => {
    const theme: any = useTheme();
    const styles = cardStyle(theme);
    const { formatMessage } = useIntl();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const images = experience.details?.images;
    if (!images) {
      return null;
    }

    const flipImgBackText = formatMessage({ id: 'experience.flipImgBackText' });
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

    return (
      <Grid container className={cardContainerStyle}>
        <Grid container item xs={12} className={styles.cardBack}>
          <Box className={styles.flipImgContainer}>
            <Image
              alt={flipImgBackText}
              className={styles.flipImg}
              cursor={Cursor.Pointer}
              Svg={flipImage}
              onClick={flip}
            />
          </Box>

          <Gallery images={images} onClick={handleClick} />

          {isModalOpen && (
            <ModalGateway>
              <Modal onClose={closeModal}>
                <Carousel
                  views={convertImagesToViewTypes(images)}
                  currentIndex={selectedImageIndex}
                />
              </Modal>
            </ModalGateway>
          )}
        </Grid>
      </Grid>
    );
  }
);

const convertImagesToViewTypes = (images: IImage[]): ViewType[] => {
  return images.map(image => {
    return {
      source: image.source.regular,
      caption: image.caption
    };
  });
};

CardBackRenderer.displayName = 'CardBackRenderer';
