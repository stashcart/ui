import React, { FunctionComponent } from 'react';
import { useCarts } from 'apollo/cart/hooks/use-carts.hook';
import { TabPanelProps } from 'components/TabPanel/TabPanel';
import { CartPreview } from 'components/CartPreview/CartPreview';

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
