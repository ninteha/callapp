export interface TableComponentProps {
  data: User[];
}

export interface User {
  id: number;
  name: string;
  email: string;
  gender: string;
  address: { city: string; street: string };
  phone: string;
}
