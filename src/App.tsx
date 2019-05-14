import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  CarouselWrapper,
  CAROUSEL_TYPE
} from './components/Carousel/CarouselWrapper';

export interface IItems {
  title: string;
}

const App: React.FC = () => {
  const [items, setItems] = useState<IItems[]>([{ title: '123' }]);

  useEffect(() => {
    setTimeout(() => {
      setItems(new Array(101).fill(0).map((v, i) => ({ title: `test ${i}` })));
    }, 1000);
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <CarouselWrapper
          withKeyboard={false}
          items={items}
          type={CAROUSEL_TYPE.GROUPS}
        />
      </header>
    </div>
  );
};

export default App;
