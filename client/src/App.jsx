import React from 'react';
import './tailwind.css';
import { ProductsList } from './components/ProductsList/index.jsx';
import Home from './pages/Home/index.jsx';

function App() {
  return (
    <>
      <Home />
      <ProductsList />
    </>
  );
}

export default App;
