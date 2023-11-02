import { addToCart, removeFromCart } from '../redux/cartSlice';

import { useNavigate } from 'react-router-dom';

const Cart = ({ cartItems, removeItem }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    console.log(cartItems);
  };
  return (
    <div>
      <button
        onClick={() => navigate(-1)}
        type='button'
        className=' flex items-center justify-center text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'
      >
        <svg
          class='w-5 h-5 rtl:rotate-180'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke-width='1.5'
          stroke='currentColor'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18'
          />
        </svg>
        <span>Go back</span>
      </button>
      {cartItems.map((product) => (
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
              {/* <Button
               onClick={() => {
                 addItem(product);
               }}
             /> */}
            </div>
          </div>
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
      ))}
      Hello
    </div>
  );
};

export default Cart;
