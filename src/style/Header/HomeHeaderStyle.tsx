import React from "react";
import styled from "styled-components";

function HomeHeaderStyle() {
  return (
    <HeaderContainer>
      <NavContainer>
        <NavList>
          <NavItem>도전 어비스 던전</NavItem>
          <NavItem>도전 가디언 토벌</NavItem>
        </NavList>
      </NavContainer>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  width: 100%;
  max-width: 1920px;
  min-width: 1280px;
  height: 75px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  background-color: #40444f;
`;

const NavContainer = styled.nav`
  flex: 1 1 auto;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 90px;
`;

const NavItem = styled.li`
  color: #ffffff;
  padding-right: 40px;
  cursor: pointer;

  :last-child {
    padding-right: 0;
  }
`;

export default HomeHeaderStyle;
