import styles from "./Pagination.module.css";

export const Pagination = ({ maxPage, pageNumber, onPageNumberChange }) => {
  const onPreviousClick = () => {
    if (pageNumber > 1) onPageNumberChange(pageNumber - 1);
  };

  const onNextClick = () => {
    if (pageNumber < maxPage) onPageNumberChange(pageNumber + 1);
  };

  return (
    <div className={styles.Pagination}>
      <p className={styles.PaginationNav} onClick={onPreviousClick}>
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
      <p className={styles.PaginationNav} onClick={onNextClick}>
        Next
      </p>
    </div>
  );
};
