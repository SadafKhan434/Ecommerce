import React, { useContext, useState } from 'react';
import { Button, Table, Image } from 'react-bootstrap';
import CartContext from '../Store/CartContext';
const Cart = ({ show, onClose,}) => {
  const cartCtx = useContext(CartContext);
  const [cartItems, setCartItems] = useState([
   { title: 'Colors', price: 100, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png', quantity: 1 },
    { title: 'Black and white Colors', price: 50, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png', quantity: 1 },
    { title: 'Yellow and Black Colors', price: 70, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png', quantity: 1 }
  ]);


  const removeItemHandler = (title) => {
    setCartItems(cartItems.filter(item => item.title !== title));
  };
  

  const changeQuantityHandler=(title,newQuantity)=>{
    if(newQuantity<1)return;
    setCartItems(prev=>
      prev.map(item=>item.title === title ? {...item,quantity: Number(newQuantity)} : item)
    )
  }
  const purchaseItemHandler=()=>{
    alert("Thank you for your purchase");
    setCartItems([]);
  }

  if (!show) return null;

  return (
    <div style={{ position: 'fixed', top: '50px', right: '10px', backgroundColor: 'white', border: '1px solid #ccc', padding: '20px', zIndex: 1000, boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}>
      <Button variant="danger" size="sm" onClick={onClose} style={{ float: 'right' }}>X</Button>
      <h2 className="text-center">CART</h2>
            <Table borderless hover size="lg">
        <thead>
          <tr>
            <th>ITEM</th>
            <th>PRICE</th>
            <th>QUANTITY</th>
          </tr>
        </thead>
        <tbody>
          
          {cartItems.map((item, index) => (
            <tr key={index}>
              <td style={{ display: 'flex', alignItems: 'center' }}>
               <Image src={item.imageUrl} rounded width="50" className="me-2" />
               <span>{item.title}</span>
              </td>
              <td>${item.price}</td>
              <td>
                <div className='d-flex align-items-center'>
                <input type="number" defaultValue={item.quantity} className='form-control form-control-sm me-2' style={{ width: '40px', marginRight: '10px' }} />
                <Button variant="danger" size="sm" onClick={() => removeItemHandler(item.title)}>REMOVE</Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className=" text-end mt-3">
        <span className="fw-bold fs-4">Total: ${cartItems.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0)}</span>
      </div>
      <Button variant="info" className="mt-3 text-white d-block mx-auto" onClick={purchaseItemHandler}>PURCHASE</Button>
      
    </div>
  );
};
            
                  




export default Cart;
