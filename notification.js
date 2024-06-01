export const showToast=(operation,name)=>{
const toast =document.createElement("div");
    toast.classList.add("toast");

    if(operation==="add"){
toast.textContent=`product ${name} added`;

        }else{
            toast.textContent=`product ${name} deleted`;
        }

        document.body.appendChild(toast);

        setTimeout(()=>{
            toast.remove();
        },2000);

}