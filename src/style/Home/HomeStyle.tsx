import React from "react";
import styled from "styled-components";

function HomeStyle() {
  return (
    <SquareContainer>
      <SmallSquare>1</SmallSquare>
      <SmallSquare>2</SmallSquare>
      <BigSquare>3</BigSquare>
    </SquareContainer>
  );
}

const SquareContainer = styled.div`
  margin-top: 50px;
`;

const SmallSquare = styled.div`
  width: 700px;
  height: 260px;
  background-color: #40444f;
  float: left;
  margin-left: 90px;
  margin-bottom: 50px;
`;

const BigSquare = styled.div`
  background-color: #40444f;
  width: 1490px;
  height: 260px;
  clear: left;
  margin: 0 auto;
`;

export default HomeStyle;
