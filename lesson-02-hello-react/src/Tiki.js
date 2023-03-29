import Product from "./Product";

const Tiki = () => {
  return (
    <div className="App">
      <h1>Tiki shop</h1>

      <div className="product-list">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default Tiki;
