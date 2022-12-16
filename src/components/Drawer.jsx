import React from "react";

function Drawer({ onClickClose }) {
  return (
    <section className="side-basket">
      <div className="side-basket__box">
        <div className="side-basket__top">
          <h2 className="side-basket__title">Корзина</h2>
          <img
            className="card__btn-img"
            width={32}
            height={32}
            src="/assets/images/icons/button-remove.svg"
            alt="Close"
            onClick={onClickClose}
          />
        </div>
        <ul className="side-basket__items" role="list">
          <li className="side-basket__item">
            <img
              width={70}
              height={60}
              src="/assets/images/product-1.jpg"
              alt="product"
            />
            <div className="card__info">
              <h5 className="card__name">
                Мужские Кроссовки Nike Brazer Mid Suede
              </h5>
              <div className="card__info-price">
                <span>12 999 руб.</span>
              </div>
            </div>
            <button className="card__btn">
              <img
                className="card__btn-img"
                width={32}
                height={32}
                src="/assets/images/icons/button-remove.svg"
                alt="remove"
              />
            </button>
          </li>
        </ul>
        <ul className="side-basket__list list-info">
          <li>
            <span className="list-info__text">Итого:</span>
            <span className="list-info__dashed"></span>
            <span className="list-info__price">21 498 руб.</span>
          </li>
          <li>
            <span className="list-info__text">Налог 5%:</span>
            <span className="list-info__dashed"></span>
            <span className="list-info__price">1074 руб.</span>
          </li>
          <button className="list-info__btn btn">
            Оформить заказ
            <img
              width={16}
              height={14}
              src="/assets/images/icons/arrow-right.svg"
              alt="arrow"
            />
          </button>
        </ul>
      </div>
    </section>
  );
}

export default Drawer;
