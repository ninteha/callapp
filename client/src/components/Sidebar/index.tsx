import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import styles from "./index.module.scss";
import Logo from "@assets/header-logo.png";
import SidebarViewModel from "./viewModel";
import { memo } from "react";

const Sidebar = () => {
  const { collapsed, setCollapsed, items, navigate, activeKey } =
    SidebarViewModel();

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      theme="light"
    >
      <div className={styles.logo}>
        <img src={Logo} alt="" />
      </div>
      <Menu
        onClick={(nav) => navigate(nav.key)}
        mode="inline"
        items={items}
        selectedKeys={[activeKey]}
      />
    </Sider>
  );
};

export default memo(Sidebar);
