import { Container } from 'react-bootstrap';
import ProductItem from './ProductItem';

const ProductList = ({ title, products, onAddToCart }) => {
  return (
    <section className={`py-5 ${title === 'MERCH' ? 'bg-light' : ''}`}>
      <Container>
        <h2 className="text-center mb-4">{title}</h2>
        <div className="row row-cols-1 row-cols-lg-4 g-2">
          {products.map((product, index) => (
            <ProductItem key={index} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProductList;