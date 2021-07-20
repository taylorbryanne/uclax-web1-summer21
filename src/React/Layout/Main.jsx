import React from "react";
import styled from "styled-components";

import Homework from '../Homework/Homework.jsx';
import SunAndMoon from '../SunAndMoon/SunAndMoon.jsx';


const Main = () => {
    return <MainStyled> 
                <h1>The Main Content</h1>
                <SunAndMoon/>
                <Homework />
            </MainStyled>
}

export default Main;


const MainStyled = styled.main`
    background-color: #0bd8d8;
    color: black;
    padding: 20px;
    text-align: left;
`;