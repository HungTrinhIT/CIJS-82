const Product = (props) => {
  console.log("Props of product component:", props);

  // Object Destructering
  const { title, price } = props;

  return (
    <div className="product">
      <h6>{title}</h6>
      <p>Price: ${price}</p>
      <button>Add to cart</button>
    </div>
  );
};

export default Product;
