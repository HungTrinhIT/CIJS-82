import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import SectionJewelryType from "./components/SectionJewelryType/SectionJewelryType";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <HeroSection />
        <SectionJewelryType />
      </main>
      <Footer />
    </div>
  );
}

export default App;
