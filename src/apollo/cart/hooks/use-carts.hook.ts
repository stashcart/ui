import { QueryResult, useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { CartPreview } from '../types/cart-preview.interface';

const query = gql`
  query Carts($ownerId: String) {
    carts(ownerId: $ownerId) {
      id
      title
      owner {
        id
        name
      }
      storeName
      isAutoApproveEnabled
    }
  }
`;

interface Data {
  carts: CartPreview[];
}

interface Variables {
  ownerId?: string;
}

export const useCarts = (variables: Variables): QueryResult<Data, Variables> =>
  useQuery(query, { variables });
