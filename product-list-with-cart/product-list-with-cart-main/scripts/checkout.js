import { cart } from "./cart";
cart.forEach((cartItem)=>{
    const productName = cartItem.productName;
    console.log(productName)
})