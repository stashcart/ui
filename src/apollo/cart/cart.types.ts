export interface CartPreview {
  id: string;
  title: string;
  owner: Owner;
  storeName: string;
  isAutoApproveEnabled: boolean;
}

export interface Owner {
  id: string;
  name: string;
}
