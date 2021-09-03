import React from 'react';
import styled from 'styled-components';

import UniversalForm from 'React/Components/UniversalForm/UniversalForm';

const Login = () => {

    const defaultFormData = {
        apiUrl: '/user/login',
        hasSubmitted: false,
        request: {},
        response: {},
        message: '',

        controls: [
            {
                id: 'username',
                label: 'Username',
                value: 'Taylorbryanne@gmail.com',
                type: 'Email',
                validation: {
                    isValid: true,
                    rules: ['required', 'email'],
                    message: '',
                }
            },
            {
                id: 'password',
                label: 'Password',
                value: '',
                type: 'text',
                validation: {
                    isValid: true,
                    rules: ['required'],
                    message: '',
                }
            },  
        ]
    }

    return (
        <LoginStyled className= 'Login'>
             <UniversalForm defaultFormData={ defaultFormData } />
        </LoginStyled>
    )
}

export default Login;

const LoginStyled = styled.div`
    padding: 20px; 

`;