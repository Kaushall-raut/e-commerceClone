import { getCartProduct } from "./localStorageData";

export const updateCartTotal=()=>{
    let localCartProduct=getCartProduct();

    let init=0;
    let Total=localCartProduct.reduce((accum,current)=>{
            let productPrice=current.price||0;
        return accum+productPrice;
    },init)

    let subTotal=document.querySelector(".productSubTotal");
    let finalTotal=document.querySelector(".productFinalTotal");

    subTotal.innerText=Total;

    finalTotal.innerText=`$ ${Total+50}`;

}

// updateCartTotal();