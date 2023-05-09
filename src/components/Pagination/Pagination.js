import styles from "./Pagination.module.css";

export const Pagination = ({ pageNumber, maxPage, onPageNumberChange }) => {
  let prevClassName = styles.PaginationNav;
  let nextClassName = styles.PaginationNav;
  if (pageNumber === 1) prevClassName = prevClassName + " " + styles.PaginationNavInActive;
  if (pageNumber === maxPage) nextClassName = nextClassName + " " + styles.PaginationNavInActive;

  const onPreviousClick = () => {
    if (pageNumber > 1) onPageNumberChange(pageNumber - 1);
  };

  const onNextClick = () => {
    if (pageNumber < maxPage) onPageNumberChange(pageNumber + 1);
  };

  return (
    <div className={styles.Pagination}>
      <p className={prevClassName} onClick={onPreviousClick}>
        Previous
      </p>
      <div className={styles.PaginationPages}>
        {Array(maxPage)
          .fill(0)
          .map((_, index) => {
            const page = index + 1;
            let className = styles.PaginationPagesNumber;
            if (page === pageNumber) className = className + " " + styles.PaginationPagesNumberActive;
            return (
              <p key={`page-${index + 1}`} className={className} onClick={() => onPageNumberChange(page)}>
                {page}
              </p>
            );
          })}
      </div>
      <p className={nextClassName} onClick={onNextClick}>
        Next
      </p>
    </div>
  );
};
