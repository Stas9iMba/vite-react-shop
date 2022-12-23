import React, { useState } from "react";
import axios from "axios";

import Info from "./Info";
import { useCart } from "../hooks/useCart";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer({ items = [], onClickClose, onRemove }) {
  const { cardItems, setCardItems, totalPrice } = useCart();
  const [isOrderCompleted, setIsOrderCompleted] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [orderId, setOrderId] = useState(null);

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        "https://639c41cc16d1763ab14412f9.mockapi.io/orders",
        { items: cardItems }
      );

      setOrderId(data.id);
      setIsOrderCompleted((isOrder) => !isOrder);
      setCardItems([]);

      for (let i = 0; i < cardItems.length; i++) {
        const item = cardItems[i];
        await axios.delete(
          `https://639c41cc16d1763ab14412f9.mockapi.io/cart/${item.id}`
        );
        await delay(1000);
      }
    } catch (error) {
      alert("Ошибка при создании заказа =(");
    }
    setIsLoading(false);
  };

  return (
    <section className="side-basket">
      <div className="side-basket__box">
        <div className="side-basket__top">
          <h2 className="side-basket__title">Корзина</h2>
          <img
            className="drawer__btn-img"
            width={32}
            height={32}
            src="/assets/images/icons/button-remove.svg"
            alt="Close"
            onClick={onClickClose}
          />
        </div>
        {items.length > 0 ? (
          <>
            <ul className="side-basket__items" role="list">
              {items.map((obj) => {
                return (
                  <li className="side-basket__item" key={obj.id}>
                    <img
                      width={70}
                      height={60}
                      src={obj.imgProduct}
                      alt="product"
                    />
                    <div className="drawer__info">
                      <h5 className="drawer__name">{obj.name}</h5>
                      <div className="drawer__info-price">
                        <span>{obj.price} руб.</span>
                      </div>
                    </div>
                    <button
                      className="drawer__btn"
                      onClick={() => onRemove(obj.id)}
                    >
                      <img
                        className="drawer__btn-img"
                        width={32}
                        height={32}
                        src="/assets/images/icons/button-remove.svg"
                        alt="remove"
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
            <ul className="side-basket__list list-info">
              <li>
                <span className="list-info__text">Итого:</span>
                <span className="list-info__dashed"></span>
                <span className="list-info__price">{totalPrice} руб.</span>
              </li>
              <li>
                <span className="list-info__text">Налог 5%:</span>
                <span className="list-info__dashed"></span>
                <span className="list-info__price">
                  {(totalPrice / 100) * 5} руб.
                </span>
              </li>
              <button
                disabled={isLoading}
                onClick={onClickOrder}
                className="list-info__btn btn"
              >
                Оформить заказ
                <img
                  width={16}
                  height={14}
                  src="/assets/images/icons/arrow-right.svg"
                  alt="arrow"
                />
              </button>
            </ul>
          </>
        ) : (
          <Info
            title={isOrderCompleted ? "Заказ оформлен!" : "Корзина пустая"}
            description={
              isOrderCompleted
                ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
            }
            img={
              isOrderCompleted
                ? "/assets/images/side-basket-order.jpg"
                : "/assets/images/side-basket-empty.jpg"
            }
          />
        )}
      </div>
    </section>
  );
}

export default Drawer;
