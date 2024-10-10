import styled from "styled-components";
import { useDarkMode } from "../../context/ContextDarkModeProvider";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { format, parseISO } from "date-fns";
import { useGetDataTasks } from "../Tasks/useGetDataTasks";
import CardChartTask from "../../ui/CardChartTask";
import Spinner from "../../ui/Spinner";

const H2 = styled.h2`
  color: var(--color-grey-600);
  font-size: 1.8rem;
`;

function TaskLineChart() {
  const { isDarkMode } = useDarkMode();
  const { tasks, isLoading } = useGetDataTasks();

  // فرمت کردن تاریخ (فقط YYYY-MM-DD)
  const formatDate = (dateString) =>
    format(parseISO(dateString), "EEE, MMM dd yyyy");

  // گروه‌بندی تسک‌ها بر اساس تاریخ و وضعیت
  const tasksByDate = tasks?.reduce((acc, task) => {
    const date = formatDate(task.created_at);
    if (!acc[date]) {
      acc[date] = { done: 0, doing: 0, all: 0 }; // مقادیر اولیه برای هر تاریخ
    }
    // وضعیت تسک‌ها را اضافه کنید
    if (task.status === "done") {
      acc[date].done += 1;
    } else if (task.status === "doing") {
      acc[date].doing += 1;
    } else if (task.status === "all") {
      acc[date].all += 1;
    }
    return acc;
  }, {});

  // تبدیل داده‌های گروه‌بندی شده به آرایه مناسب برای recharts
  const chartData = Object.keys(tasksByDate || {}).map((date) => ({
    date: date, // تاریخ
    done: tasksByDate[date].done, // تعداد تسک‌های انجام شده
    doing: tasksByDate[date].doing, // تعداد تسک‌های در حال انجام
    all: tasksByDate[date].all, // تعداد کل تسک‌ها
    total:
      tasksByDate[date].all + tasksByDate[date].doing + tasksByDate[date].done,
  }));

  // تعیین رنگ‌ها بر اساس حالت تاریک یا روشن
  const colors = isDarkMode
    ? {
        tasks: { stroke: "#4f46e5", fill: "#4f46e5" },
        text: "#e5e7eb",
        background: "#18212f",
      }
    : {
        tasks: { stroke: "#4f46e5", fill: "#c7d2fe" },
        text: "#374151",
        background: "#fff",
      };

  // Custom Tooltip Component
  // ایجاد CustomTooltip: برای نمایش جزئیات بیشتری در Tooltip، از یک کامپوننت سفارشی استفاده شده که شامل تعداد تسک‌های انجام شده (done)، در حال انجام (doing) و تعداد کل تسک‌ها است.
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div
          style={{
            backgroundColor: colors.background,
            padding: "10px",
            borderRadius: "5px",
            color: colors.text,
            fontSize: "1.3rem",
          }}
        >
          <p>{`Date: ${label}`}</p>
          <p>{`Done: ${data.done}`}</p>
          <p>{`Doing: ${data.doing}`}</p>
          <p>{`Remaining: ${data.all}`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <CardChartTask gridColumn={"2 / span 2"}>
      <H2>Line chart of all tasks</H2>

      {isLoading ? (
        <Spinner />
      ) : tasks?.length > 0 ? (
        // {/* chart */ }
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart data={chartData} width={"100%"}>
            <CartesianGrid strokeDasharray={1} />
            {/* نمودار افقی (-) (تاریخ‌ها) */}
            <XAxis
              dataKey={"date"}
              tick={{ fill: colors.text }}
              tickLine={{ stroke: colors.text }}
            />
            {/* نمودار عمودی (|) (تعداد کل تسک‌ها) */}
            <YAxis
              tick={{ fill: colors.text }}
              tickLine={{ stroke: colors.text }}
            />
            <Tooltip content={<CustomTooltip />} />

            <Area
              type="monotone"
              dataKey="total"
              stroke={colors.tasks.stroke}
              fill={colors.tasks.fill}
              strokeWidth={1}
              name="All Tasks"
            />
          </AreaChart>
        </ResponsiveContainer>
      ) : (
        <p>Not Task</p>
      )}
    </CardChartTask>
  );
}

export default TaskLineChart;
