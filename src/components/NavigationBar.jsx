import { Button } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import React,{useContext} from 'react';
import CartContext from '../Store/CartContext';
import { NavLink } from 'react-router-dom';


const NavigationBar = ({ onShowCart, cartCount }) => {
  const cartCtx=useContext(CartContext);
  const totalItemsCount=cartCtx.items.reduce((sum,item)=>sum+item.quantity,0)
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
   <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto gap-4 fs-5">
            {/* 'end' parameter blocks incorrect homepage highlight conflicts */}
            <Nav.Link 
            as={NavLink} 
            to="/" 
            end className="text-white">
            HOME
            </Nav.Link>
            <Nav.Link
             as={NavLink} 
             
             to="/store" 
             className="text-white">
              STORE
              </Nav.Link>
            <Nav.Link
             as={NavLink} 
             to="/about"
              className="text-white">
                ABOUT
                </Nav.Link>
          </Nav>
        </Navbar.Collapse>


                cart <span className="badge bg-secondary">{cartCount}</span>
        <Button variant="outline-light danger" onClick={onShowCart}>
        
        </Button>
      
    
    </Container>
    </Navbar>
  );
};


  

export default NavigationBar;
