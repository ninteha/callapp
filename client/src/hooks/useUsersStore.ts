import { create } from "zustand";
import axios from "axios";

interface User {
  id: number;
  name: string;
  email: string;
  gender: string;
  address: { city: string; street: string };
  phone: string;
}

interface UsersStore {
  users: User[];
  getAllUsers: () => Promise<void>;
  getUserById: (id: number) => Promise<User | undefined>;
  editUser: (id: number, user: User) => Promise<void>;
  createUser: (user: User) => Promise<void>;
  deleteUser: (id: number) => Promise<void>;
}

const useUsersStore = create<UsersStore>((set) => ({
  users: [],
  getAllUsers: async () => {
    const response = await axios.get<User[]>("http://localhost:5001/users");
    set({ users: response.data });
  },
  getUserById: async (id) => {
    const response = await axios.get<User>(`http://localhost:5001/users/${id}`);
    return response.data;
  },
  editUser: async (id, user) => {
    await axios.put(`http://localhost:5001/users/${id}`, user);
    set((state) => ({
      users: state.users.map((u) => (u.id === id ? user : u)),
    }));
  },
  createUser: async (user) => {
    await axios.post("http://localhost:5001/users", user);
    set((state) => ({ users: [...state.users, user] }));
  },
  deleteUser: async (id) => {
    await axios.delete(`http://localhost:5001/users/${id}`);
    set((state) => ({
      users: state.users.filter((u) => u.id !== id),
    }));
  },
}));

export default useUsersStore;
