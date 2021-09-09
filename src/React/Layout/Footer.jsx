import React from "react";
import styled from "styled-components";

const Footer = () => {
    return <FooterStyled> Cake Monkey Bakery &copy; 2021 </FooterStyled>
}

export default Footer;

const FooterStyled = styled.footer`
    background-color: #fa75f3;
    color: white;
    padding: 10px;
    text-align: center;
`;