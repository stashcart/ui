import { FunctionComponent, useState } from 'react';
import { AppBar, Box, Card, Container, Tab, Tabs } from '@mui/material';
import SwipeableViews from 'react-swipeable-views';
import { AllCartsPanel } from 'components/CartTabPanels/AllCartsPanel';
import { MyCartsPanel } from 'components/CartTabPanels/MyCartsPanel';
import { useStyles } from './MainPage.styles';

export const MainPage: FunctionComponent = () => {
  const styles = useStyles();

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
          <AppBar position="static" className={styles.tabBar}>
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
          <Card className={styles.tabPanel}>
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
