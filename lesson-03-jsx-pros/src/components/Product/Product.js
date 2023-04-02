import Button from "../Button/Button";

const Product = (props) => {
  console.log("Props of product component:", props);

  // Object Destructering
  const { title, price, children } = props;

  return (
    <div className="product">
      {children}
      <h6>{title}</h6>
      <p>Price: ${price}</p>
      {/* <button>Add to cart</button> */}
      <Button>
        <span>Add to cart</span>
      </Button>
      <Button>View detail</Button>
    </div>
  );
};

export default Product;
