import { Box, Tab, Tabs } from '@mui/material';
import { AllCartsPanel } from 'components/MainPage/CartTabPanels/AllCartsPanel';
import { MyCartsPanel } from 'components/MainPage/CartTabPanels/MyCartsPanel';
import { MainContainer } from 'components/_common/MainContainer/MainContainer.styles';
import { FunctionComponent, useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { TabBar, TabPanel } from './MainPage.styles';

export const MainPage: FunctionComponent = () => {
  const [tabNumber, setTabNumber] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabNumber(newValue);
  };

  const onChangeTab = (index: number) => {
    setTabNumber(index);
  };

  return (
    <Box>
      <MainContainer>
        <TabBar position="static">
          <Tabs
            value={tabNumber}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
          >
            <Tab label="All carts" />
            <Tab label="My carts" />
          </Tabs>
        </TabBar>
        <TabPanel>
          <SwipeableViews index={tabNumber} onChangeIndex={onChangeTab}>
            <AllCartsPanel currentTabNumber={tabNumber} tabNumber={0} />
            <MyCartsPanel currentTabNumber={tabNumber} tabNumber={1} />
          </SwipeableViews>
        </TabPanel>
      </MainContainer>
    </Box>
  );
};
