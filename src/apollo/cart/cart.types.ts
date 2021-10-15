export interface CartPreview {
  id: string;
  title: string;
  owner: Owner;
  storeName: string;
  idAutoApproved: boolean;
}

export interface Owner {
  id: string;
  name: string;
}
