import React from 'react';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Header from './components/Header';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import ShoeContextProvider from './contexts/ShoeContext';
import CartContextProvider from './contexts/CartContext';

function App() {
  return (
    <ShoeContextProvider>
      <CartContextProvider>
      
        <Header />
        <div className='container'>
        <Routes>
          {/* <Route path='/' element={<Products />} /> */}
          <Route path='products' element={<Products/>}>
            <Route path=':productId' element={<ProductDetails />} />
          </Route>
          <Route path='cart' element={<Cart/>} />
        </Routes>
      </div>
    </CartContextProvider>
    </ShoeContextProvider>
  );
}

export default App;
