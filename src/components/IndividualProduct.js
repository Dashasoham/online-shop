import { useParams } from 'react-router-dom';

const IndividualProduct = ({ apiData }) => {
  console.log('hello');
  const { id } = useParams();
  const product = apiData && apiData.find((item) => item.id === parseInt(id));
  console.log(id, product);
  console.log(apiData);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <p>{product.title}</p>
    </div>
  );
};

export default IndividualProduct;
