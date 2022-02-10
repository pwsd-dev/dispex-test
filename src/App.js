import React from "react";
import { Header } from "./components";
import "./App.css";
// import { useSelector, useDispatch } from "react-redux";
import { fetchItems } from "./redux/actions/items";

function App() {
  return (
    <div className="wrapper">
      <Header />
    </div>
  );
}

export default App;
