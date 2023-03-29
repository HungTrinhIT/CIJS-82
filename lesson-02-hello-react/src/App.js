import Product from "./Product";
import Header from "./Header";
// Là 1 component => component-based
// Là 1 component: Functional Component
function App() {
  return (
    // JSX: Javascript XML
    <div className="App">
      <Header />
      <div className="product-list">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}

export default App;
