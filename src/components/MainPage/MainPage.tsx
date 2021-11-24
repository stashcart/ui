import { FunctionComponent, useState } from 'react';
import { Box, Container, Tab, Tabs } from '@mui/material';
import SwipeableViews from 'react-swipeable-views';
import { AllCartsPanel } from 'components/MainPage/CartTabPanels/AllCartsPanel';
import { MyCartsPanel } from 'components/MainPage/CartTabPanels/MyCartsPanel';
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
      <Container>
        <Box pt={2}>
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
        </Box>
      </Container>
    </Box>
  );
};
