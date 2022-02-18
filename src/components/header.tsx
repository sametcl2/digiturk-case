import React from "react";
import styled from "styled-components";
import Logo from "../assets/logo.png";

const Wrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width:100%;
    border:1px solid rgba(0,0,0,0.04);
    background-color: white;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;
    box-shadow: 5px 10px 30px rgba(53,53,53,0.1);
`;

const Writing = styled.p`
    font-weight: 500;
    letter-spacing: 1px;
    font-size: 1.2rem;
    color: black;
    text-align: center;
    margin-right: 50px;
`;

const Image = styled.div`
 margin-left: 50px;
`;


function Header() {
  return (
    <Wrapper>
      <Image>
        <img src={Logo} width="100px"/>
      </Image>
      <Writing>
       Samet Şahin
      </Writing>
    </Wrapper>
  );
}

export default Header;
