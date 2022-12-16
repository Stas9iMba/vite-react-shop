import React from "react";

import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Card from "./components/Card";

import "./App.scss";

function App() {
  const [items, setItems] = React.useState([]);
  const [cardItems, setCardItems] = React.useState([]);
  const [isOpenedCard, setIsOpenedCard] = React.useState(false);

  function onAddToCard(obj) {
    setCardItems((prev) => [...prev, obj]);
  }

  React.useEffect(() => {
    fetch("https://639c41cc16d1763ab14412f9.mockapi.io/items")
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, []);

  return (
    <div className="wrapper">
      {isOpenedCard && (
        <Drawer items={cardItems} onClickClose={() => setIsOpenedCard(false)} />
      )}
      <Header onClickOpened={() => setIsOpenedCard(true)} />
      <main className="main">
        <div className="main__top">
          <h2 className="main__title">Все кроссовки</h2>
          <form className="main__form" action="#">
            <img
              className="search"
              width={20}
              height={20}
              src="/assets/images/icons/search.svg"
              alt="search"
            />
            <input type="text" placeholder="&nbsp;" required />
          </form>
        </div>
        <ul className="main__products" role="list">
          {items.map((obj, index) => {
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
