import React from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Home from "./pages/Home";
import Orders from "./pages/Orders";
import Favorite from "./pages/Favorite";
import AppContext from "./context";

function App() {
  const [items, setItems] = React.useState([]);
  const [cardItems, setCardItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [isOpenedCard, setIsOpenedCard] = React.useState(false);
  const [favorites, setFavorites] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  // React.useEffect(() => {
  //   fetch("https://639c41cc16d1763ab14412f9.mockapi.io/items")
  //     .then((response) => response.json())
  //     .then((json) => setItems(json));
  // }, []);

  React.useEffect(() => {
    async function fetchData() {
      const itemsResponse = await axios.get(
        "https://639c41cc16d1763ab14412f9.mockapi.io/items"
      );
      const cardItemResponse = await axios.get(
        "https://639c41cc16d1763ab14412f9.mockapi.io/cart"
      );
      const favoriteResponse = await axios.get(
        "https://639c41cc16d1763ab14412f9.mockapi.io/favorite"
      );

      setIsLoading(false);
      setItems(itemsResponse.data);
      setCardItems(cardItemResponse.data);
      setFavorites(favoriteResponse.data);
    }

    fetchData();
  }, []);

  const onAddToCard = async (obj) => {
    try {
      if (cardItems.find((item) => item.parentId === obj.id)) {
        setCardItems((prev) => prev.filter((item) => item.parentId !== obj.id));
        axios.delete(
          `https://639c41cc16d1763ab14412f9.mockapi.io/cart/${obj.id}`
        );
      } else {
        const { data } = await axios.post(
          "https://639c41cc16d1763ab14412f9.mockapi.io/cart",
          obj
        );
        setCardItems((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Не удалось добавить товар в корзину");
    }
  };

  function onRemoveCard(id) {
    axios.delete(`https://639c41cc16d1763ab14412f9.mockapi.io/cart/${id}`);
    setCardItems((prev) => prev.filter((item) => item.id !== id));
  }

  const onAddFavorite = async (obj) => {
    try {
      if (favorites.find((item) => item.id === obj.id)) {
        axios.delete(
          `https://639c41cc16d1763ab14412f9.mockapi.io/favorite/${obj.id}`
        );
        setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
      } else {
        const { data } = await axios.post(
          "https://639c41cc16d1763ab14412f9.mockapi.io/favorite",
          obj
        );
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Не удалось добавить в избранное");
    }
  };

  function onChangeSearchInput(event) {
    setSearchValue(event.target.value);
  }

  function removeSearchInput() {
    setSearchValue("");
  }

  const getAddedItems = (id) => {
    return cardItems.some((item) => item.parentId === id);
  };

  return (
    <AppContext.Provider
      value={{
        items,
        cardItems,
        favorites,
        isLoading,
        getAddedItems,
        onAddFavorite,
        setIsOpenedCard,
        setCardItems,
        onAddToCard,
      }}
    >
      <div className="wrapper">
        <Drawer
          items={cardItems}
          onClickClose={() => setIsOpenedCard(false)}
          onRemove={onRemoveCard}
          opened={isOpenedCard}
        />
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
                isLoading={isLoading}
              />
            }
          />
          <Route path="/favorites" element={<Favorite />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
