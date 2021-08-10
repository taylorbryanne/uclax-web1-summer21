import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';

import { mediaQueries } from 'common/mediaQueries/mediaQueries.js';

import Header from './Layout/Header.jsx';
import Nav from './Layout/Navigation/Navigation.jsx';
import Main from './Layout/Main.jsx';
import Footer from './Layout/Footer.jsx';
import { MediaQueryProvider } from 'common/mediaQueries/useMediaQuery.js';
import Navigation from './Layout/Navigation/Navigation.jsx';


const App = () => {
return (
    <MediaQueryProvider>
        <BrowserRouter>
            <AppStyled> 
                <Header/>
                <Navigation /> 
                <Main/>
                <Footer/>
            </AppStyled>
        </BrowserRouter>  
    </MediaQueryProvider>
);
}

export default App;

const AppStyled = styled.div`
    .inset-container {
        border: solid 2px red;
        max-width: 1600px;

        margin-right: auto;
        margin-left: auto;
    }
`;
