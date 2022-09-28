import React from "react";
import styles from "@styles/containers.module.scss";

const ProductFilters = ({ children, totalItems = 0, shown = 0 }) => {

  return (
    <div className={styles["filters-wrapper"]}>
      <div className={styles["product-filters"]}>
        {children}
        <p className={styles["product-filters__total"]}>
          <span className={styles["product-filters__total--numbers"]}>
          {`${shown} - ${totalItems}`}
          </span>
          Productos
        </p>
      </div>
    </div>
  );
};

export default ProductFilters;
