import { Button } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

const NavigationBar = ({ onShowCart, cartCount }) => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
            <Container>


    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <div className="container-fluid align-items-center d-flex">
      
        <div className="navigation-links">
          <a className="nav-link text-white" href="#home">HOME</a>
          <a className="nav-link text-white" href="#store">STORE</a>
          <a className="nav-link text-white" href="#about">ABOUT</a>
          

        </div>
                cart <span className="badge bg-secondary">{cartCount}</span>
        <Button variant="outline-light" onClick={onShowCart}>
        
        </Button>
      </div>
    </nav>
    </Container>
    </Navbar>
  );
};


  

export default NavigationBar;
