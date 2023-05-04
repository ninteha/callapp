import { Spin } from "antd";
import styles from "./PageLoader.module.scss";
import { memo } from "react";

export const PageLoader = memo(() => {
  return (
    <div className={styles.pageLoader}>
      <Spin size="large" />
    </div>
  );
});
