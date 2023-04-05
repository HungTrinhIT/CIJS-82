import { useState } from "react";
import "./App.css";
import TodoApp from "./TodoApp";

function App() {
  // let total = 10;

  // useState là một function, và function nhận vào 1 initialValue
  // useState là một hook (react hook)

  // const totalState = useState(10);
  // const totalValue = totalState[0];
  // const totalFunction = totalState[1];

  const [total, setTotal] = useState(10);

  const onAddToCart = () => {
    // console.log("Bạn vừa thêm một món hàng vào giỏ hàng thành công");
    // console.log("Before adding to cart:", total);
    // total += 1;
    // console.log("After adding to cart:", total);

    // const newTotal = totalValue + 1;
    // totalFunction(newTotal);

    setTotal(total + 1);
  };

  const onRemoveOneItem = () => {
    if (total === 0) return;

    setTotal(total - 1);
  };

  const onDeleteItem = () => {
    console.log("Delete item");
  };

  // Currying function
  // Closure
  // Cach 2
  // const onSortCart = (sort) => () => {
  //   //  sort = asc => tang dan
  //   //  sort = des => giam dan
  //   console.log("Sort:", sort);
  //   if (sort === "asc") {
  //     console.log("Giỏ hàng đã được sắp xếp tăng dần");
  //   } else {
  //     console.log("Giỏ hàng đã được sắp xếp giảm dần");
  //   }
  // };

  // Cach 1 (recommend)
  const onSortCart = (sort) => {
    //  sort = asc => tang dan
    //  sort = des => giam dan
    console.log("Sort:", sort);
    if (sort === "asc") {
      console.log("Giỏ hàng đã được sắp xếp tăng dần");
    } else {
      console.log("Giỏ hàng đã được sắp xếp giảm dần");
    }
  };
  // const onSortAscending = () => {
  //   console.log("Giỏ hàng đã được sắp xếp tăng dần");
  // };
  // const onSortDescending = () => {
  //   console.log("Giỏ hàng đã được sắp xếp giảm dần");
  // };

  return (
    <div className="App">
      <div className="cart">
        <p>Cart: ({total})</p>
      </div>
      <div
        className="product"
        style={{
          border: "1px solid black",
          padding: "24px",
          width: "300px",
          marginBottom: "24px",
        }}
      >
        <h6>IPhone 14 Promax</h6>
        <button onClick={onAddToCart}>(+) Add to cart</button>
        <button onClick={onRemoveOneItem}>(-) Remove one item</button>
      </div>

      {/* Cach 1 */}
      <button onClick={() => onSortCart("asc")}>Sap xep tang dan</button>
      <button onClick={() => onSortCart("des")}>Sap xep giam dan</button>

      {/* Cach 2 */}
      {/* <button onClick={onSortCart("asc")}>Sap xep tang dan</button>
      <button onClick={onSortCart("des")}>Sap xep giam dan</button> */}
      <TodoApp />
    </div>
  );
}
//  Lan dau render: functicn a()
//  onSortCart("asc")()
export default App;

// Re-render
// Datatypes: primitives & references

/*

  CRUD
    C: Create (Add)
    R: Read
    U: Update
    D: Delete

    Shopping cart
    => Add new product to cart
    => Update quantity cart item
    => Remove (delete) item to cart
    => Read all items (render all item)
*/