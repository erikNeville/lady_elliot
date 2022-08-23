import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { Categories } from '../state/imageState';
import { GalleryLink } from './components/GalleryLink';
import { ScreenContainer } from './components/containers';
import { styled } from '@mui/system';
import balloonicorn from '../imgs/balloonicorn_orange.jpg';
import cosmina from '../imgs/links/cosmina_link.jpg';
import landscape from '../imgs/links/pnw_purple_haze_link.jpg';
import mermaid from '../imgs/links/hibiscus_princess_mermaid_link.jpg';
import person from '../imgs/links/imposter_syndrome_link.jpg';
import tiger from '../imgs/crystal_tooth_tiger_amythist.12x12.jpg';
import cat from '../imgs/cool_cat.12x12.jpg';
// import unicorn from '../imgs/cotton_candy_unicorn.20x10.jpg';

const collectionImages = [
  {
    source: cosmina,
    category: Categories.Music,
    alt: 'Cosmina',
  },
  {
    source: tiger,
    category: Categories.Crystals,
    alt: 'Crystal Tooth Tiger (Amethyst)',
  },
  {
    source: cat,
    category: Categories.Animals,
    alt: 'Cool Cat',
  },
  {
    source: balloonicorn,
    category: Categories.BalloonAnimals,
    alt: 'Orange Balloonicorn',
  },
  {
    source: mermaid,
    category: Categories.Mermaids,
    alt: 'Hibiscus Princess Mermaid',
  },
  {
    source: person,
    category: Categories.People,
    alt: 'Imposter Syndrom',
  },
  {
    source: landscape,
    category: Categories.Landscapes,
    alt: 'Purple Haze',
  },
];

const Styled = {
  LinkContainer: styled(Box)({
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    alignContent: 'center',
    flexWrap: 'wrap',
    overflow: 'hidden',

    '& .image-grid': {
      margin: '1rem 2rem',
      position: 'relative',
      transition: 'all 0.2s',
      '@media screen and (max-width: 591px)': {
        margin: '1rem 1rem',
      },
    },

    '& .image-div': {
      backfaceVisibility: 'hidden',
      overflow: 'hidden',
      display: 'block',
      position: 'relative',
      textAlign: 'center',
      transition: 'all ease 0.2s',
      transformStyle: 'preserve-3d',
    },
  }),

  LinkInfo: styled(Box)({
    display: 'flex',
    textAlign: 'center',
    flexFlow: 'column nowrap',

    '& .title': {
      fontWeight: 600,
      fontSize: '24px',
    },
  }),
};

export const Gallery: React.FC = () => {
  const formatTitle = React.useCallback((str: string) => {
    return str
      .replace('-', ' ')
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }, []);

  return (
    <ScreenContainer>
      <Styled.LinkContainer>
        {collectionImages.map((collection) => (
          <Box key={collection.source} className="image-grid">
            <div className="image-div">
              <GalleryLink
                category={collection.category}
                imgAlt={collection.alt}
                imgSrc={collection.source}
              />
            </div>
            <Styled.LinkInfo>
              <Typography variant="IMAGE_TITLE" sx={{ marginTop: '12px' }}>
                {formatTitle(collection.category)}
              </Typography>
            </Styled.LinkInfo>
          </Box>
        ))}
      </Styled.LinkContainer>
    </ScreenContainer>
  );
};
