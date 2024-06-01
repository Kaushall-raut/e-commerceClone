import { addToCart } from "./addToCart";
import { homeQuantityToggle } from "./homeQuantityToggle";

const productContainer = document.getElementById("productContainer");
const productTemplate = document.getElementById("productTemplate");

export const showProductContainer = (products) => {
  if (!products) {
    return false;
  }
  products.forEach((element) => {
    const { brand, category, description, id, image, name, price, stock } =
      element;

    const productClone = document.importNode(productTemplate.content, true);
    productClone.querySelector("#cardValue").setAttribute("id",`card${id}`)
    productClone.querySelector(".productName").innerText=name;
    productClone.querySelector(".productImage").src=image;
    productClone.querySelector(".productImage").alt=name;
    productClone.querySelector(".category").innerText=category;
    productClone.querySelector(".productDescription").innerText=description;
    productClone.querySelector(".productPrice").innerText=`$${price}`;
    productClone.querySelector(".productActualPrice").innerText=`$${price*4}`;
    productClone.querySelector(".productStock").innerText=stock;
    
    
    productClone.querySelector(".stockElement").addEventListener("click",(event)=>{
      homeQuantityToggle(event,id,stock);
    });

    productClone.querySelector(".add-to-cart-button").addEventListener("click",(event)=>{
      addToCart(event,id,stock,name);
    });
    productContainer.append(productClone);
  });
};