import React, { memo } from "react";
import { Pie } from "@ant-design/plots";
import { ChartPieProps } from "./index.types";
import ChartPieViewModel from "./viewModel";
import styles from "./index.module.scss";

const UsersChart: React.FC<ChartPieProps> = () => {
  const { config } = ChartPieViewModel();

  return (
    <div className={styles.wrapper}>
      <p>Charts</p>
      <Pie {...config} />
    </div>
  );
};

export default memo(UsersChart);
