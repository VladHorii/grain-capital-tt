export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface AddressGeo {
  lat: string;
  lng: string;
}

export interface UserAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: AddressGeo;
}

export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  address: UserAddress;
  phone: string;
  website: string;
  company: Company;
}

export type EditedField = Record<User["id"], string[]>;

export interface UserModalProps {
  fields?: User;
  onSubmit?: (user: User) => void;
}

export interface ConfirmModalProps {
  title: string;
  onClick: () => void;
}

export enum ROUTES {
  user = "user",
  home = "home",
}
