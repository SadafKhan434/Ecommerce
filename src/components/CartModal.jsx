import {Table, Modal, Button } from 'react-bootstrap';

const CartModal = ({ show, onHide, cartItems, total }) => {
  return (
    <Modal show={show} onHide={onHide} size="lg" dialogClassName="cart-modal-dialog">
      <Modal.Header closeButton className="border-0">
        <Modal.Title className="w-100 ms-auto cart-modal-title">CART</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <table className='table-cart-modal-table'>
        
          <thead>
            <tr>
             <a> <th>ITEM</th></a>
              <a><th>PRICE</th></a>
              <a><th>QUANTITY</th></a>
          
            </tr>
          </thead>
          <tbody>
            {cartItems.length === 0 ? (
              <tr>
                <td colSpan="3" className="text-center py-4">
                  Your cart is empty.
                </td>
              </tr>
            ) : (
              cartItems.map((item, index) => (
                <tr key={index}>
                  <td>{item.title}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>{item.quantity}</td>
                  
                </tr>
              ))
            )}
          </tbody>
        </table>
        <div className="cart-total-row text-end mt-4">
          <span className="cart-total-label">Total</span>
          <span className="cart-total-value">${total.toFixed(2)}</span>
        </div>
        <Button variant="primary" className="w-100 mt-4 cart-purchase-button">
          PURCHASE
        </Button>
      </Modal.Body>
    </Modal>
  );
};

export default CartModal;