import React from 'react';
import styled from 'styled-components';

import Lightbox from './Lightbox.jsx';

const Playground = () => {


    const LightboxContent = () => {
        return (
            <div> Content To Put In Lightbox.</div>
        )


    }

    return (
        <PlaygroundStyled className='Playground'>
            <h2>Made Fresh Daily</h2>
            <Lightbox LightboxContent={ LightboxContent }>
                OUR BEAUTIFUL TREATS
            </Lightbox>
        </PlaygroundStyled>
    );
}

export default Playground;

const PlaygroundStyled = styled.div`
    
`;