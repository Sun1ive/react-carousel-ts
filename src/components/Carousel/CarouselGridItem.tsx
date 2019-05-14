import React, { FC } from 'react';
import { CAROUSEL_TYPE } from './CarouselWrapper';
import { ForaCarousel } from './CarouselItem/ForaCarouselItem';
import { GroupsCarouselItem } from './CarouselItem/GroupsCarouselItem';
import { LagersCarouselItem } from './CarouselItem/LagersCarouselItem';

interface ICarouselGridItemProps {
  title: string | number;
  type: CAROUSEL_TYPE;
}

export const CarouselGridItem: FC<ICarouselGridItemProps> = ({
  title,
  type
}) => {
  let GridItem: JSX.Element;

  switch (type) {
    case CAROUSEL_TYPE.FORA:
      GridItem = <ForaCarousel />;
      break;
    case CAROUSEL_TYPE.GROUPS:
      GridItem = <GroupsCarouselItem />;
      break;
    default:
      GridItem = <LagersCarouselItem />;
      break;
  }

  return <div className='grid-item'>{GridItem}</div>;
};
