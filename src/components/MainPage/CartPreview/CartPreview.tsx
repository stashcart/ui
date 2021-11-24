import { Typography, Box, Link, Icon, Tooltip } from '@mui/material';
import { CartPreview as CartPreviewTypes } from 'apollo/cart/types/cart-preview.interface';
import Check from '@mui/icons-material/Check';
import React, { FunctionComponent } from 'react';
import { CartPreviewContainer, CartPreviewWrapper } from './CartPreview.styles';

interface Props {
  cartPreview: CartPreviewTypes;
}

export const CartPreview: FunctionComponent<Props> = ({ cartPreview }) => {
  const { owner, title, storeName, isAutoApproveEnabled } = cartPreview;

  return (
    <CartPreviewWrapper>
      <CartPreviewContainer>
        <Typography variant="h3" flex={2}>
          {storeName}
        </Typography>
        <Box display="flex" flexDirection="column" flex={5}>
          <Typography variant="h5" fontWeight="light">
            {title}
          </Typography>
          <Box display="flex">
            <Typography mr={1}>Owner:</Typography>
            <Link href={`/profiles/${owner.id}`} underline="hover">
              <a>
                <Typography>{owner.name}</Typography>
              </a>
            </Link>
          </Box>
        </Box>
        <Box flex={0.5}>
          {isAutoApproveEnabled && (
            <Tooltip title="Auto approve enabled">
              <Icon>
                <Check />
              </Icon>
            </Tooltip>
          )}
        </Box>
      </CartPreviewContainer>
    </CartPreviewWrapper>
  );
};
