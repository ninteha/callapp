export type User = {
  id: number;
  name: string;
  email: string;
  gender: string;
  address: { city: string; street: string };
  phone: string;
};

export type ChartPieProps = {
  data: User[];
};
