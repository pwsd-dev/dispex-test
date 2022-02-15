import React from "react";
// import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import CustomSelect from "../JS/custom-select.js";

function Select(props) {
  // const lists = [];

  // if (items.items.length !== 0) {
  //   console.log(items.items[0].id);

  //   lists.push(items);
  // }

  console.log(props.items);

  return (
    <div className="select" id="select-1">
      <button
        type="button"
        className="select__toggle"
        name="car"
        value=""
        data-select="toggle"
        data-index="-1"
      >
        Выберите из списка
      </button>

      <div className="select__dropdown">
        <ul className="select__options">
          <li
            className="select__option"
            data-select="option"
            data-value="volkswagen"
            data-index="0"
          >
            f
          </li>
          <li
            className="select__option"
            data-select="option"
            data-value="ford"
            data-index="1"
          >
            Ford
          </li>
          <li
            className="select__option"
            data-select="option"
            data-value="toyota"
            data-index="2"
          >
            Toyota
          </li>
          <li
            className="select__option"
            data-select="option"
            data-value="nissan"
            data-index="3"
          >
            Nissan
          </li>
        </ul>
      </div>
    </div>
  );
}

// class Select extends React.Component {
//   state = {
//     items: [],
//   };
//   render() {
//     const lists = this.props.items.map((item) => {
//       return <li key={item.id}>{item.name}</li>;
//     });
//     // if (this.props.streets.items.length !== 0) {
//     //   console.log(this.props.streets.items[0].id);

//     //   lists.push(this.props.streets.items);
//     // }

//     console.log(this.props.items);

//     return <div>{lists}</div>;
//   }
// }

export default Select;

/*
       <div className="select__dropdown">
        <ul className="select__options">
          <li
            className="select__option"
            data-select="option"
            data-value="volkswagen"
            data-index="0"
          >
            Volkswagen
          </li>
          <li
            className="select__option"
            data-select="option"
            data-value="ford"
            data-index="1"
          >
            Ford
          </li>
          <li
            className="select__option"
            data-select="option"
            data-value="toyota"
            data-index="2"
          >
            Toyota
          </li>
          <li
            className="select__option"
            data-select="option"
            data-value="nissan"
            data-index="3"
          >
            Nissan
          </li>
        </ul>
      </div>
    </div> 
*/
