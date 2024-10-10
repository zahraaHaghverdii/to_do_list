import styled from "styled-components";
import CardChartTask from "../../ui/CardChartTask";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { useTaskTodayActive } from "./useTaskTodayActive";
import Spinner from "../../ui/Spinner";

const H2 = styled.h2`
  color: var(--color-grey-600);
`;

function TaskPieChart() {
  const { taskToday, isLoading } = useTaskTodayActive();

  const dataDoing = taskToday?.filter(
    (task) => task.status === "doing"
  )?.length;
  const dataDone = taskToday?.filter((task) => task.status === "done")?.length;
  const dataAll = taskToday?.filter((task) => task.status === "all")?.length;
  const data = [
    {
      value: dataDoing,
      status: `doing (${dataDoing})`,
      color: "#7ff3a7",
    },
    {
      value: dataDone,
      status: `done (${dataDone})`,
      color: "#b8bbc0",
    },
    {
      value: dataAll,
      status: `all (${dataAll})`,
      color: "#4f46e5",
    },
  ];

  console.log(data);

  console.log(
    data[0]?.value !== 0 || data[1]?.value !== 0 || data[3]?.value !== 0
  );

  return (
    <CardChartTask gridColumn={"3 /span 1 "}>
      <H2>Today's activity</H2>

      {isLoading ? (
        <Spinner />
      ) : // {/* chart */ }
      dataDoing === 0 && dataDone === 0 && dataAll === 0 ? (
        <p>Not Task Today</p>
      ) : (
        <ResponsiveContainer width="100%" height={240}>
          <PieChart>
            <Tooltip
              contentStyle={{
                backgroundColor: ` var(--color-grey-50)`,
              }}
              itemStyle={{
                color: "var(--color-grey-700)", // تغییر رنگ متن آیتم‌ها
              }}
            />

            <Pie
              data={data}
              dataKey="value"
              nameKey="status"
              innerRadius={50} // کوچک‌تر شدن شعاع داخلی
              outerRadius={80} // کوچک‌تر شدن شعاع خارجی
              paddingAngle={4}
              cx={"50%"} // دایره را به مرکز نزدیک‌تر می‌کند
              cy={"50%"} // دایره را به وسط نمودار می‌برد
            >
              {data.map((entry) => (
                <Cell
                  key={entry.status}
                  stroke={entry.color}
                  fill={entry.color}
                />
              ))}
            </Pie>

            {/* اون نوشته ها و متن های کناری استایل داده */}
            {/* تنظیمات legend */}
            <Legend
              layout="horizontal" // نمایش افقی
              align="center" // تراز در مرکز
              verticalAlign="bottom" // قرار گرفتن در پایین نمودار
              iconSize={10} // اندازه آیکون‌ها
              iconType="circle" // نوع آیکون‌ها (دایره‌ای)
              wrapperStyle={{
                display: "flex", // استفاده از فلکس‌باکس
                justifyContent: "center", // مرکز کردن عناصر
                marginTop: "10px", // فاصله از بالا (نمودار)
                fontSize: "13px",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      )}
    </CardChartTask>
  );
}

export default TaskPieChart;
