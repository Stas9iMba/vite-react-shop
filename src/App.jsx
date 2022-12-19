import React from "react";
import axios from "axios";

import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Card from "./components/Card";

import "./App.scss";

function App() {
  const [items, setItems] = React.useState([]);
  const [cardItems, setCardItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [isOpenedCard, setIsOpenedCard] = React.useState(false);

  // React.useEffect(() => {
  //   fetch("https://639c41cc16d1763ab14412f9.mockapi.io/items")
  //     .then((response) => response.json())
  //     .then((json) => setItems(json));
  // }, []);

  React.useEffect(() => {
    axios
      .get("https://639c41cc16d1763ab14412f9.mockapi.io/items")
      .then((response) => {
        setItems(response.data);
      });
    axios
      .get("https://639c41cc16d1763ab14412f9.mockapi.io/cart")
      .then((response) => {
        setCardItems(response.data);
      });
  }, []);

  function onAddToCard(obj) {
    axios.post("https://639c41cc16d1763ab14412f9.mockapi.io/cart", obj);
    setCardItems((prev) => [...prev, obj]);
  }

  function onRemoveCard(id) {
    axios.delete(`https://639c41cc16d1763ab14412f9.mockapi.io/cart/${id}`);
    setCardItems((prev) => prev.filter((item) => item.id !== id));
  }

  function onChangeSearchInput(event) {
    setSearchValue(event.target.value);
  }

  function removeSearchInput() {
    setSearchValue("");
  }

  return (
    <div className="wrapper">
      {isOpenedCard && (
        <Drawer
          items={cardItems}
          onClickClose={() => setIsOpenedCard(false)}
          onRemove={onRemoveCard}
        />
      )}
      <Header onClickOpened={() => setIsOpenedCard(true)} />
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
          {items
            .filter((item) =>
              item.name.toLowerCase().includes(searchValue.toLowerCase(), [])
            )
            .map((obj, index) => {
              return (
                <Card
                  {...obj}
                  key={index}
                  addProduct={(item) => onAddToCard(item)}
                />
              );
            })}
        </ul>
      </main>
    </div>
  );
}

export default App;
