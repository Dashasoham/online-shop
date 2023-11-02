import { useState, useEffect } from 'react';
import IndividualProduct from './IndividualProduct';
import { Navigate, useNavigate } from 'react-router-dom';
import { addToCart, removeFromCart } from '../redux/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './Cart';

const Products = ({ apiData }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [idItem, setIdItem] = useState('');

  let navigate = useNavigate();
  const [clickedProduct, setClickedProduct] = useState(null);

  const handleClick = (product) => {
    console.log('clciked', product);
    console.log(product.id);
    setClickedProduct(product);
    navigate(`/product/${product.id}`); // Navigating to the individual product with its id

    // return apiData.title;
  };

  const addItem = (product) => {
    console.log(product);
    const cartId = Math.random().toString(36).substring(2, 9);
    setIdItem(cartId);
    const productWithId = {
      ...product,
      cartId: idItem,
    };
    dispatch(addToCart(productWithId));

    console.log(idItem);
  };

  const removeItem = (cartId) => {
    console.log(idItem);
    console.log(cartId);
    dispatch(removeFromCart(idItem));
  };
  const numberOfItems = cartItems.length;

  return (
    <div className='mt-20'>
      {apiData.map((product) => (
        <div>
          <div key={product.id} />
          <div class='grid grid-cols-4 gap-3 m-10'>
            <img
              onClick={() => handleClick(product)}
              src={product.image}
              alt={product.title}
              className='object-scale-down  h-48 w-96'
            />
            <div className='flex justify-center items-center text-xl col-span-3'>
              <p>{product.title}</p>

              <button
                onClick={() => {
                  addItem(product);
                }}
                type='button'
                className='text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'
              >
                <span>Add to cart</span>
              </button>
              <button
                onClick={() => {
                  removeItem(product);
                }}
                type='button'
                className='text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'
              >
                <span>Remove from cart</span>
              </button>
            </div>
          </div>
        </div>
      ))}
      <div class='top-0 absolute right-3 top p-2'>
        <div class='t-0 absolute left-3'>
          <p class='flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white'>
            {numberOfItems}
          </p>
        </div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke-width='1.5'
          stroke='currentColor'
          class='file: mt-4 h-6 w-6'
          onClick={() => navigate('/cart')}
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
          />
        </svg>
      </div>
    </div>
  );
};

export default Products;
