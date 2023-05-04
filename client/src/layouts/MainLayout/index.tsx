import { Layout } from "antd";
import Sidebar from "../../components/Sidebar";
import { MainLayoutProps } from "./index.types";
import { Content } from "antd/es/layout/layout";
import styles from "./index.module.scss";

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      <Layout className={styles.layout} hasSider={true}>
        <Sidebar />
        <Layout>
          <Content className={styles.content}>{children}</Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default MainLayout;
