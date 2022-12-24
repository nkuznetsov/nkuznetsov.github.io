import React, { memo, useCallback, useState } from 'react';
import { Box, Grid, Modal } from '@material-ui/core';
import { Cursor, Image } from 'components/image';
import { Gallery } from 'components/gallery';
import { ICardSideRendererProps } from './card-interface';
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Theme } from 'models';
import { useIntl } from 'react-intl';
import { useTheme } from 'react-jss';
import cardStyle from './style/card-style';
import 'swiper/css';

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

    const imagesList = images.map(img => (
      <SwiperSlide key={img.caption}>
        <Image alt={img.alt} cursor={Cursor.Pointer} src={img.source.regular} />
      </SwiperSlide>
    ));

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

          <Modal
            open={isModalOpen}
            onClose={closeModal}
            className={styles.modal}
          >
            <Swiper
              className={styles.swiper}
              slidesPerView={4}
              spaceBetween={30}
              keyboard
              navigation
              mousewheel
              modules={[Mousewheel, Keyboard, Pagination, Navigation]}
              initialSlide={selectedImageIndex}
              loop
              centeredSlides
            >
              {imagesList}
            </Swiper>
          </Modal>
        </Grid>
      </Grid>
    );
  }
);

CardBackRenderer.displayName = 'CardBackRenderer';
