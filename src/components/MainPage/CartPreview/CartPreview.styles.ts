import { Card, CardActionArea, styled } from '@mui/material';
import { grey } from '@mui/material/colors';

export const CartPreviewWrapper = styled(CardActionArea)({
  marginBottom: '1.5rem',
  borderTopLeftRadius: 4,
  borderTopRightRadius: 4,
});

export const CartPreviewContainer = styled(Card)({
  display: 'flex',
  padding: '2rem',
  backgroundColor: grey[50],
  alignItems: 'center',
});
