import React, { FC, useState, Fragment } from 'react';
import { ICarouselWrapperProps } from './CarouselWrapper';
import { CarouselGridItem } from './CarouselGridItem';

export interface ICarouselProps extends ICarouselWrapperProps {}

export const CarouselGrid: FC<ICarouselProps> = props => {
  const perPage = props.rows * props.columns;

  const [currentSlide, setCurrentSlide] = useState(1);

  const next = () => {
    console.log(currentSlide);
    if (currentSlide === props.items.length + 1) {
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
    .map(i => <CarouselGridItem key={i.title} {...i} />);

  return (
    <Fragment>
      <button onClick={prev}>Previous page</button>
      <button onClick={next}>Next page</button>
      <div
        style={{
          gridTemplateColumns: `repeat(${props.columns}, ${100 /
            props.columns}fr)`,
          gridTemplateRows: `repeat(${props.rows}, ${100 / props.rows}fr`
        }}
        className="carousel-container"
      >
        {gItems}
      </div>
    </Fragment>
  );
};
