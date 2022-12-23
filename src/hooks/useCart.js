import React from "react";

import AppContext from "../context";

export const useCart = () => {
  const { cardItems, setCardItems } = React.useContext(AppContext);
  const totalPrice = cardItems.reduce((sum, obj) => sum + obj.price, 0);

  return { cardItems, setCardItems, totalPrice };
};
