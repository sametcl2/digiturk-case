import React from "react";
import styled from "styled-components";
import Logo from "../assets/logo.png";

const Wrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 100%;
  height: 100px;
  z-index: 100;
  border:1px solid rgba(0,0,0,0.04);
  box-shadow: 5px 10px 30px rgba(53,53,53,0.1);
`;


const Writing = styled.p`
    font-weight: 500;
    letter-spacing: 1px;
    font-size: 1.2rem;
    color: black;
`;

function Footer() {
  return <Wrapper><img src={Logo} width="100px"/></Wrapper>;
}

export default Footer;
