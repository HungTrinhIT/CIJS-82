import ProductList from "../../components/ProductList/ProductList";

const Homepage = ({ onAddProductToCart }) => {
  return (
    <div>
      <h1>Homepage</h1>
      <ProductList onAddToCart={onAddProductToCart} />
    </div>
  );
};

export default Homepage;
