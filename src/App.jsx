import React from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Drawer from "./components/Drawer";
// import Card from "./components/Card";
import Home from "./pages/Home";

import "./App.scss";

function App() {
  const [items, setItems] = React.useState([]);
  const [cardItems, setCardItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [isOpenedCard, setIsOpenedCard] = React.useState(false);
  const [favorites, setFavorites] = React.useState([]);

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

  const onAddFavorite = (obj) => {
    axios.post("https://639c41cc16d1763ab14412f9.mockapi.io/favorite", obj);
    setFavorites((prev) => [...prev, obj]);
  };

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
      <Routes>
        <Route
          path="/"
          element={
            <Home
              items={items}
              searchValue={searchValue}
              onChangeSearchInput={onChangeSearchInput}
              removeSearchInput={removeSearchInput}
              onAddToCard={onAddToCard}
              onAddFavorite={onAddFavorite}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
