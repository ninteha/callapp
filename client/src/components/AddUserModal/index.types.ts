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

export interface AddUserModalProps {
  open: boolean;
  onCancel: () => void;
  success: () => void;
}

export interface AddUserViewModelProps {
  onCancel: () => void;
  success: () => void;
}
