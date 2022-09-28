import React, { useState } from 'react';
import { useSelect } from "@hooks/useSelect";

export const useProductFilters = (initialNameParam = '', initialOrderParam = '') => {
  const [nameParam, setNameParam] = useState(initialNameParam);
  const [orderParam, setoOrderParam] = useState(initialNameParam);

  const orderFiltersList = [
    { text: "Most recent", value: "mostRecent" },
    { text: "Higher cost", value: "higherCost" },
    { text: "Lower cost", value: "lowerCost" },
  ];

  const orderFilterSelect = useSelect(orderFiltersList.slice(), {
    ...orderFiltersList[0],
  });


  return {nameParam, setNameParam, orderParam, setOrderParam}
}