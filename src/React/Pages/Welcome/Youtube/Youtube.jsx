import React from 'react';
import styled from 'styled-components';

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

const Youtube = () => {

    return (
        <YoutubeStyled className='Youtube'>
            <div>
                <LiteYouTubeEmbed 
                    id="vJMnMidxsi8"
                    title="Have you tried the delicious bakery Cake Monkey?"
                />
            </div>
        </YoutubeStyled>
    );
}

export default Youtube;

const YoutubeStyled = styled.div`
    margin-bottom: 100px;
    
`;