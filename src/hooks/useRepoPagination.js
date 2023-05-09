import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPageItems } from "../features/desktop/desktopSlice";

export function useRepoPagination(input = "", perPage) {
  const [pageNumber, setPageNumber] = useState(1);

  const dispatch = useDispatch();

  const onPageNumberChange = (number) => {
    setPageNumber(number);
  };

  useEffect(() => {
    dispatch(fetchPageItems({ q: input, per_page: perPage, page: pageNumber }));
  }, [dispatch, input, pageNumber, perPage]);

  return { pageNumber, onPageNumberChange };
}
