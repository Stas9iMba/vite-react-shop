import React from "react";

import Skeleton from "./Skeleton";
import AppContext from "../context";

function Card({
  id,
  name,
  price,
  imgProduct,
  addProduct,
  onClickFavorite,
  isFavorites = false,
  isLoading = false,
}) {
  const { getAddedItems } = React.useContext(AppContext);
  const [isFavorite, setIsFavorite] = React.useState(isFavorites);
  const obj = { id, parentId: id, name, imgProduct, price };

  function handleAddedProduct() {
    addProduct(obj);
  }

  function handleFavoriteProduct() {
    onClickFavorite(obj);
    setIsFavorite((isFavorite) => !isFavorite);
  }

  return (
    <li className="card__product">
      {isLoading ? (
        <Skeleton />
      ) : (
        <>
          <div className="card__img">
            {onClickFavorite && (
              <img
                className="card__img-heard"
                onClick={handleFavoriteProduct}
                src={
                  isFavorite
                    ? "assets/images/icons/button-heart--active.svg"
                    : "assets/images/icons/button-heart.svg"
                }
                alt="btnHeard"
              />
            )}

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
            {addProduct && (
              <img
                className="card__button"
                onClick={handleAddedProduct}
                src={
                  getAddedItems(id)
                    ? "assets/images/icons/button-add--active.svg"
                    : "assets/images/icons/button-add.svg"
                }
                alt="Plus"
              />
            )}
          </div>
        </>
      )}
    </li>
  );
}

export default Card;
