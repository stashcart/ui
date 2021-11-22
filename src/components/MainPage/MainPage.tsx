import { FunctionComponent, useState } from 'react';
import { AppBar, Box, Card, Container, Tab, Tabs } from '@mui/material';
import SwipeableViews from 'react-swipeable-views';
import { AllCartsPanel } from 'components/MainPage/CartTabPanels/AllCartsPanel';
import { MyCartsPanel } from 'components/MainPage/CartTabPanels/MyCartsPanel';
import { styles } from './MainPage.styles';

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
          <AppBar position="static" sx={styles.tabBar}>
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
          <Card sx={styles.tabPanel}>
            <SwipeableViews index={tabNumber} onChangeIndex={onChangeTab}>
              <AllCartsPanel currentTabNumber={tabNumber} tabNumber={0} />
              <MyCartsPanel currentTabNumber={tabNumber} tabNumber={1} />
            </SwipeableViews>
          </Card>
        </Box>
      </Container>
    </Box>
  );
};
