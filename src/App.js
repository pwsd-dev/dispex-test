import React from "react";
import { Header, Select } from "./components";
import "./App.css";
// import { useSelector, useDispatch } from "react-redux";
import { fetchItems } from "./redux/actions/items";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Select />
    </div>
  );
}

export default App;
