import "./App.css";

function App() {
  const onAddToCart = () => {
    console.log("Bạn vừa thêm một món hàng vào giỏ hàng thành công");
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
      <div
        className="product"
        style={{
          border: "1px solid black",
          padding: "24px",
          width: "400px",
        }}
      >
        <h6>IPhone 14 Promax</h6>
        <button onClick={onAddToCart}>Add to cart</button>
        <button onClick={onDeleteItem}>Delete item from cart</button>
      </div>

      {/* Cach 1 */}
      <button onClick={() => onSortCart("asc")}>Sap xep tang dan</button>
      <button onClick={() => onSortCart("des")}>Sap xep giam dan</button>

      {/* Cach 2 */}
      {/* <button onClick={onSortCart("asc")}>Sap xep tang dan</button>
      <button onClick={onSortCart("des")}>Sap xep giam dan</button> */}
    </div>
  );
}
//  Lan dau render: functicn a()
//  onSortCart("asc")()
export default App;
