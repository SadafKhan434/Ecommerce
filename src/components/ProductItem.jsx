import { Card, Button } from 'react-bootstrap';

const ProductItem = ({ product, onAddToCart }) => {
  return (
    <div className="col d-flex">
      <Card className="h-400 w-300">
        <Card.Img
          className="product-image"
          variant="top"
          src={product.imageUrl}
        />
        <Card.Body className="text-center d-flex flex-column justify-content-between">
          
          
          <div>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>${product.price}</Card.Text>
          </div>
          <Button variant="primary" onClick={() => onAddToCart(product)}>
            ADD TO CART
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductItem;