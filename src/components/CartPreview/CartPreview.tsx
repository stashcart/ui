import {
  Card,
  CardActionArea,
  Typography,
  Box,
  Link,
  Icon,
  Tooltip,
} from '@mui/material';
import { CartPreview as CartPreviewTypes } from 'apollo/cart/cart.types';
import Check from '@mui/icons-material/Check';
import React, { FunctionComponent } from 'react';
import { styles } from './CartPreview.styles';

interface Props {
  cartPreview: CartPreviewTypes;
}

export const CartPreview: FunctionComponent<Props> = ({ cartPreview }) => {
  const { owner, title, storeName, isAutoApproveEnabled } = cartPreview;

  return (
    <CardActionArea
      sx={{ mb: 3, borderTopLeftRadius: 4, borderTopRightRadius: 4 }}
    >
      <Card sx={styles.cartPreview}>
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
      </Card>
    </CardActionArea>
  );
};
