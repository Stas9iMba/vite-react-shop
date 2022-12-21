import React from "react";
import Card from "../components/Card";

function Home({
  items,
  searchValue,
  onChangeSearchInput,
  removeSearchInput,
  onAddToCard,
  onAddFavorite,
  cardItems,
  isLoading,
}) {
  const filterItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchValue.toLowerCase(), [])
  );
  console.log(items.length);

  return (
    <main className="main">
      <div className="main__top">
        <h2 className="main__title">
          {searchValue ? `Поиск: "${searchValue}"` : "Все кроссовки"}
        </h2>
        <form className="main__form" action="#">
          <img
            className="search"
            width={20}
            height={20}
            src="/assets/images/icons/search.svg"
            alt="search"
          />
          <input
            onChange={onChangeSearchInput}
            value={searchValue}
            type="text"
            placeholder="&nbsp;"
            required
          />
          {searchValue && (
            <img
              className="remove"
              width={15}
              height={15}
              src="/assets/images/icons/button-remove.svg"
              alt="remove"
              onClick={removeSearchInput}
            />
          )}
        </form>
      </div>
      <ul className="main__products" role="list">
        {(isLoading ? [...Array(10)] : filterItems).map((obj, index) => {
          return (
            <Card
              {...obj}
              key={index}
              onClickFavorite={(obj) => onAddFavorite(obj)}
              addProduct={(item) => onAddToCard(item)}
              added={cardItems.some((item) => item.id === obj.id)}
              isLoading={isLoading}
            />
          );
        })}
      </ul>
    </main>
  );
}

export default Home;
