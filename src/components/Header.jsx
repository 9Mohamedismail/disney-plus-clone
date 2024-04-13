import React from "react";
import styled from "styled-components";
import logo from "/images/logo.svg";

function Header() {
  return (
    <Nav>
      <Logo src={logo} />
      <NavMenu></NavMenu>
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  height: 70px;
  background: black;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div``;
