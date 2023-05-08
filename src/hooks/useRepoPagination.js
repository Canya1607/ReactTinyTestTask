import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPageItems, setPageItems, selectItems } from "../features/desktop/desktopSlice";

export function useRepoPagination(input = "", maxCount = 1, per_page) {
  const [pageNumber, setPageNumber] = useState(1);

  const items = useSelector(selectItems);
  const maxPage = Math.round(items.length / per_page);

  const dispatch = useDispatch();

  const onPageNumberChange = (number) => {
    setPageNumber(number);
  };

  useEffect(() => {
    dispatch(fetchPageItems({ input, maxCount }));
  }, [dispatch, input, maxCount]);

  useEffect(() => {
    const newPageItems = items.slice(per_page * (pageNumber - 1), per_page * (pageNumber - 1) + per_page);
    dispatch(setPageItems({ pageItems: newPageItems }));
  }, [dispatch, items, pageNumber, per_page]);

  return { maxPage, pageNumber, onPageNumberChange };
}
