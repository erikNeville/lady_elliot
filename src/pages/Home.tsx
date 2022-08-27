import * as React from 'react';
import { Box, Link } from '@mui/material';
import cosmina from '../imgs/links/cosmina_full_link.jpg';
import etsyImg from '../imgs/links/elliot_etsy.jpg';
import { Link as RouterLink } from 'react-router-dom';
import { ScreenContainer } from './components/containers';
import { SectionHeader } from './components/components';
import { styled } from '@mui/system';

const Styled = {
  Content: styled(Box)({
    display: 'flex',
    margin: '0 auto',
    maxWidth: '650px',
  }),
  ImageBox: styled(Box)({
    margin: '24px auto 0',
    '& .home-image': {
      maxHeight: '600px',
      width: '100%',
      objectFit: 'scale-down',
      objectPosition: '50% 50%',
      marginBottom: '12px',
    },
    '& .etsy-img': {
      width: '300px',
    },
  }),
};

export const Home: React.FC = () => {
  return (
    <ScreenContainer>
      <Styled.ImageBox>
        <Link underline="none">
          <img
            className="home-image etsy-img"
            src={etsyImg}
            alt="elliot etsy"
          />
          <SectionHeader sx={{ textAlign: 'center' }}>
            For stickers, greeting cards, and more visit Lady Elliot on ETSY
          </SectionHeader>
        </Link>
      </Styled.ImageBox>
      <Styled.ImageBox>
        <Link component={RouterLink} to="/gallery" underline="none">
          <img className="home-image" src={cosmina} alt="cosmina" />
          <SectionHeader sx={{ textAlign: 'center' }}>
            Go to the Gallery
          </SectionHeader>
        </Link>
      </Styled.ImageBox>
    </ScreenContainer>
  );
};
