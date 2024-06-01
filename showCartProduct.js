import { updateCartTotal } from "./CartTotal";
import products from "./api/products.json";
import { dataForCart } from "./fetchData";
import { plusMinus } from "./incrementDecrement";
import { getCartProduct } from "./localStorageData";
import { removeItem } from "./removeProduct";
let cartProduct = getCartProduct();

let filterProduct = products.filter((current) => {
  // console.log(current.id);

  return cartProduct.some((matchedElement) => {
    return current.id === matchedElement.id;
  });
});

const cartElement = document.querySelector("#productCartContainer");
const templateContainer = document.querySelector("#productCartTemplate");

const showCartProduct = () => {
  filterProduct.forEach((currelement) => {
    const { category, id, image, name, stock, price,quantity } = currelement;
    let productClone = document.importNode(templateContainer.content, true);

    let localData=dataForCart(id,price,quantity);

    productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
    productClone.querySelector(".category").innerText = category;
    productClone.querySelector(".productImage").src = image;
    productClone.querySelector(".productName").innerText = name;
    productClone.querySelector(".productQuantity").innerText = localData.quantity;
    productClone.querySelector(".productPrice").innerText = localData.price;

    productClone.querySelector(".stockElement").addEventListener("click",()=>{
        plusMinus(id,price,stock);
    });
    

    productClone.querySelector(".remove-to-cart-button").addEventListener('click',()=>{
        removeItem(id,name);
    });
    cartElement.append(productClone);
  });
};

showCartProduct();
updateCartTotal();
