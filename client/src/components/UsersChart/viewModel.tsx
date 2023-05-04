import { useMemo } from "react";
import useUsersStore from "../../hooks/useUsersStore";

const ChartPieViewModel = () => {
  const users = useUsersStore((state) => state.users);

  const data = useMemo(() => {
    const countCity = users.reduce((acc, user) => {
      const { city } = user.address;
      if (acc[city]) {
        acc[city] += 1;
      }
      else {
        acc[city] = 1;
      }

      return acc;
    }, {} as Record<string, number>)

    const data = Object.entries(countCity).map(([city, count]) => ({
      type: city,
      value: count,
    }));

    return data;
  }, [users]);

  const config = {
    data,
    angleField: "value",
    colorField: "type",
    radius: 0.8,
    label: {
      type: "outer",
      content: "{name} {percentage}",
    },
    interactions: [
      {
        type: "pie-legend-active",
      },
      {
        type: "element-active",
      },
    ],
  };
  return { config };
};

export default ChartPieViewModel;
