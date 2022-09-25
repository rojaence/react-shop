import React, { useContext, useEffect } from "react";
import Button from "@components/Button";
import "@styles/productCard.scss";

import ProductContext from "@context/products/ProductContext";

import ImageCarrousel from "@components/ImageCarrousel";
import { useImageCarrousel } from "@hooks/useImageCarrousel";

const ProductCard = ({ data = {}, dense = false, addedToCart = false }) => {
  const { addToCart, products } = useContext(ProductContext);
  const imageSlider = useImageCarrousel([]);

  useEffect(() => {
    let slides;
    if (data.images) {
      slides = data.images.map((img, index) => {
        return { image: img, id: `prod${data.id}-img${index}`, index };
      });
    } else slides = [];
    imageSlider.setSlides(slides);
  }, [data]);

  const handleCartBtnClick = (e) => {
    e.stopPropagation();
    try {
      addToCart(data);
    } catch (error) {
      console.log(error);
    }
  };

  // const handleContainerClick = (e) => e.stopPropagation();

  return (
    <article
      className={`product-card${
        dense ? " product-card--dense" : " product-card--expanded"
      }`}
    >
      <header className="product-card__header">
        <div className="product-card__figure">
          {!dense ? (
            <ImageCarrousel
              slides={imageSlider.slides}
              setCurrent={imageSlider.setCurrent}
              current={imageSlider.current}
              setPrevious={imageSlider.setPrevious}
              setNext={imageSlider.setNext}
              autoHideArrowControl
            />
          ) : (
            <img
              className="product-card__image"
              src={data.images ? data.images[0] : ""}
              alt="Product image"
            />
          )}
          {/* <figcaption className="product-card__cart-message">
            {addedToCart ? "Added to cart" : "Removed to cart"}
          </figcaption> */}
        </div>
      </header>
      <div className="product-card__body">
        <span className="product-card__cost">$ {data.price}</span>
        <h2 className="product-card__name">{data.title}</h2>
        {!dense ? (
          <p className="product-card__description">{data.description}</p>
        ) : null}
        {dense ? (
          <Button
            icon="add-to-cart"
            fab
            color={addedToCart ? "" : "primary"}
            customClass="product-card__add-action-float elevation-1"
            onClick={handleCartBtnClick}
          />
        ) : null}
      </div>
      <footer className="product-card__footer" style={{ display: "block" }}>
        {!dense ? (
          <Button
            icon="shooping-cart"
            color="primary"
            text="Add to cart"
            block
            customClass="product-card__add-action-block"
            onClick={handleCartBtnClick}
          />
        ) : null}
      </footer>
    </article>
  );
};

export default ProductCard;
