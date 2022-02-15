import React from "react";
import { Header, Select } from "./components";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchItems } from "./redux/actions/items";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const streets = useSelector(({ streets }) => {
    return streets.items;
  });

  // console.log(lists);

  return (
    <div className="wrapper">
      <Header />
      <Select items={streets} />
      {/* <Select items={streets} />
      <Select items={streets} /> */}
    </div>
  );
}

export default App;
