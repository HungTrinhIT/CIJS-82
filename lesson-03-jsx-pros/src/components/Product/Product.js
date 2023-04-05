import Button from "../Button/Button";

const Product = (props) => {
  console.log("Props of product component:", props);

  // Object Destructering
  const { title, price, children, productImg } = props;

  return (
    <div
      className="product"
      style={{
        backgroundColor: "white",
      }}
    >
      <img src={productImg} alt="" />
      <h6>{title}</h6>
      <p>Price: ${price}</p>
      {/* <button>Add to cart</button> */}
      <Button>
        <span>Add to cart</span>
      </Button>
      <Button>View detail</Button>
      <Button>Delete product</Button>
    </div>
  );
};

export default Product;
