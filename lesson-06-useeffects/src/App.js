import { useEffect, useState } from "react";
import "./App.css";

const Body = () => {
  return (
    <div
      style={{
        height: "1500px",
        background: "#ececec",
      }}
    ></div>
  );
};

function App() {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const position = document.documentElement.scrollTop;
    console.log(position);
  };

  // Effect for counts
  useEffect(() => {
    console.log("Count effect runs");
    document.title = `You have just clicked ${count} times`;
  });

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("update count");
      setCount(count + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [count]);

  // Effect for scrolling
  useEffect(() => {
    console.log("Scrolling effect runs");
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
      console.log("Clean up runs");
    };
  });

  // Render
  console.log("Render");
  return (
    <div>
      <h1>Hello useEffects</h1>
      <button onClick={() => setCount(count + 1)}>Click me!</button>
      {visible && <Body />}
    </div>
  );
}

export default App;
