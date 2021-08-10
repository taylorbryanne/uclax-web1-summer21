import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

/* Scripts --------------------------*/
import { useMediaQuery } from 'common/mediaQueries/useMediaQuery.js';

import Nav from './Nav.jsx';
import Hamburger from './Hamburger.jsx';

const Navigation = () => {

    const [showMenu, showMenuUpdate] = useState(false);
    const { media } = useMediaQuery();

    console.log('media.mdUp' , media.mdUp);

    useEffect(() => {

        showMenuUpdate(media.mdUp);
    }, [media.mdUp]);

    const handleToggle = () => {
        showMenuUpdate(media.mdUp);
    }

    return (
        <NavigationStyled className='Navigation'>
                { !media.mdUp && <Hamburger onClick={ handleToggle } /> }
            { showMenu && <Nav /> }
        </NavigationStyled>
    );
}

export default Navigation;

const NavigationStyled = styled.div`
    .Hamburger {
        position: absolute;
        top: 20px;
        right: 20px;
    }
`;