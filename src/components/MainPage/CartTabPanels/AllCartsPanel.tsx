import React, { FunctionComponent } from 'react';
import { useCarts } from 'apollo/cart/hooks/use-carts.hook';
import { TabPanelProps } from '../TabPanel/TabPanel';
import { CartPreview } from '../CartPreview/CartPreview';

export const AllCartsPanel: FunctionComponent<TabPanelProps> = () => {
  const { data } = useCarts({});

  const carts = data?.carts ?? [];

  return (
    <div>
      {carts.map((cart) => (
        <CartPreview key={cart.id} cartPreview={cart} />
      ))}
    </div>
  );
};
