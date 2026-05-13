import { useState } from 'react';
import NavigationBar from './components/NavigationBar';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartProvider from './Store/CartProvider';
import Footer from './components/Footer';
import './App.css';
import Cart from './components/Cart';
import { Button, Container } from 'react-bootstrap';
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

  const handleCloseCart = () => setShowCart(false);
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
  const cartTotal = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);
    
    
  return (
    <>
    <CartProvider>
    <Container>
      <nav className='d-flex justify-content-end p-3'>
        
         
        
      </nav>
      <main className='text-center mt-5'>
        <h1>THE GENERICS</h1>
      </main>
      <NavigationBar onShowCart={handleShowCart} cartCount={cartQuantity} />
      <Header />
      <ProductList title="MUSIC" products={productsArr} onAddToCart={handleAddToCart} />
      <ProductList title="MERCH" products={merchArr} onAddToCart={handleAddToCart} />
      <Footer onShowCart={handleShowCart} />
      
      <Cart show={showCart} onClose={()=>setShowCart(false)}
      
   
  cartItems={cartItems} // Pass the real cart items
  setCartItems={setCartItems} // Pass the setter to allow removal/quantity changes
/>

        
      </Container>
      </CartProvider>
    </>
  
  );
}

export default App;
