import React from "react";
import Select from "@components/Select";
import Input from "@components/Input";
import Button from "@components/Button";
import styles from "@styles/containers.module.scss";

import { useSelect } from "@hooks/useSelect";

const ProductFilters = () => {
  const orderFiltersList = [
    { text: "Most recent", value: "mostRecent" },
    { text: "Higher cost", value: "higherCost" },
    { text: "Lower cost", value: "lowerCost" },
  ];

  /* IMPORTANT: Cambios de estado en useSelect
  Tomar en cuenta que si no se utiliza una copia del array base 
  el array en el componente actual 'orderFiltersList' también se modifica
  al cambiar los elementos en el hook de useSelect
  */
  const orderFilterSelect = useSelect(orderFiltersList.slice(), {
    ...orderFiltersList[0],
  });

  /* const addOrderFilter = () => {
    let newItem = { text: `Item ${orderFilterSelect.items.length + 1}`, value: `item ${orderFilterSelect.items.length + 1}` };
    let items = orderFilterSelect.items;
    items.push(newItem);
    orderFilterSelect.setItems(items);
  }

  const resetOrderFilterItems = () => {
    console.log(orderFiltersList)
    orderFilterSelect.setItems(orderFiltersList);
  } */

  // TEST: Este es solo un useSelect de prueba
  /* const typeFiltersList = [
    { text: "All", value: "all" },
    { text: "Clothes", value: "clothes" },
    { text: "Electronics", value: "electronics" },
    { text: "Furnitures", value: "furnitures" },
    { text: "Toys", value: "toys" },
  ];
  const typeFilterSelect = useSelect(typeFiltersList, {
    ...typeFiltersList[0],
  }); */

  return (
    <div className={styles["filters-wrapper"]}>
      <div className={styles["product-filters"]}>
        <Input
          hint="Search product"
          icon="search"
          iconSize={24}
          customClass="elevation-1"
        />
        <Select
          label="order"
          items={orderFilterSelect.items}
          onChange={orderFilterSelect.handleOnChange}
          selected={orderFilterSelect.selected}
        />
        {/* <Select
          label="type"
          items={typeFilterSelect.items}
          onChange={typeFilterSelect.handleOnChange}
          selected={typeFilterSelect.selected}
        /> */}
      </div>
    </div>
  );
};

export default ProductFilters;
