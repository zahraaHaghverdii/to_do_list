import GlobalStyled from "./styled/GlobalStyled";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Dashboard from "./pages/Dashboard";
// import AdminManagement from "./pages/AdminManagement";
import TaskManagement from "./pages/TaskManagement";
import TableTasks from "./pages/TableTasks";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import { Toaster } from "react-hot-toast";
import { DarkModeProvider } from "./context/ContextDarkModeProvider";
import TaskDetails from "./feutchers/Tasks/TaskDetails";

function App() {
  const queryclient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  });

  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryclient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <GlobalStyled />
        <BrowserRouter>
          <Routes>
            <Route path="/to_do_list/" element={<AppLayout />}>
              <Route path="/to_do_list/" element={<Dashboard />} />
              <Route
                path="/to_do_list/task-management"
                element={<TaskManagement />}
              />
              <Route
                path="/to_do_list/task-management/:id"
                element={<TaskDetails />}
              />
              <Route path="/to_do_list/tasks" element={<TableTasks />} />
              <Route path="/setting" element={<Settings />} />
            </Route>

            <Route path="/to_do_list/login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>

        {/* toaster (model) */}
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: { duration: 3000 },
            error: { duration: 4500 },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "15px 24px",
              background: "var( --color-grey-0)",
              color: "var( --color-grey-70)",
            },
          }}
        />
      </QueryClientProvider>
    </DarkModeProvider>
  );
}

export default App;
