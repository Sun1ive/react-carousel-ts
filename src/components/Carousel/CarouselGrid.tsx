import React, { FC, useState } from 'react';
import { ICarouselWrapperProps, IGeometryType } from './CarouselWrapper';
import { CarouselGridItem } from './CarouselGridItem';

export interface ICarouselProps extends ICarouselWrapperProps, IGeometryType {}

export const CarouselGrid: FC<ICarouselProps> = props => {
  const perPage = props.rows * props.columns;

  const [currentSlide, setCurrentSlide] = useState(1);

  const next = () => {
    console.log(currentSlide);
    if (currentSlide === Math.ceil(props.items.length / perPage)) {
      return;
    }

    setCurrentSlide(prevState => prevState + 1);
  };

  const prev = () => {
    console.log(currentSlide);
    if (currentSlide === 1) {
      return;
    }

    setCurrentSlide(prevState => prevState - 1);
  };

  const gItems = props.items
    .slice(currentSlide * perPage - perPage, currentSlide * perPage)
    .map(i => <CarouselGridItem type={props.type} key={i.title} {...i} />);

  return (
    <div className='carousel-wrapper'>
      <button className='carousel-control' onClick={prev}>
        Previous page
      </button>
      <div
        style={{
          gridTemplateColumns: `repeat(${props.columns}, 1fr`,
          gridTemplateRows: `repeat(${props.rows}, 1fr`
        }}
        className='carousel-container'
      >
        {gItems}
      </div>
      <button onClick={next} className='carousel-control'>
        Next page
      </button>
    </div>
  );
};
