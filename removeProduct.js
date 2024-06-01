import { getCartProduct } from "./localStorageData";
import { showToast } from "./notification";
import { updateCartValue } from "./updateCartvalue";

export const removeItem=((id,name)=>{
    let cartProduct = getCartProduct();



     cartProduct=cartProduct.filter((current)=>{
return current.id!==id;
    })

    localStorage.setItem("cartProductLS",JSON.stringify(cartProduct));

    let removeDiv=document.getElementById(`card${id}`);
    if(removeDiv){
        removeDiv.remove();
        showToast("delete",name)
    }

    updateCartValue(cartProduct);
});