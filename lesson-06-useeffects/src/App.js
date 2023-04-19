import { useState, useEffect } from "react";
import "./App.css";
import Body from "./components/Body";
import Count from "./components/Count";

function App() {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(true);

  console.log("[RENDER]: App component ");

  // UseEffect cho title
  // - Nó sẽ được run sau mỗi lần render (state thay đổi)
  useEffect(() => {
    console.log("[UPDATING] App component -> UseEffect runs");
    document.title = `You clicked ${count} times`;
  }, [count]);

  // UseEffect dùng để fetching data về nhữg bộ phim
  // Khi vừa vào trang web
  // Truyền vào một empty dependencies
  // Giúp mình gọi useEffect chỉ chạy 1 lần duy nhất sau lần render đầu tiên
  useEffect(() => {
    console.log("Fetching film data....");
  }, []);

  const onIncreaseCount = () => {
    setCount(count + 1);
  };
  const onToggleBodyComponent = () => {
    setVisible(!visible);
  };
  return (
    <div
      style={{
        height: "2000px",
      }}
    >
      <h1>Hello useEffects</h1>

      <Count count={count} />
      <button onClick={onIncreaseCount}>Click me</button>
      <button onClick={onToggleBodyComponent}>Toggle </button>
      {visible && <Body />}
    </div>
  );
}

export default App;

// Props: READ ONLY
// Binding in ReactJS: one-way data binding (data down)
// State in ReactJS: state changes (setState) => UI Re-render (lifting state up)
//   A  (state in A component)  -> B
//                              -> C
// Event handling (event up)
// Control form => handle
//              =>  onChange
//              =>  onSubmit (e.preventDefault())
//              =>  form validation (react-hook-form, formik, react-final-form)
// List => render array to jsx list (unique key for each JSX Item)
// Conditional rendering

/*
  - Ví dụ: muốn đăng kí những 3rd parties (firebase), realtime
  - Sau mỗi lần render => thêm những hành động vào
  - Vị trí nào ở trong component => Call API => fetching data

  => Class component => (ReactJS 18) => Function Component
  => (lifecycle - Vòng đời của một cái component)
*/

/*

  Danh sách món hàng: 
    - Lần render đầu tiên nó sẽ gọi API lấy về 100 món hàng ở trang page = 1
    - User click page còn lại 2,3,4 => onClick (state => lưu trữ giá trị mà user họ click)
    - Page mới => gọi API để lấy dữ liệu món hàng ở cái page mới (UseEffect)


  Lifecycle => UseEffect (****)
  Array dependencies
 */
