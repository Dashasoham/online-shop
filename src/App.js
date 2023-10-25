import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Products from './components/Products';
import IndividualProduct from './components/IndividualProduct';

function App() {
  const [apiData, setApiData] = useState([]);

  const url = 'https://fakestoreapi.com/products';

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())

      .then((data) => {
        console.log(data);
        const filteredData = data.filter(
          (product) =>
            product.category === "men's clothing" ||
            product.category === "women's clothing"
        );
        setApiData(filteredData);
      });
  }, []);
  return (
    <div className='App'>
      -
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Products apiData={apiData} />} />
          <Route
            path='/product/:id'
            element={<IndividualProduct apiData={apiData} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
