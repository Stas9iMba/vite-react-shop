import React from "react";

function Drawer({ items = [], onClickClose, onRemove }) {
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
              {items.map((obj, index) => {
                return (
                  <li className="side-basket__item" key={index}>
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
          </>
        ) : (
          <>
            <div className="side-basket__empty">
              <img
                className="side-basket__empty-img"
                width={120}
                height={120}
                src="/assets/images/side-basket-empty.jpg"
                alt="side-basket-empty"
              />
              <p className="side-basket__empty-title">Корзина пуста</p>
              <p className="side-basket__empty-subtitle">
                {" "}
                Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
              </p>
              <button className="side-basket__btn btn" onClick={onClickClose}>
                Вернуться назад
                <img
                  width={16}
                  height={14}
                  src="/assets/images/icons/arrow-left.svg"
                  alt="arrow"
                />
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default Drawer;
