import React from 'react';
import styled from 'styled-components';

import Container from './Container.jsx'

const Services = () => {

    return (
        <ServicesStyled className= 'Services'>
            <h1>Weddings and Events</h1>
            <p> We know how important your wedding day is. That’s why we work closely with you to custom design a cake that reflects your sentiments, style and vision. After filling out our contact form, we will arrange a consultation and tasting. For couples wanting a less traditional approach or wanting to offer their guests additional desserts, we can create custom dessert tables filled with a variety of unique choices including our signature mini layer cakes.</p>
            <Container />
        </ServicesStyled>
    )
}

export default Services;

const ServicesStyled = styled.div`
    text-align: center;
`;