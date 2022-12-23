import React from "react";

import AppContext from "../context";

function Info({ img, title, description }) {
  const { setIsOpenedCard } = React.useContext(AppContext);

  return (
    <div className="side-basket__empty">
      <img
        className="side-basket__empty-img"
        width={120}
        src={img}
        alt="side-basket-empty"
      />
      <p className="side-basket__empty-title">{title}</p>
      <p className="side-basket__empty-subtitle">{description}</p>
      <button
        className="side-basket__btn btn"
        onClick={() => setIsOpenedCard(false)}
      >
        Вернуться назад
        <img
          width={16}
          height={14}
          src="assets/images/icons/arrow-left.svg"
          alt="arrow"
        />
      </button>
    </div>
  );
}

export default Info;
