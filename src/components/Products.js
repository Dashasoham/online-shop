import { useState, useEffect } from 'react';
import IndividualProduct from './IndividualProduct';
import { Navigate, useNavigate } from 'react-router-dom';

const Products = ({ apiData }) => {
  let navigate = useNavigate();
  const [clickedProduct, setClickedProduct] = useState(null);

  // const [apiData, setApiData] = useState([]);
  // const [clickedProduct, setClickedProduct] = useState(null);
  // const url = 'https://fakestoreapi.com/products';

  // useEffect(() => {
  //   fetch(url)
  //     .then((response) => response.json())

  //     .then((data) => {
  //       console.log(data);
  //       const filteredData = data.filter(
  //         (product) =>
  //           product.category === "men's clothing" ||
  //           product.category === "women's clothing"
  //       );
  //       setApiData(filteredData);
  //     });
  // }, []);

  const handleClick = (product) => {
    console.log('clciked', product);
    console.log(product.id);
    setClickedProduct(product);
    navigate(`/product/${product.id}`); // Navigating to the individual product with its id

    // return apiData.title;
  };

  return (
    <div>
      {/* <button onClick={callAPI}>Call API</button> */}
      {apiData.map((product) => (
        <div onClick={() => handleClick(product)}>
          <div key={product.id} />

          <img
            src={product.image}
            alt={product.title}
            className='object-scale-down  h-48 w-96'
          />

          <p>{product.title}</p>
        </div>
      ))}
      {/* {clickedProduct && <IndividualProduct product={clickedProduct} />} */}
    </div>
  );
};

export default Products;
