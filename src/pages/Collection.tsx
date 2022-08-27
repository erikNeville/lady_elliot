import * as React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import CategorizedImageDisplay from './components/image';
import { ScreenContainer } from './components/containers';

interface ICollection {
  category: string;
}

export const Collection: React.FC = () => {
  const location = useLocation();
  const { category: paramsCategory } = useParams<ICollection>();

  const collectionState = location.state as ICollection;
  const category = collectionState.category ?? paramsCategory;

  return (
    <ScreenContainer>
      <CategorizedImageDisplay category={category} />
    </ScreenContainer>
  );
};
