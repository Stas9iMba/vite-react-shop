import React from "react";

function Card({ name, price, imgProduct, addProduct }) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);

  function handleAddedProduct() {
    addProduct({ name, price, imgProduct });
    setIsAdded((isActive) => !isActive);
  }

  function handleFavoriteProduct() {
    setIsFavorite((isFavorite) => !isFavorite);
  }

  return (
    <li className="main__product">
      <div className="main__img">
        <img
          className="main__img-heard"
          onClick={handleFavoriteProduct}
          src={
            isFavorite
              ? "/assets/images/icons/button-heart--active.svg"
              : "/assets/images/icons/button-heart.svg"
          }
          alt="btnHeard"
        />

        <img src={imgProduct} alt="product" />
      </div>
      <div className="main__name">
        <span>{name}</span>
      </div>
      <div className="main__box">
        <div className="main__price">
          <span>Цена: </span>
          <span>{price} руб.</span>
        </div>
        <img
          className="main__button"
          onClick={handleAddedProduct}
          src={
            isAdded
              ? "/assets/images/icons/button-add--active.svg"
              : "/assets/images/icons/button-add.svg"
          }
          alt="Plus"
        />
      </div>
    </li>
  );
}

export default Card;
