import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";
import styled from "styled-components";

const Footer = styled.footer`
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: space-between;
  padding: 1.2rem;

  border: 1px solid var(--color-grey-200);
  border-top: none;
  border-radius: 0 0 7px 7px;

  &:not(:has(*)) {
    display: none;
  }
`;

const StyledButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color--grey--0);
  gap: 1rem;

  & span {
    display: flex;
    cursor: pointer;
    font-size: 1.8rem;
    gap: 0.5rem;
  }
`;

const ButtonNextPrevious = styled.button`
  background: none;
  border: none;
  outline: none;
  color: var(--color--grey--0);
  font-size: 3rem;
  cursor: pointer;

  &:disabled {
    color: var(--color-grey-300);
    cursor: not-allowed;
  }
`;

function TableFooter({
  totalPages,
  setCurrentPage,
  currentPage,
  numberPage,
  currentItems,
}) {
  //   console.log(numberPage); // در کل چند تا داده در هر صفحه باشد
  //   console.log(totalPages); //در مجموع چند صفحه وجود دارد
  //   console.log(currentItems?.length); //طول کل داده ها
  //   console.log(currentPage); //صفحه جتری

  //   console.log(numberPage > currentItems?.length ? "no" : "show");

  // مدیریت تغییر صفحه
  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <Footer>
      {totalPages <= 1 && numberPage > currentItems?.length ? (
        console.log("no")
      ) : (
        <>
          <p>
            Page {currentPage} of {totalPages}
          </p>
          {/* // دکمه‌های شماره صفحه */}
          <StyledButton>
            {/* دکمه قبلی */}
            <ButtonNextPrevious
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1} // غیر فعال کردن دکمه اگر صفحه اول باشد
            >
              <RiArrowDropLeftLine />
            </ButtonNextPrevious>

            {/* نمایش دکمه‌های شماره صفحه */}
            {Array.from({ length: totalPages }, (_, index) => (
              <span
                key={index}
                onClick={() => handlePageChange(index + 1)}
                style={{
                  color:
                    currentPage === index + 1
                      ? "var(--color-brand-200)"
                      : "var(--color--grey--0)",
                  fontWeight: currentPage === index + 1 ? 900 : 200,
                }}
              >
                {index + 1}
              </span>
            ))}

            {/* دکمه بعدی */}
            <ButtonNextPrevious
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages} // غیر فعال کردن دکمه اگر صفحه آخر باشد
            >
              <RiArrowDropRightLine />
            </ButtonNextPrevious>
          </StyledButton>
        </>
      )}
    </Footer>
  );
}

export default TableFooter;
