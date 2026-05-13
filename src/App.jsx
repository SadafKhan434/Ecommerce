import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import NavigationBar from './components/NavigationBar';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartProvider from './Store/CartProvider';
import Footer from './components/Footer';
import Cart from './components/Cart';
import About from './components/About';
import './App.css';

const productsArr = [
  {
    title: 'Album 1',
    price: 12.99,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    title: 'Black and white Colors',
    price: 14.99,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    title: 'Album 3',
    price: 9.99,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
    title: 'Album 4',
    price: 19.99,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  }
];

const merchArr = [
  {
    title: 'T-Shirt',
    price: 19.99,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Shirt.png',
  },
  {
    title: 'Coffee Cup',
    price: 6.99,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Cofee.png',
  }
];

function App() {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleShowCart = () => setShowCart(true);
  
  const handleAddToCart = (product) => {
    setCartItems((currentCart) => {
      const existingItem = currentCart.find((item) => item.title === product.title);

      if (existingItem) {
        return currentCart.map((item) =>
         item.title === product.title
           ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...currentCart, { ...product, quantity: 1 }];
    });
  };

  const cartQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    
  // Grouping product rows into a clean component sub-render for route isolation
  const StorePage = () => (
    <>
      <ProductList title="MUSIC" products={productsArr} onAddToCart={handleAddToCart} />
      <ProductList title="MERCH" products={merchArr} onAddToCart={handleAddToCart} />
    </>
  );
    
  return (
    <CartProvider>
      <Router>
        <Container>
          {/* Universal Navbar positioned cleanly at the top layout layer */}
          <NavigationBar onShowCart={handleShowCart} cartCount={cartQuantity} />
          
          {/* Global Header Banner Title */}
          <Header />
          
          {/* Main Routing Container: Swaps views cleanly without content duplication */}
          <main className='mt-4'>
            <Routes>
              <Route path="/" element={<StorePage />} />
              <Route path="/store" element={<StorePage />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
          
          {/* Universal Page Footer layout */}
          <Footer onShowCart={handleShowCart} />
          
          {/* Overlay Shopping Modal state component */}
          <Cart 
            show={showCart} 
            onClose={() => setShowCart(false)}
            cartItems={cartItems}
            setCartItems={setCartItems} 
          />
        </Container>
      </Router>
    </CartProvider>
  );
}

export default App;
