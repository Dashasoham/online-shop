import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Cart from './Cart';

const IndividualProduct = ({ apiData }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const product = apiData && apiData.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

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
      <p className='mb-10'>{product.title}</p>
      <div class='grid grid-cols-4 gap-3 mx-10'>
        {' '}
        <img
          src={product.image}
          alt={product.title}
          className='object-scale-down h-96 w-96 '
        />
        <p className='flex justify-center items-center text-xl col-span-3'>
          {product.description}
        </p>
      </div>
    </div>
  );
};

export default IndividualProduct;
