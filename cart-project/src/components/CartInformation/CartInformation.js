import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const CartInformation = (props) => {
  const { cart, onIncreaseQuantity, onDecreaseQuantity, onDeleteCartItem } =
    props;

  const getTotalPrice = (cart) => {
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
      const cartItem = cart[i];
      totalPrice += cartItem.productPrice * cartItem.quantity;
    }

    return totalPrice;
  };
  const totalPrice = getTotalPrice(cart);
  const cartBodyElements = cart.map((cartItem, index) => {
    const { productImage, productName, quantity, productPrice, id } = cartItem;
    // const isDisabledDecreaseButton = quantity === 1;

    return (
      <tr key={id}>
        <th scope="row">{index}</th>
        <td>{productName}</td>
        <td>
          <img src={productImage} alt="Cart image" height={"50px"} />
        </td>
        <td>{productPrice}</td>
        <td>
          <button
            className="btn btn-primary"
            onClick={() => onDecreaseQuantity(id)}
            // disabled={isDisabledDecreaseButton}
          >
            -
          </button>
          <span className="mx-2">{quantity}</span>
          <button
            className="btn btn-primary"
            onClick={() => onIncreaseQuantity(id)}
          >
            +
          </button>
        </td>
        <td>{quantity * productPrice}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => onDeleteCartItem(id)}
          >
            <FaTrashAlt />
          </button>
        </td>
      </tr>
    );
  });

  // JSX: HTML => UI
  if (cart.length === 0) {
    return (
      <h3>
        Cart empty, <Link to="/">continue to shopping!</Link>
      </h3>
    );
  }
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Image</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total</th>
            <th scope="col">...</th>
          </tr>
        </thead>
        <tbody>
          {cartBodyElements}
          <tr>
            <td>Total price</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>{totalPrice}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CartInformation;

// Modal , Popup
// Refactor code
