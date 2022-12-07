import "./App.scss";
import logo from "./assets/images/logo.png";
import user from "./assets/images/icons/user.svg";
import cart from "./assets/images/icons/cart.svg";
import product from "./assets/images/product/product-1.jpg";
import btnAdd from "./assets/images/icons/button-add.svg";

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <header className="header">
          <div className="header__logo">
            <img src={logo} width={40} height={40} alt="logo" />
            <div>
              <h1 className="header__title">REACT Shop</h1>
              <p className="header__subtitle">Магазин лучших кроссовок</p>
            </div>
          </div>
          <ul className="header__right" role="list">
            <li className="header__cart">
              <img src={cart} alt="cart" />
              <span>12 999 руб.</span>
            </li>
            <li className="header__user">
              <img src={user} alt="user" />
            </li>
          </ul>
        </header>
        <main className="main">
          <h2 className="main__title">Все кроссовки</h2>
          <ul className="main__products" role="list">
            <li className="main__product">
              <img className="main__img" src={product} alt="product" />
              <div className="main__name">
                <span>Мужские Кроссовки</span>
                <span>Nike Brazer Mid Suede</span>
              </div>
              <div className="main__box">
                <div className="main__price">
                  <span>Цена: </span>
                  <span>12 999 руб.</span>
                </div>
                <button className="main__button">
                  <img src={btnAdd} alt="" />
                </button>
              </div>
            </li>
          </ul>
        </main>
      </div>
    </div>
  );
}

export default App;
