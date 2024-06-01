import { updateCartTotal } from "./CartTotal";
import { getCartProduct } from "./localStorageData";

export const plusMinus=(id,price,stock)=>{
    const currentElement=document.querySelector(`#card${id}`);

    const productQuantity=currentElement.querySelector(".productQuantity");

    const productPrice=currentElement.querySelector(".productPrice");

    let quantity=1;
    let localStoragePrice=0;

    let localCartProduct=getCartProduct();

    let existingProduct=localCartProduct.find((current)=>{
        return current.id === id;

    });
    if(existingProduct){
        quantity=existingProduct.quantity;
        localStoragePrice=existingProduct.price;
    }else{
        localStoragePrice=price;
        price=price;

    }

    if(event.target.className==="cartIncrement"){
        if(quantity<stock){
            quantity+=1;
        }
        else if(quantity===stock){
            quantity=stock;
            localStoragePrice=price*stock;
        }
    }
    if(event.target.className==="cartDecrement"){
        if(quantity>1){
            quantity-=1;
        }
    }
    localStoragePrice=price*quantity;
    localStoragePrice=Number(localStoragePrice.toFixed(2))
    let updatedCart = { id, quantity, price:localStoragePrice };

    updatedCart = localCartProduct.map((curProd) => {
      return curProd.id === id ? updatedCart : curProd;
    });
    console.log(updatedCart);
    
    localStorage.setItem("cartProductLS", JSON.stringify(updatedCart));

    productPrice.innerText=Number(localStoragePrice.toFixed(2));
    productQuantity.innerText=quantity;

    updateCartTotal();
};