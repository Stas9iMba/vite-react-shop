import React from "react";
import { Link } from "react-router-dom";

import Card from "../components/Card";
import AppContext from "../context";

function Favorite() {
  const { favorites, onAddFavorite } = React.useContext(AppContext);

  return (
    <main className="main">
      <div className="main__top main__favorite">
        <Link to="/">
          <img
            className="main__back"
            width={32}
            height={32}
            src="/assets/images/icons/button-back.svg"
            alt="back"
          />
        </Link>
        <h2 className="main__title">Моё избранное</h2>
      </div>
      <ul className="main__products" role="list">
        {favorites.map((obj, index) => {
          return (
            <Card
              {...obj}
              key={index}
              isFavorites={true}
              onClickFavorite={(obj) => onAddFavorite(obj)}
              // addProduct={(item) => onAddToCard(item)}
            />
          );
        })}
      </ul>
    </main>
  );
}

export default Favorite;
