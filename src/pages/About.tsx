import * as React from 'react';
import { Box, Typography } from '@mui/material';
import cosmicTiger from '../imgs/cosmic_tiger.jpg';
import { ScreenContainer } from './components/containers';
import { aboutStrings as strings } from '../common/strings';
import { styled } from '@mui/system';

const Styled = {
  ImageBanner: styled(Box)({
    height: '300px',
    marginBottom: '24px',
    '& .image': {
      width: '100%',
      height: '300px',
      objectPosition: '50% 26%',
      objectFit: 'cover',
    },
  }),
  // Header: styled(Typography)(({ theme }) => ({
  //   paddingBottom: '8px',
  //   color: theme.palette.headerText.main,
  // })),
  // BodyText: styled(Typography)(({ theme }) => ({
  //   marginBottom: '16px',
  //   color: theme.palette.subText.main,
  // })),
};

export const About: React.FC = () => {
  return (
    <ScreenContainer>
      <Styled.ImageBanner>
        <img
          className="image"
          src={cosmicTiger}
          alt="Cosmic Tiger Queen 24x48"
        />
      </Styled.ImageBanner>
      <Typography variant="SECTION_HEADER">
        {strings.ABOUT_ARTIST_TITLE}
      </Typography>
      <Typography variant="BODY">{strings.ABOUT_ARTIST_TEXT}</Typography>
      <Typography variant="SECTION_HEADER">
        {strings.ABOUT_ART_TITLE}
      </Typography>
      <Typography variant="BODY">{strings.ABOUT_ART_TEXT_1}</Typography>
      <Typography variant="BODY">{strings.ABOUT_ART_TEXT_2}</Typography>
      <Typography variant="BODY">{strings.ABOUT_ART_TEXT_3}</Typography>
    </ScreenContainer>
  );
};
