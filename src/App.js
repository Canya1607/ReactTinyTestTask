import { useState } from "react";
import { Input } from "./components/Input/Input";
import { Card } from "./components/Card/Card";
import { Pagination } from "./components/Pagination/Pagination";
import styles from "./App.module.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  const onPageNumberChange = (number) => {
    setPageNumber(number);
  };

  return (
    <div className={styles.App}>
      <div className={styles.AppContainer}>
        <div className={styles.AppContainerInput}>
          <Input value={inputValue} onChange={setInputValue} />
        </div>
        <div className={styles.AppContainerCards}>
          {Array(3)
            .fill(0)
            .map((_, index) => {
              return <Card key={`card-${index}`} />;
            })}
        </div>
        <Pagination pageNumber={pageNumber} maxPage={8} onPageNumberChange={onPageNumberChange} />
      </div>
    </div>
  );
}

export default App;
