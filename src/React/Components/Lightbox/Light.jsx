import React from 'react';
import styled from 'styled-components';

import CloseButton from 'React/Components/Buttons/CloseButton.jsx';

const Light = ({showLightUpdate, children}) => {

    const handleClose = () => {
        showLightUpdate(flase);
    }

    const handleClick = (event) => {
        event.stopPropogration();
    }

    return (
        <LightStyled className='Light' onClick={ handleClick }>
            <CloseButton onClick={ handleClose } />
            { children } 
        </LightStyled>
    );
}

export default Light;

const LightStyled = styled.div`

    position: absolute;

    background-color: white;

    width: 200px;
    height: 300px;

    left: 50%;
    top: 50%;

    transform: translate(-50%, -50%);
    

    .CloseButton {
        position: absolute;
        right: -10px;
        top: -10px;
    }
`;