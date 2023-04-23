import { useState } from "react";
import "./App.css";
/*

  Data structure of each ExpenseItem
    { 
      id:"",
      createdTime: "" (new Date() => date, month, year),
      name: "",
      amount: ""
    }
*/

const TARGET_OUTCOME = 1000;
const FILTER_YEARS = [
  2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025,
];

function App() {
  const [expenseList, setExpenseList] = useState([]);
  const [currentyear, setCurrentYear] = useState(new Date().getFullYear());
  return <div className="App"></div>;
}

export default App;

/*

Component tree
App
  AddNewExpenseForm
  FilterForm => thay đổi current year [2015...,2023,...2025]
  ExpenseChart
    ExpenseProgressBar (January)
    ExpenseProgressBar  (February)
    ExpenseProgressBar
    ExpenseProgressBar
    ...
    ExpenseProgressBar (December)

  ExpenseList (props expenseList, currentYear)
    => Filter danh sách expense theo currentYear
    trước khi dùng hàm map để render
    => Map

      ExpenseItem
      ExpenseItem
      ExpenseItem
      ExpenseItem


State data structure
App
  const TARGET_OUTCOME = 1000;
  const [expenseList, setExpenseList] = useState([
    {
      id:"",
      createdTime: "" (new Date() => date, month, year),
      name: "",
      amount: ""
    },
    {
      ...
    }
  ])

  // Năm hiện tại mà nó sẽ filter bên dưới
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())



*/
