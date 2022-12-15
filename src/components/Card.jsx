import React from "react";

import btnAdd from "../assets/images/icons/button-add.svg";
import btnHeard from "../assets/images/icons/button-heart.svg";
import product from "../assets/images/product/product-1.jpg";

function Card() {
  return (
    <li className="main__product">
      <div className="main__img">
        <div className="main__img-heard">
          <img src={btnHeard} alt="btnHeard" />
        </div>
        <img src={product} alt="product" />
      </div>
      <div className="main__name">
        <span>Мужские Кроссовки</span>
        <span>Nike Brazer Mid Suede</span>
      </div>
      <div className="main__box">
        <div className="main__price">
          <span>Цена: </span>
          <span>12 999 руб.</span>
        </div>
        <button className="main__button">
          <img src={btnAdd} alt="" />
        </button>
      </div>
    </li>
  );
}

export default Card;
