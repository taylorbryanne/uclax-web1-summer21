import React from 'react';
import styled from 'styled-components';

const CloseButton = ({ onClick }) => {

    return (
        <CloseButtonStyled className='CloseButton' onClick= { onClick }>
            X 
        </CloseButtonStyled>
    );
}

export default CloseButton;

const CloseButtonStyled = styled.button`
    display: block;
    width: 25px;
    height: 25px;
    border: solid 1px teal;
    border-radius: 50%; 
    text-align: center;
    color: black;
    background-color: white;
    cursor: pointer; 
`;