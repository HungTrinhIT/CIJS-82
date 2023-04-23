import ProductList from "../../components/ProductList/ProductList";

const Homepage = ({ products, onAddProductToCart }) => {
  return (
    <div>
      <h1>Homepage</h1>
      <ProductList products={products} onAddToCart={onAddProductToCart} />
    </div>
  );
};

export default Homepage;
