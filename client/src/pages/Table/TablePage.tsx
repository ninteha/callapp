import { useEffect } from "react";
import MainLayout from "../../layouts/MainLayout";
import MainViewModel from "../viewModel";
import TableComponent from "../../components/Table";
import styles from "./index.module.scss";

const Table = () => {
  const { getAllUsers, users, deleteUser } = MainViewModel();

  useEffect(() => {
    getAllUsers();
  }, [getAllUsers, deleteUser]);

  return (
    <MainLayout>
      <div className={styles.wrapper}>
        <TableComponent data={users} />
      </div>
    </MainLayout>
  );
};

export default Table;
