import { updateCartValue } from "./updateCartvalue";
export const getCartProduct = () => {
  // getCartProduct();
  let cartProducts = localStorage.getItem("cartProductLS");

  if (!cartProducts) {
    return [];
  }
  cartProducts = JSON.parse(cartProducts);
  // console.log( cartProducts.at(0));

  updateCartValue(cartProducts);
  return cartProducts;
};
