import React from "react";

function Card({ name, price, imgProduct, addProductButton }) {
  return (
    <li className="main__product">
      <div className="main__img">
        <div className="main__img-heard">
          <img src="/assets/images/icons/button-heart.svg" alt="btnHeard" />
        </div>
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
        <button className="main__button" onClick={addProductButton}>
          <img src="/assets/images/icons/button-add.svg" alt="Plus" />
        </button>
      </div>
    </li>
  );
}

export default Card;
