import React from "react";
import styled from "styled-components";
import { NavLink } from 'react-router-dom';

/*Scripts-----------------------------*/
import { mediaQueries } from "common/mediaQueries/mediaQueries";

const Nav = () => {
    return (
        <NavStyled>
            <NavLink to="/" exact>Home</NavLink>
            <NavLink to="/services">Weddings/Events</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/homework">Homework</NavLink> 
        </NavStyled>
    )
}

export default Nav;

const NavStyled = styled.nav`
    background-color: #fabdf7;
    padding: 10px;
    text-align: center;
    
    a{
        display: block;
        margin: 5px 0px;

        background-color: #ea05ff;
        color: white;
        padding: 10px;
        

        text-decoration: none;
        text-transform: uppercase;

        &:hover {
            color: #ea05ff;
            background-color: white;
        }
    
        &.active {
            color: #9d00ac;
            background-color: #ed86f7;
        }
    }

    @media ${mediaQueries.mdUp} {
        a {
            display: inline-block;
            margin: 0px 10px;
            font-size: 16px;
            border-radius: 5px;
        }
    }
    `;