import { useState } from "react";
import styles from "./Desktop.module.css";
import { Input } from "../../components/Input/Input";
import { Pagination } from "../../components/Pagination/Pagination";
import { useRepoPagination } from "../../hooks/useRepoPagination";
import { Cards } from "./components/Cards";
import { useSelector } from "react-redux";
import { selectPageItems } from "./desktopSlice";
import { CONST_MAX_REPOS, CONST_PER_PAGE } from "../../constants";

const Desktop = () => {
  const [inputValue, setInputValue] = useState("");

  const pageItems = useSelector(selectPageItems);

  const { pageNumber, onPageNumberChange } = useRepoPagination(inputValue || "react", CONST_PER_PAGE);

  const onSetInputValue = (value) => {
    setInputValue(value, onPageNumberChange(1));
  }

  return (
    <div className={styles.DesktopContainer}>
      <div className={styles.DesktopContainerInput}>
        <Input value={inputValue} onChange={onSetInputValue} />
      </div>
      <Cards items={pageItems} />
      <Pagination
        pageNumber={pageNumber}
        maxPage={Math.round(CONST_MAX_REPOS / CONST_PER_PAGE)}
        onPageNumberChange={onPageNumberChange}
      />
    </div>
  );
};

export default Desktop;
