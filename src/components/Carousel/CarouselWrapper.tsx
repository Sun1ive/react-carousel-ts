import React, { FC } from 'react';
import { CarouselGrid } from './CarouselGrid';

export enum CAROUSEL_TYPE {
  'LAGERS' = 'LAGERS',
  'GROUPS' = 'GROUPS',
  'FORA' = 'FORA'
}

export interface ICarouselWrapperProps {
  type: CAROUSEL_TYPE;
  items: Array<{ title: string | number }>;
  columns: number;
  rows: number;
}

export const CarouselWrapper: FC<ICarouselWrapperProps> = props => {
  return <CarouselGrid {...props} />;
};
