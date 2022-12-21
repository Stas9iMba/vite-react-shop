import React from "react";
import Card from "../components/Card";

function Favorite({ items, onAddFavorite }) {
  console.log(items);
  return (
    <main className="main">
      <div className="main__top">
        <h2 className="main__title">Моё избранное</h2>
      </div>
      <ul className="main__products" role="list">
        {items.map((obj, index) => {
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
