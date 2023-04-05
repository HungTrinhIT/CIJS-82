import "./App.css";
import CategorySection from "./components/CategorySection/CategorySection";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Product from "./components/Product/Product";

const App = () => {
  // JSX: Javascript XML
  return (
    <div>
      <Header cartAmount={100} username="Harry" />
      <main className="container">
        <Product
          title="Iphone 14 Pro Max"
          price="1500"
          productImg="images/cat-1.png"
        />

        <Product
          title="Samsung Galaxy"
          price="2000"
          productImg="images/cat-1.png"
        />
        <Product title="LG Galaxy" price="2000" productImg="images/cat-1.png" />
        <Product
          title="Huawei Galaxy"
          price="2000"
          productImg="images/cat-1.png"
        />
        <Product
          title="Oppo Galaxy"
          price="1500"
          productImg="images/cat-1.png"
        />
        <Product title="Sony" price="3000" productImg="images/cat-1.png" />
        <Product />
        {/* <CategorySection /> */}
      </main>
      <Footer />
    </div>
  );
};

export default App;

// Rules of JSX
// 1. camelCase
// 2. Single root
// 3. thuộc tính styling: nhận vào một object
// 4. class => className
