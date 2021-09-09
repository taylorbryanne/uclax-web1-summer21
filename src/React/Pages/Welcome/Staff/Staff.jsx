import React from 'react';
import styled from 'styled-components';

import StaffMembers from './StaffMembers.jsx';

const Staff = () => {

    return (
        <StaffStyled className= 'Staff'>
                <div className="inset-container">
                <h2>A Sample Daily Menu</h2>
                <p> Our treats are always changing, here are some of our consistent menu items!</p>
                <StaffMembers />
                </div>
        </StaffStyled>
    )
}

export default Staff;

const StaffStyled = styled.div`
    * div {
        border: none;
        padding: 0px;
    }
`;