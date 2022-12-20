import React from "react";

function Card({ name, price, imgProduct, addProduct, onClickFavorite }) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);

  function handleAddedProduct() {
    addProduct({ name, price, imgProduct });
    setIsAdded((isActive) => !isActive);
  }

  function handleFavoriteProduct() {
    onClickFavorite({ name, price, imgProduct });
    setIsFavorite((isFavorite) => !isFavorite);
  }

  return (
    <li className="card__product">
      <div className="card__img">
        <img
          className="card__img-heard"
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
      <div className="card__name">
        <span>{name}</span>
      </div>
      <div className="card__box">
        <div className="card__price">
          <span>Цена: </span>
          <span>{price} руб.</span>
        </div>
        <img
          className="card__button"
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
