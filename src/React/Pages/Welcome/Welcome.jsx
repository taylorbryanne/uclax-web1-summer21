import React from 'react';
import styled from 'styled-components';

import Playground from '../../Components/Lightbox/Playground.jsx';
// import Slideshow from './Slideshow/Slideshow.jsx';
import Youtube from './Youtube/Youtube.jsx';
import Tabbed from './Tabbed/Tabbed.jsx';
import Staff from './Staff/Staff.jsx';

const Welcome = () => {

    return (
        <WelcomeStyled className= 'Welcome'>
            <h1>Retro Desserts For Your Sweet Tooth</h1>
            <Playground />
            {/* <Slideshow /> */}
            <Youtube />
            <Tabbed />
            <Staff />
        </WelcomeStyled>
    )
}

export default Welcome;

const WelcomeStyled = styled.div`
     text-align: center;

`;