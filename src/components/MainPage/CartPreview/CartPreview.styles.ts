import { Card, CardActionArea, styled } from '@mui/material';
import { grey } from '@mui/material/colors';

export const CartPreviewWrapper = styled(CardActionArea)`
  margin-bottom: 1.5rem;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

export const CartPreviewContainer = styled(Card)`
  display: flex;
  padding: 2rem;
  background-color: ${grey[50]};
  align-items: center;
`;
