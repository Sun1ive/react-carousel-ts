import React, { FC } from 'react';

interface ICarouselGridItemProps {
  title: string | number;
}

export const CarouselGridItem: FC<ICarouselGridItemProps> = ({ title }) => {
  return <div className="grid-item">Carousel grid item content {title}</div>;
};
