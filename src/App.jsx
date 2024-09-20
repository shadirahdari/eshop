import React from 'react';
import './tailwind.css';
import { ProductsList } from './components/ProductsList/index.jsx';
import Home from './pages/Home/index.jsx';
import Header from './components/Header/index.jsx';

function App() {
  return (
    <div className="min-h-screen font-main">
      <Header />
      <Home />
      <ProductsList />
    </div>
  )}

export default App;
