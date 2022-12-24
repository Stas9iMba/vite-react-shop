import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Card from "../components/Card";
import AppContext from "../context";

function Orders() {
  const [orders, setOrders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const { onAddToCard, onAddFavorite } = React.useContext(AppContext);

  React.useEffect(() => {
    try {
      async function fetchData() {
        const responseOrders = await axios.get("http://localhost:3001/orders");

        setOrders(
          responseOrders.data.reduce((prev, obj) => [...prev, ...obj.items], [])
        );
        setIsLoading(false);
      }
      fetchData();
    } catch (error) {
      alert("Ошибка при запросе моих заказов");
    }
  }, []);

  return (
    <main className="main">
      <div className="main__top main__favorite">
        <Link to="/">
          <img
            className="main__back"
            width={32}
            height={32}
            src="assets/images/icons/button-back.svg"
            alt="back"
          />
        </Link>
        <h2 className="main__title">Мои заказы</h2>
      </div>
      <ul className="main__products" role="list">
        {(isLoading ? [...Array(3)] : orders).map((obj, index) => {
          return <Card {...obj} key={index} isLoading={isLoading} />;
        })}
      </ul>
    </main>
  );
}

export default Orders;
