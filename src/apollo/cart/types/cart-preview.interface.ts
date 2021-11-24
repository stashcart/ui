import { Owner } from './owner.interface';

export interface CartPreview {
  id: string;
  title: string;
  owner: Owner;
  storeName: string;
  isAutoApproveEnabled: boolean;
}
