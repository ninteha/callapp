export interface EditUserModalProps {
  open: boolean;
  onCancel: () => void;
  user: User | undefined;
  success: () => void;
}

export interface EditUserModalViewModelProps {
  onCancel: () => void;
  user: User | undefined;
  success: () => void;
}

export interface User {
  id: number;
  name: string;
  email: string;
  gender: string;
  address: {
    city: string;
    street: string;
  };
  phone: string;
}
