const Footer = ({ onShowCart }) => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <button
        type="button"
        className="btn btn-link text-white"
        onClick={onShowCart}
        style={{ textDecoration: 'none' }}
      >
        See the cart
      </button>
    </footer>
  );
};

export default Footer;