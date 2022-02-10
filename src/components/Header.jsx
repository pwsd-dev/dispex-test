import React from "react";
import styled from "styled-components";

function Header() {
  const H1 = styled.h1`
    color: red;
  `;

  return (
    <div>
      <H1>Header</H1>
    </div>
  );
}

export default Header;
