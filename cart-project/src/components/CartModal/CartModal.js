import { FaTrashAlt } from "react-icons/fa";
const CartModal = (props) => {
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
  return (
    <div
      className="modal fade "
      id="cart"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Cart
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
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
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close (X)
            </button>
            <button type="button" className="btn btn-primary">
              Check out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;

// Modal , Popup
// Refactor code
