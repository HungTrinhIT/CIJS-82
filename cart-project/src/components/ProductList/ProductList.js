import AppContext from "../../contexts/AppContext";
import ProductItem from "../ProductItem/ProductItem";
import { useContext } from "react";

const ProductList = (props) => {
  const { onAddToCart } = props;
  const { products = [] } = useContext(AppContext);

  const isValidProducts = products && Array.isArray(products);

  // Conditional rendering
  const listProducts = isValidProducts ? (
    products.map((product) => {
      const { productImage, productName, id, productPrice } = product;
      return (
        <ProductItem
          productImage={productImage}
          productName={productName}
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
