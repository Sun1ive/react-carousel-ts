import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  CarouselWrapper,
  CAROUSEL_TYPE
} from './components/Carousel/CarouselWrapper';

const App: React.FC = () => {
  const [items, setItems] = useState<Array<{ title: string | number }>>([
    { title: '123' }
  ]);

  useEffect(() => {
    setTimeout(() => {
      setItems(new Array(100).fill(0).map(() => ({ title: Math.random() })));
    }, 1000);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CarouselWrapper
          rows={2}
          columns={2}
          items={items}
          type={CAROUSEL_TYPE.GROUPS}
        />
      </header>
    </div>
  );
};

export default App;
