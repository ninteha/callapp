import { useEffect } from "react";
import MainLayout from "../../layouts/MainLayout";
import UsersChart from "../../components/UsersChart";
import MainViewModel from "../viewModel";
import styles from "./index.module.scss";

const Chart = () => {
  const { getAllUsers, users } = MainViewModel();

  useEffect(() => {
    getAllUsers();
  }, [getAllUsers]);

  return (
    <MainLayout>
      <div className={styles.wrapper}>
        <UsersChart data={users} />
      </div>
    </MainLayout>
  );
};

export default Chart;
