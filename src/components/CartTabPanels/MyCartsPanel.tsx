import React, { FunctionComponent } from 'react';
import { TabPanelProps } from 'components/TabPanel/TabPanel';
import { CartTabPanelWrapper } from './CartTabPanelWrapper';

export const MyCartsPanel: FunctionComponent<TabPanelProps> = (props) => {
  return <CartTabPanelWrapper {...props}>All carts</CartTabPanelWrapper>;
};
