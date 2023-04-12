import { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import AddProductForm from "./components/AddProductForm/AddProductForm";
import Header from "./components/Header/Header";
import ProductList from "./components/ProductList/ProductList";

const initialProducts = [
  {
    id: "1",
    productName: "IPhone 14 Pro Max",
    productPrice: 2000,
    productImage:
      "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/250257/iphone-13-pink-1-600x600.jpg",
  },
  {
    id: "2",
    productName: "IPhone 13",
    productPrice: 3000,
    productImage:
      "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/250257/iphone-13-pink-1-600x600.jpg",
  },
  {
    id: "3",
    productName: "BPhone Pro Max",
    productPrice: 1500,
    productImage:
      "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/250257/iphone-13-pink-1-600x600.jpg",
  },
];

function App() {
  // State chứa danh sách những sản phẩm
  const [products, setProducts] = useState(initialProducts);

  // Cart state lưu giữ thông tin giỏ hàng
  const [cart, setCart] = useState([]);

  // Thêm sản phẩm vào danh sách sản phẩm
  const onAddNewProductToProductList = (product) => {
    // Step 1: Tạo product với unique id
    const newProduct = {
      ...product,
      id: uuidv4(),
    };

    // Step 2: Clone 1 cái mảng product và thêm product vào
    const newProductList = [...products, newProduct];

    // Step 3: Cập nhật lại state
    setProducts(newProductList);
  };

  // Thêm sản phẩm vào giỏ hàng
  const onAddProductToCart = (productId) => {
    // console.log("Add new product:", productId);

    // Step 1: Tìm xem sản phẩm có id là productId nằm ở vị trí nào trong products
    const existingProduct = products.find((product) => {
      return product.id === productId;
    });

    // Step 2:
    // 2.1 Đã tồn tại trong giỏ hàng => cập nhật quantity
    // 2.2 Nếu chưa tồn tại thì mới với quantity = 1
    const newCartItem = {
      ...existingProduct,
      quantity: 1,
    };

    setCart([...cart, newCartItem]);
  };

  const onUpdateCart = () => {};

  const onDeleteCart = () => {};
  return (
    <div className="App">
      <Header cart={cart} />
      <main className="container py-3">
        <div className="row">
          <div className="col-12 col-md-3">
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

  - State change => UI re-render
*/
