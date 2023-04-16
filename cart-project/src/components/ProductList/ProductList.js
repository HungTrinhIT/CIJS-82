import ProductItem from "../ProductItem/ProductItem";

const ProductList = (props) => {
  const { products, onAddToCart } = props;

  const isValidProducts = products && Array.isArray(products);

  // Conditional rendering
  const listProducts = isValidProducts ? (
    products.map((product) => {
      const { productImage, productName, id, productPrice } = product;
      return (
        <ProductItem
          productImage={productImage}
          productName={productName}
          onAddToCart={onAddToCart}
          productId={id}
          productPrice={productPrice}
          key={id}
        />
      );
    })
  ) : (
    <div>No products</div>
  );

  return (
    <div>
      <h6>{products.length} products</h6>
      <div className="row">{listProducts}</div>
    </div>
  );
};

export default ProductList;

// Testing, Unit Test
// Typescript: Javascript + type checking
