import React from 'react';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import ShoeContextProvider from './contexts/ShoeContext';

function App() {
  return (
    <ShoeContextProvider>
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='products' element={<Products/>}>
          <Route path=':productId' element={<ProductDetails />} />
        </Route>
        <Route path='cart' element={<Cart/>} />
      </Routes>
    </div>
    </ShoeContextProvider>
  );
}

export default App;
