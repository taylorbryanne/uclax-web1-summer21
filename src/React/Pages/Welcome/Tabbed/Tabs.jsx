import React from 'react';
import styled from 'styled-components';

import Tab from './Tab.jsx';

const Tabs = ({tabbedData, chosenTab, chosenTabUpdate}) => {

    console.log('tabbedData', tabbedData);

    return (
        <TabsStyled className='Tabs'>
            {
                tabbedData.map((tab, idx) => {
                    return <Tab 
                                key={ idx }
                                tab={ tab }
                                chosenTab={ chosenTab }
                                chosenTabUpdate={ chosenTabUpdate }
                            /> 

                })   
            }
        </TabsStyled>
    );
}

export default Tabs;

const TabsStyled = styled.div`
    display: flex;
`;