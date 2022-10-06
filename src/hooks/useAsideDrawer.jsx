import React, { useState, useEffect } from "react";

export const useAsideDrawer = (initialShowValue = false) => {
  const [isOpen, setIsOpen] = useState(initialShowValue);

  useEffect(() => {
    if (isOpen) document.documentElement.classList.add('scrollbar-none');
    else document.documentElement.classList.remove('scrollbar-none');
  }, [isOpen]);

  const hideDrawer = () => setIsOpen(false);
  const showDrawer = () => setIsOpen(true);
  const toggleDrawer = () => setIsOpen((value) => !value);

  return { isOpen, hideDrawer, showDrawer, toggleDrawer };
};
