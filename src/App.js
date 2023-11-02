import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Products from './components/Products';
import IndividualProduct from './components/IndividualProduct';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './redux/dataSlice';
import Cart from './components/Cart';

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const cartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    dispatch(fetchData());
    console.log();
  }, []);

  return (
    <div className='App'>
      {/* <Products apiData={data} />- */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Products apiData={data} />} />
          <Route
            path='/product/:id'
            element={<IndividualProduct apiData={data} />}
          />
          <Route path='/cart' element={<Cart cartItems={cartItems} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
