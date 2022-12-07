import "./App.scss";
import logo from "./assets/images/logo.png";
import user from "./assets/images/icons/user.svg";
import cart from "./assets/images/icons/cart.svg";
import product from "./assets/images/product/product-1.jpg";
import btnAdd from "./assets/images/icons/button-add.svg";
import btnHeard from "./assets/images/icons/button-heart.svg";
import search from "./assets/images/icons/search.svg";
import btnRemove from "./assets/images/icons/button-remove.svg";
import arrowRight from "./assets/images/icons/arrow-right.svg";

function App() {
  return (
    <div className="wrapper">
      <section className="side-basket">
        <div className="side-basket__box">
          <div className="side-basket__top">
            <h2 className="side-basket__title">Корзина</h2>
            <img
              className="card__btn-img"
              width={32}
              height={32}
              src={btnRemove}
              alt="Close"
            />
          </div>
          <ul className="side-basket__items" role="list">
            <li className="side-basket__item">
              <img width={70} height={60} src={product} alt="product" />
              <div className="card__info">
                <h5 className="card__name">
                  Мужские Кроссовки Nike Brazer Mid Suede
                </h5>
                <div className="card__info-price">
                  <span>12 999 руб.</span>
                </div>
              </div>
              <button className="card__btn">
                <img
                  className="card__btn-img"
                  width={32}
                  height={32}
                  src={btnRemove}
                  alt="remove"
                />
              </button>
            </li>
          </ul>
          <ul className="side-basket__list list-info">
            <li>
              <span className="list-info__text">Итого:</span>
              <span className="list-info__dashed"></span>
              <span className="list-info__price">21 498 руб.</span>
            </li>
            <li>
              <span className="list-info__text">Налог 5%:</span>
              <span className="list-info__dashed"></span>
              <span className="list-info__price">1074 руб.</span>
            </li>
            <button className="list-info__btn btn">
              Оформить заказ
              <img width={16} height={14} src={arrowRight} alt="arrow" />
            </button>
          </ul>
        </div>
      </section>

      <header className="header">
        <div className="header__logo">
          <img src={logo} width={40} height={40} alt="logo" />
          <div>
            <h1 className="header__title">REACT Shop</h1>
            <p className="header__subtitle">Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="header__right" role="list">
          <li className="header__item header__cart">
            <img src={cart} alt="cart" />
            <span>12 999 руб.</span>
          </li>
          <li className="header__item header__heard">
            <svg
              width="22"
              height="19"
              viewBox="0 0 22 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.1003 0C16.7293 0 18.0976 0.54932 19.2052 1.64796C20.3129 2.7466 20.8668 4.08759 20.8668 5.67092C20.8668 6.44643 20.7039 7.23002 20.3781 8.02169C20.0523 8.81335 19.6939 9.51616 19.303 10.1301C18.912 10.7441 18.2523 11.5357 17.3238 12.5051C16.3953 13.4745 15.6134 14.2581 14.9781 14.8559C14.3428 15.4537 13.3248 16.3665 11.9239 17.5944L10.4089 18.9515L8.89403 17.6429C7.52572 16.3827 6.51577 15.4537 5.8642 14.8559C5.21262 14.2581 4.42258 13.4745 3.49408 12.5051C2.56559 11.5357 1.90586 10.7441 1.51492 10.1301C1.12397 9.51616 0.773748 8.81335 0.464249 8.02169C0.15475 7.23002 0 6.44643 0 5.67092C0 4.08759 0.553841 2.7466 1.66152 1.64796C2.7692 0.54932 4.12123 0 5.71759 0C7.60717 0 9.17095 0.727041 10.4089 2.18112C11.6469 0.727041 13.2107 0 15.1003 0ZM10.5067 16.0918C12.1031 14.6701 13.2677 13.6118 14.0008 12.9171C14.7338 12.2224 15.5401 11.3903 16.4198 10.4209C17.2994 9.45153 17.9102 8.60332 18.2523 7.87628C18.5944 7.14924 18.7654 6.41412 18.7654 5.67092C18.7654 4.63691 18.4152 3.78061 17.7148 3.10204C17.0143 2.42347 16.1428 2.08418 15.1003 2.08418C14.3184 2.08418 13.5772 2.31037 12.8768 2.76276C12.1764 3.21514 11.6795 3.79677 11.3863 4.50765H9.43158C9.17095 3.79677 8.69041 3.21514 7.98997 2.76276C7.28952 2.31037 6.53206 2.08418 5.71759 2.08418C4.67507 2.08418 3.81173 2.42347 3.12757 3.10204C2.44342 3.78061 2.10134 4.63691 2.10134 5.67092C2.10134 6.41412 2.26423 7.14924 2.59002 7.87628C2.91581 8.60332 3.52666 9.45153 4.42258 10.4209C5.3185 11.3903 6.13297 12.2224 6.866 12.9171C7.59902 13.6118 8.74743 14.6701 10.3112 16.0918L10.4089 16.1888L10.5067 16.0918Z"
                fill="#9B9B9B"
              />
            </svg>
          </li>
          <li className="header__item header__user">
            <img src={user} alt="user" />
          </li>
        </ul>
      </header>
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
          <li className="main__product">
            <div className="main__img">
              <div className="main__img-heard">
                <img src={btnHeard} alt="btnHeard" />
              </div>
              <img src={product} alt="product" />
            </div>
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
  );
}

export default App;
