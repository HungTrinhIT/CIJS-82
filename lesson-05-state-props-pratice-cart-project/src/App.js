import { useState } from "react";
import "./App.css";
import AddProductForm from "./components/AddProductForm/AddProductForm";
import Header from "./components/Header/Header";
import ProductList from "./components/ProductList/ProductList";

function App() {
  // State chứa danh sách những sản phẩm
  const [products, setProducts] = useState([]);

  // Cart state lưu giữ thông tin giỏ hàng
  const [cart, setCart] = useState([]);

  // Thêm sản phẩm vào danh sách sản phẩm
  const onAddNewProductToProductList = (product) => {
    console.log("New product is coming...", product);
    const newProductList = [...products, product];
    setProducts(newProductList);
  };

  // Thêm sản phẩm vào giỏ hàng
  const onAddProductToCart = () => {
    console.log("New event is coming...");
  };

  const onUpdateCart = () => {};

  const onDeleteCart = () => {};
  return (
    <div className="App">
      <Header cart={cart} />
      <main className="container py-3">
        <div className="row">
          <div className="col-12 col-md-4">
            <AddProductForm onAddNewProduct={onAddNewProductToProductList} />
          </div>
          <div className="col-12 col-md-8">
            <ProductList products={products} onAddToCart={onAddProductToCart} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

/*
  - Quản lý form dựa vào state
    + onChange
      + dynamic key
    + onSubmit
      + event.preventDefault()

  - Lifting state up: Đặt state đúng vị trí để đễ dàng sharing cho 
  các componnet con khác cần dùng
  - Data down (one-way data binding): dữ liệu chỉ 
  truyền từ cha xuống con
  - Event up: khi có 1 event từ component con mà muốn
  component cha biết
*/
