import React, { FunctionComponent } from 'react';
import { TabPanel, TabPanelProps } from 'components/TabPanel/TabPanel';

export const CartTabPanelWrapper: FunctionComponent<TabPanelProps> = ({
  children,
  ...props
}) => {
  return (
    <TabPanel {...props} p={3} bgcolor="background.paper" height="80vh">
      {children}
    </TabPanel>
  );
};
