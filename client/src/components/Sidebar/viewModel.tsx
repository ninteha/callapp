import React, { useCallback, useMemo, useState } from "react";
import { MenuItem } from "./index.types";
import { DesktopOutlined, PieChartFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const SidebarViewModel = () => {
  const [collapsed, setCollapsed] = useState(false);

  const getItem = useCallback(
    (
      label: React.ReactNode,
      key: React.Key,
      icon?: React.ReactNode,
      children?: MenuItem[]
    ) => ({
      key,
      icon,
      children,
      label,
    }), [])


  const items: MenuItem[] = useMemo(() => [
    getItem("Users Table", "/table", <DesktopOutlined />),
    getItem("Users Chart", "/chart", <PieChartFilled />),
  ], []);

  const activeKey = location.pathname;
  const navigate = useNavigate();

  return { collapsed, setCollapsed, items, navigate, activeKey };
};

export default SidebarViewModel;
