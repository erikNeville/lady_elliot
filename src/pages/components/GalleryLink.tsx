import * as React from 'react';
import { Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Categories } from '../../state/imageState';
import { styled } from '@mui/system';

type Props = {
  category: Categories;
  imgAlt: string;
  imgSrc: string;
};

const ImageLink = styled('img')`
  position: relative;
  display: block;
  object-fit: cover;
  backface-visibility: hidden;
  height: 300px;
  width: 300px;
  transition: all ease 0.2s;
`;

export const GalleryLink: React.FC<Props> = ({ category, imgAlt, imgSrc }) => {
  // TODO: Make images square and same size
  return (
    <Link
      component={RouterLink}
      to={{
        pathname: `/${category}`,
        state: { category: category },
      }}
    >
      <ImageLink src={imgSrc} alt={imgAlt} />
    </Link>
  );
};
