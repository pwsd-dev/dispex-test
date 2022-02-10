import React from "react";
import styled from "styled-components";
import CustomSelect from "../JS/custom-select.js";

function Select() {
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
  );
}

export default Select;
