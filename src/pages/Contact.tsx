import * as React from 'react';
import { Box, Typography } from '@mui/material';
import {
  EMAIL,
  socialStrings,
  contactStrings as strings,
} from '../common/strings';
import { MailTo, ScreenTitle, SocialLink } from './components/components';
import sasha from '../imgs/sasha.jpg';
import { ScreenContainer } from './components/containers';
import { styled } from '@mui/system';

const Styled = {
  ImageBanner: styled(Box)({
    height: '200px',
    marginBottom: '24px',
    '& .image': {
      width: '100%',
      height: '200px',
      objectPosition: '50% 50%',
      objectFit: 'cover',
      '@media screen and (max-width: 500px)': {
        objectPosition: '6% 50%',
      },
    },
  }),
};

export const Contact: React.FC = () => {
  return (
    <ScreenContainer>
      <ScreenTitle variant="SECTION_HEADER">
        {strings.CONTACT_TITLE}
      </ScreenTitle>
      <Styled.ImageBanner>
        <img className="image" src={sasha} alt="Sasha" />
      </Styled.ImageBanner>
      <Typography variant="SECTION_HEADER">{strings.EMAIL_CONTACT}</Typography>
      <Typography variant="BODY">
        {strings.EMAIL_CONTACT_TEXT_1}
        <MailTo email={EMAIL} subject="" body="">
          {EMAIL}
        </MailTo>
        {strings.EMAIL_CONTACT_TEXT_2}
      </Typography>
      <Typography variant="SECTION_HEADER">{strings.SOCIAL_MEDIA}</Typography>
      <Typography variant="BODY">
        {strings.SOCIAL_MEDIA_TEXT_1}
        <SocialLink
          address={socialStrings.INSTAGRAM}
          text={socialStrings.INSTAGRAM_TEXT}
        />
        {strings.SOCIAL_MEDIA_TEXT_2}
        <SocialLink
          address={socialStrings.FACEBOOK}
          text={socialStrings.FACEBOOK_TEXT}
        />
      </Typography>
    </ScreenContainer>
  );
};
