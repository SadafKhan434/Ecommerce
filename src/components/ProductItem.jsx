import { Card, Button } from 'react-bootstrap';
import react,{useContext}from'react';

import CartContext from '../Store/CartContext';


                 
   const ProductItem = ({ product, onAddToCart }) => {
    const cartCtx = useContext(CartContext);
    const handleAddToCart=() => {
    cartCtx.addItem({ title, price,imageUrl});}
  return (
    <div className="col 8 d-flex">
      <div className='row g-0 align-items-center'>
        <div className='col-4'>
          <div className='col-8'>
      <Card className="h-100 w-100" text='center'>
      

        <Card.Img
          className="img-fluid rounded-start"
          alt={product.title}
          variant="top"
          src={product.imageUrl}
          style={{ height: '200px', objectFit: 'cover' }}
        />
            

        <Card.Body className="text-center d-flex flex-column justify-content-between">
          
          
          <div>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>${product.price}</Card.Text>           

          </div>
          <Button variant="danger" onClick={() => onAddToCart(product)}>
            ADD TO CART
          </Button>
        </Card.Body>
      </Card>
    </div>
    </div></div>
    </div>
  );
};

export default ProductItem;