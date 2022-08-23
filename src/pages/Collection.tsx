import * as React from 'react';
import CategorizedImageDisplay from './components/image';
import ImageDisplay from './components/ImageDisplay';
import { ScreenContainer } from './components/containers';
import { useLocation } from 'react-router-dom';

interface ICollection {
  category: string;
}

export const Collection: React.FC = () => {
  const location = useLocation();
  const collectionState = location.state as ICollection;
  const category = collectionState && collectionState.category;

  return (
    <ScreenContainer>
      <CategorizedImageDisplay category={category} />
    </ScreenContainer>
  );
};
