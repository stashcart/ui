import { Box, Theme } from '@mui/material';
import { SystemProps } from '@mui/system';
import React, { FunctionComponent } from 'react';

export interface TabPanelProps {
  tabNumber: number;
  currentTabNumber: number;
}

export const TabPanel: FunctionComponent<TabPanelProps & SystemProps<Theme>> =
  ({ children, currentTabNumber, tabNumber, ...systemProps }) => {
    if (currentTabNumber !== tabNumber) {
      return null;
    }

    return <Box {...systemProps}>{children}</Box>;
  };
