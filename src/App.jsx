import "./App.scss";

import Card from "./components/Card";
import Header from "./components/Header";
import search from "./assets/images/icons/search.svg";
import Drawer from "./components/Drawer";

function App() {
  return (
    <div className="wrapper">
      <Drawer />
      <Header />
      <main className="main">
        <div className="main__top">
          <h2 className="main__title">Все кроссовки</h2>
          <form className="main__form" action="#">
            <img
              className="search"
              width={20}
              height={20}
              src={search}
              alt="search"
            />
            <input type="text" placeholder="&nbsp;" required />
          </form>
        </div>
        <ul className="main__products" role="list">
          <Card />
        </ul>
      </main>
    </div>
  );
}

export default App;
