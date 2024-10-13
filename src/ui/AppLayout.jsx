import { Outlet, useLocation } from "react-router";
import styled, { ThemeProvider } from "styled-components";
import { createTheme } from "../hooks/createTheme";
import Header from "./Header";
import Sidebar from "./Sidebar";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main";
  grid-template-columns: 170px 1fr; /* main 1 واحد و sidebar عرض ثابت */
  grid-template-rows: auto 1fr; /* header خودکار و بخش‌های پایین قابل تنظیم */
  height: 100vh; /* پر کردن کل صفحه */

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: flex;
    flex-direction: column;
  }
`;

const Main = styled.div`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  overflow-y: auto;
  grid-area: main;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 1rem 0;
    height: 82vh;
    overflow-x: hidden;
  }
`;

const Coantainer = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  /* gap: 3.2rem; */

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 1rem 2.4rem;
    max-width: 100%;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mini_mobile}) {
    padding: 1rem;
  }
`;

const P = styled.p`
  color: var(--color-grey-400);
  text-transform: capitalize;
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

function AppLayout() {
  const location = useLocation();
  let path = location.pathname;
  path = path.replace(/^\//, "").replace(/\/$/, "").replace(/-/g, " ");

  return (
    <ThemeProvider theme={createTheme}>
      <StyledAppLayout>
        <Header />
        <Main>
          <Coantainer>
            <P>{path ? path : "Dashboard"}</P>
            <Outlet />
          </Coantainer>
        </Main>
        <Sidebar />
      </StyledAppLayout>
    </ThemeProvider>
  );
}

export default AppLayout;
