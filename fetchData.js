import { getCartProduct } from "./localStorageData";

export const dataForCart=((id ,price,quantity)=>{

    let cartProduct = getCartProduct();
    let existingProduct=cartProduct.find((current)=>{
        return current.id===id;
    })
    if(existingProduct){
        quantity=existingProduct.quantity;
        price=existingProduct.price;
    }
    console.log(quantity,price);
    return {quantity,price}
});