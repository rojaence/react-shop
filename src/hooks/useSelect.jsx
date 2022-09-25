import React, { useState, useEffect } from 'react';

export const useSelect = (initialItems = [], initialSelected = {}) => {
  const [items, setItems] = useState(initialItems);
  const [selected, setSelected] = useState(initialSelected);

  useEffect(() => {
    if (initialItems.length > 0) {
      if (initialSelected) setSelected(initialSelected)
      else setSelected(initialItems[0])
    }
  }, []);

  const handleOnChange = (param) => setSelected(param)

  return { items, selected, handleOnChange, setItems }
}