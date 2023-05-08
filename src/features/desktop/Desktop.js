import { useRef, useState } from "react";
import styles from "./Desktop.module.css";
import { Input } from "../../components/Input/Input";
import { Pagination } from "../../components/Pagination/Pagination";
import { useRepoPagination } from "../../hooks/useRepoPagination";
import { Cards } from "./components/Cards";
import { useSelector } from "react-redux";
import { selectPageItems } from "./desktopSlice";

const Desktop = () => {
  const maxRepoCount = useRef(20);

  const [inputValue, setInputValue] = useState("");

  const pageItems = useSelector(selectPageItems);

  const { maxPage, pageNumber, onPageNumberChange } = useRepoPagination(inputValue || "react", maxRepoCount.current, 3);

  return (
    <div className={styles.DesktopContainer}>
      <div className={styles.DesktopContainerInput}>
        <Input value={inputValue} onChange={setInputValue} />
      </div>
      <Cards items={pageItems} />
      <Pagination pageNumber={pageNumber} maxPage={maxPage} onPageNumberChange={onPageNumberChange} />
    </div>
  );
};

export default Desktop;
