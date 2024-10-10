import styled from "styled-components";
import CardChartTask from "../../ui/CardChartTask";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useGetDataTasks } from "../Tasks/useGetDataTasks";
import Spinner from "../../ui/Spinner";
import { format, parseISO } from "date-fns";
import { useDarkMode } from "../../context/ContextDarkModeProvider";

const H2 = styled.h2`
  color: var(--color-grey-600);
  font-size: 1.8rem;
`;

function TaskBarChart() {
  const { tasks, isLoading } = useGetDataTasks();
  const { isDarkMode } = useDarkMode();

  // data
  const data = tasks?.reduce((acc, task) => {
    const date = format(parseISO(task.created_at), "EEE, MMM dd yyyy");
    if (!acc[date]) {
      acc[date] = { done: 0.1 }; // مقادیر اولیه برای هر تاریخ
    } else if (task.status === "done") {
      acc[date].done += 1;
      acc[date].done = Math.round(acc[date].done);
    }

    return acc;
  }, {});

  // تبدیل داده‌های گروه‌بندی شده به آرایه مناسب برای recharts
  const chartData = Object.keys(data || {}).map((date) => ({
    date: date, // تاریخ
    done: data[date].done, // تعداد تسک‌های انجام شده
  }));

  // تعیین رنگ‌ها بر اساس حالت تاریک یا روشن
  const colors = isDarkMode
    ? {
        tasks: { stroke: "#4f46e5", fill: "#4f46e5" },
        text: "#e5e7eb",
        background: "#fff",
      }
    : {
        tasks: { stroke: "#4f46e5", fill: "#c7d2fe" },
        text: "#374151",
        background: "#18212f",
      };

  return (
    <CardChartTask gridColumn={"1 / span 2 "}>
      <H2>Tasks done on each date</H2>
      {/* <H2>Bar chart of all tasks</H2> */}

      {isLoading ? (
        <Spinner />
      ) : tasks?.length > 0 ? (
        // {/* chart */ }
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="2 2" />
            <XAxis
              dataKey="date"
              tick={{ fill: colors.text }}
              tickLine={{ stroke: colors.text }}
            />
            <YAxis
              tick={{ fill: colors.text }}
              tickLine={{ stroke: colors.text }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: ` var(--color-grey-50)`,
              }}
              itemStyle={{
                color: "var(--color-grey-700)", // تغییر رنگ متن آیتم‌ها
              }}
            />
            <Legend />
            <Bar dataKey="done" barSize={20} fill={colors.tasks.stroke} />
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <p>Not Task</p>
      )}
    </CardChartTask>
  );
}

export default TaskBarChart;
