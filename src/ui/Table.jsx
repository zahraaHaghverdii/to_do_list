import styled from "styled-components";
import { createContext, useContext } from "react";

const StyledTable = styled.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px 7px 0 0;
  border-bottom: none;
  overflow: auto;
  position: relative;

  scrollbar-width: none; /* برای مرورگرهای فایرفاکس */

  /* مخفی کردن اسکرول بار برای مرورگرهای Webkit مثل کروم و سافاری */
  ::-webkit-scrollbar {
    display: none;
  }
`;

const CommonRow = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  column-gap: 2.4rem;
  align-items: center;
  transition: none;
`;

const StyledHeader = styled(CommonRow)`
  padding: 1.6rem 2.4rem;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
`;

const StyledRow = styled(CommonRow)`
  padding: 1.2rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Footer = styled.footer`
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem;
  width: inherit;
  overflow-x: hidden;

  &:not(:has(*)) {
    display: none;
  }
`;

const StyledBody = styled.section`
  margin: 0.4rem 0;
`;

const Empty = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  margin: 2.4rem;
`;

//1.
const tableContext = createContext();

//2.
function Table({ children, columns }) {
  return (
    <tableContext.Provider value={{ columns }}>
      <StyledTable role="table">{children}</StyledTable>
    </tableContext.Provider>
  );
}

function HeaderTable({ children }) {
  const { columns } = useContext(tableContext);
  return (
    <StyledHeader columns={columns} role="row">
      {children}
    </StyledHeader>
  );
}

function RowTable({ children }) {
  const { columns } = useContext(tableContext);
  return (
    <StyledRow columns={columns} role="row">
      {children}
    </StyledRow>
  );
}

//Body
function Body({ data, render }) {
  if (data?.length === 0) return <Empty>not data cabin</Empty>;
  return <StyledBody>{data?.map(render)}</StyledBody>;
}

//3.
Table.HeaderTable = HeaderTable;
Table.Body = Body;
Table.RowTable = RowTable;
Table.Footer = Footer;
Table.Empty = Empty;
export default Table;
