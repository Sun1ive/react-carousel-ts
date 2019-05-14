import React, { FC } from 'react';
import { CarouselGrid } from './CarouselGrid';
import { IItems } from '../../App';

export enum CAROUSEL_TYPE {
  'LAGERS' = 'LAGERS',
  'GROUPS' = 'GROUPS',
  'FORA' = 'FORA'
}

export interface ICarouselWrapperProps {
  type: CAROUSEL_TYPE;
  items: IItems[];
  withKeyboard: boolean;
}

export interface IGeometryType {
  rows: number;
  columns: number;
}

export const CarouselWrapper: FC<ICarouselWrapperProps> = props => {
  const geometry: IGeometryType = {
    rows: 2,
    columns: 8
  };

  switch (props.type) {
    case CAROUSEL_TYPE.FORA:
      geometry.rows = 2;
      geometry.columns = 8;
      break;

    case CAROUSEL_TYPE.LAGERS:
      geometry.rows = 2;
      geometry.columns = 8;
      break;

    default:
      geometry.rows = 2;
      geometry.columns = 2;
      break;
  }

  return <CarouselGrid {...props} {...geometry} />;
};
