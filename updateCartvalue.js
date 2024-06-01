const cartValuee = document.getElementById("cartValue");
export const updateCartValue = (cartProducts) => {

  return (cartValuee.innerHTML = `<i class="fa-solid fa-cart-shopping">${cartProducts.length}</i> </a>`);
};
