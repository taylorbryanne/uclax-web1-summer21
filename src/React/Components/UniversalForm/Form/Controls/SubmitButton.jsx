import React, { useContext } from 'react';
import styled from 'styled-components';

import Context from '../../Context/index.js';
import { submitForm } from '../../Context/actions.js';

const SubmitButton = () => {

    const { dispatch, state } = useContext(Context);

    const handleClick = (e) => {
        e.preventDefault();
        console.log('Form Submitted');
        submitForm(dispatch, state);
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
    border-radius: 5px;

    &.hover, &:focus{
        background-color: #026161;
    }
    
`;