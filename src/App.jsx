import React from "react";

import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Card from "./components/Card";

import "./App.scss";

const arr = [
  {
    name: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 10799,
    imgProduct: "/assets/images/product-1.jpg",
  },
  {
    name: "Мужские Кроссовки Nike Air Max 270",
    price: 11299,
    imgProduct: "/assets/images/product-2.jpg",
  },
  {
    name: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 8499,
    imgProduct: "/assets/images/product-3.jpg",
  },
  {
    name: "Кроссовки Puma X Aka Boku Future Rider",
    price: 8999,
    imgProduct: "/assets/images/product-4.jpg",
  },
];

function App() {
  const [isOpenedCard, setIsOpenedCard] = React.useState(false);

  return (
    <div className="wrapper">
      {isOpenedCard && <Drawer onClickClose={() => setIsOpenedCard(false)} />}
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
          {arr.map((obj, index) => {
            return <Card {...obj} key={index} />;
          })}
        </ul>
      </main>
    </div>
  );
}

export default App;
