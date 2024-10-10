import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import { useGetDataTasks } from "../Tasks/useGetDataTasks";
import TaskRow from "./TaskRow";
import TableFooter from "../../ui/TableFooter";
import { useEffect, useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";

const StyledTableTask = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.max_tablet}) {
    width: 750px;
    overflow-x: auto;
  }
`;

function TaskTable() {
  const { tasks, isLoading } = useGetDataTasks();
  const [tasksFilter, setTasksFilter] = useState([]);
  const [searchParams] = useSearchParams();

  // Sort status
  const sortBy = searchParams.get("sortBy") || "";
  const validStatuses = ["doing", "done", "all"];

  // استفاده از useMemo برای فیلتر کردن داده‌ها بدون ایجاد رندرهای بی‌مورد
  const filteredTasks = useMemo(() => {
    if (!tasks) return [];
    if (validStatuses.includes(sortBy)) {
      return tasks.filter((task) => task.status === sortBy);
    }
    return tasks; // نمایش همه تسک‌ها در صورت عدم وجود فیلتر
  }, [tasks, sortBy]);

  useEffect(() => {
    setTasksFilter(filteredTasks);
  }, [filteredTasks]);

  // Page number
  const numberPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = numberPage;
  const totalPages = useMemo(
    () => Math.ceil(tasksFilter.length / itemsPerPage),
    [tasksFilter, itemsPerPage]
  );

  // داده‌های فیلتر شده برای صفحه فعلی
  const currentItems = useMemo(
    () =>
      tasksFilter.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
      ),
    [tasksFilter, currentPage, itemsPerPage]
  );

  return (
    <>
      <Table columns="1fr 1fr 1fr 1fr .1fr ">
        <StyledTableTask>
          <Table.HeaderTable>
            <div>title</div>
            <div>description</div>
            <div>status</div>
            <div>date</div>
            <div></div>
          </Table.HeaderTable>

          {isLoading && <Spinner />}
          <Table.Body
            data={currentItems}
            render={(task, index) => (
              <TaskRow key={task.id} task={task} index={index} />
            )}
          />
        </StyledTableTask>
      </Table>

      <TableFooter
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </>
  );
}

export default TaskTable;
