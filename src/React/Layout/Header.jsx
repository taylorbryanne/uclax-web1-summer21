import React from "react";
import styled from "styled-components"

const Header = () => {
    return (
    <HeaderStyled> 
        <h2>Cake Monkey Bakery</h2>
        <h3>Childhood Treats for Everyone!</h3> 
    </HeaderStyled>
    )
}

export default Header;

const HeaderStyled = styled.header`
    background-color: #fa75f3;
    padding: 20px;
    text-align: center;
`;