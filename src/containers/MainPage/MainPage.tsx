import { FunctionComponent, useState } from 'react';
import { AppBar, Box, Container, Tab, Tabs } from '@mui/material';
import SwipeableViews from 'react-swipeable-views';
import { AllCartsPanel } from 'components/CartTabPanels/AllCartsPanel';
import { MyCartsPanel } from 'components/CartTabPanels/MyCartsPanel';

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
          <AppBar position="static" sx={{ backgroundColor: 'primary.light' }}>
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
          </AppBar>
          <SwipeableViews index={tabNumber} onChangeIndex={onChangeTab}>
            <AllCartsPanel currentTabNumber={tabNumber} tabNumber={0} />
            <MyCartsPanel currentTabNumber={tabNumber} tabNumber={1} />
          </SwipeableViews>
        </Box>
      </Container>
    </Box>
  );
};
