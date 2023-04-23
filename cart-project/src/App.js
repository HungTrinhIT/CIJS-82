import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import Header from "./components/Header/Header";

import { initialProducts } from "./utils/mockData";
import Homepage from "./pages/Homepage/Homepage";
import AboutUs from "./pages/AboutUs/AboutUs";
import Admin from "./pages/Admin/Admin";
import Cart from "./pages/Cart/Cart";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import NotFound from "./pages/NotFound/NotFound";

const App = () => {
  // States
  const [products, setProducts] = useState(initialProducts);
  const [cart, setCart] = useState([]);

  // Functions
  const onAddNewProductToProductList = (product) => {
    const newProduct = {
      ...product,
      id: uuidv4(),
    };

    const newProductList = [...products, newProduct];

    setProducts(newProductList);
  };

  const onAddProductToCart = (productId) => {
    // console.log("Add new product:", productId);

    const existingProduct = products.find(
      (product) => product.id === productId
    );

    const indexOfAddingProductInCart = cart.findIndex(
      (cartItem) => cartItem.id === productId
    );

    if (indexOfAddingProductInCart === -1) {
      const newCartItem = {
        ...existingProduct,
        quantity: 1,
      };

      setCart([...cart, newCartItem]);
    } else {
      const clonedCart = [...cart];
      clonedCart[indexOfAddingProductInCart].quantity += 1;
      setCart(clonedCart);
    }
  };

  const onIncreaseQuantity = (productId) => {
    const existingCartItemIndex = cart.findIndex(
      (cartItem) => cartItem.id === productId
    );
    const updatingCart = [...cart];
    updatingCart[existingCartItemIndex].quantity += 1;

    setCart(updatingCart);
  };

  const onDecreaseQuantity = (productId) => {
    const existingCartItemIndex = cart.findIndex(
      (cartItem) => cartItem.id === productId
    );

    const updatingCart = [...cart];
    const currentCartItemQuantity =
      updatingCart[existingCartItemIndex].quantity;

    if (currentCartItemQuantity === 1) {
      // return;
      // Thêm logic xoá sản phẩm
      onDeleteCartItem(productId);
    } else {
      updatingCart[existingCartItemIndex].quantity -= 1;
      setCart(updatingCart);
    }
  };

  const onDeleteCartItem = (productId) => {
    const newCartAfterRemovedItem = cart.filter(
      (cartItem) => cartItem.id !== productId
    );

    setCart(newCartAfterRemovedItem);
  };
  return (
    <div className="App">
      <Header cart={cart} />
      <main className="container py-3">
        <Routes>
          <Route
            path="/"
            element={
              <Homepage
                products={products}
                onAddProductToCart={onAddProductToCart}
              />
            }
          />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route
            path="/admin"
            element={
              <Admin
                onAddNewProductToProductList={onAddNewProductToProductList}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                onDeleteCartItem={onDeleteCartItem}
                onIncreaseQuantity={onIncreaseQuantity}
                onDecreaseQuantity={onDecreaseQuantity}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;

/*
  - Tách function
  - Tách class: OOP
    + Liên minh huyền thoại
    + A, B, C, D
    => Tưởng nền tảng 
    => thuộc tính: chiều cao, cân nượng, lượng máu, ...
    => hành động: chạy(), nhảy(), tốc biến()
  
  - Module
  Services > module > class > function (reusable code)
  Functional Programming


  Homepage: /
  About us: /about-us
  Cart Page: /cart
  Search Page: /search

  PrivateRoute
    => Role:
      + Admin
      + Customer Services
      + Super Admin 
      + Marketing

  App
    CartPage
      CartInformation
        CartTable
          CartTableItem

*/
