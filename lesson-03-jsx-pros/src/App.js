import "./App.css";

import Product from "./components/Product/Product";

const App = () => {
  const cartAmount = 100;

  // JSX: Javascript XML
  return (
    <div className="container">
      <header
        style={{
          display: "flex",
          backgroundColor: "#ececec",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h1>Shopping cart</h1>
        <div>
          {"Cart".toUpperCase()} {cartAmount}
        </div>
      </header>

      <main>
        <Product title="Iphone 14 Pro Max" price="1500" />
        <Product title="Samsung Galaxy" price="2000" />
        <Product title="LG Galaxy" price="2000" />
        <Product title="Huawei Galaxy" price="2000" />
        <Product title="Oppo Galaxy" price="1500" />
        <Product title="Sony" price="3000" />
      </main>

      <footer>Footer</footer>
    </div>
  );
};

export default App;

// Rules of JSX
// 1. camelCase
// 2. Single root
// 3. thuộc tính styling: nhận vào một object
// 4. class => className
