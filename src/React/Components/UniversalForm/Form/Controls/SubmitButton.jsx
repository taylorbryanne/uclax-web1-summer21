import React from 'react';
import styled from 'styled-components';

const SubmitButton = () => {

    const handleClick = (e) => {
        e.preventDefault();
        console.log('Form Submitted');
    }

    return (
        <SubmitButtonStyled className='SubmitButton'
            className='SubmitButton'
            type='submit'
            onClick={ handleClick }
        >
            Submit 
        </SubmitButtonStyled>
    );
}

export default SubmitButton;

const SubmitButtonStyled = styled.button`
    background-color: teal;
    color: #fff;

    padding: 10px 20px;
    border-raidus: 5px;

    &.hover, &:focus{
        background-color: #026161;
    }
    
`;