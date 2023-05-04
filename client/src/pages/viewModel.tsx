import useUsersStore from "../hooks/useUsersStore";

const MainViewModel = () => {
  const getAllUsers = useUsersStore((state) => state.getAllUsers);
  const deleteUser = useUsersStore((state) => state.deleteUser);
  const users = useUsersStore((state) => state.users);

  return { users, getAllUsers, deleteUser };
};

export default MainViewModel;
