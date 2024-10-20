 export let cart = []

export function addToCart(productName){
    let matchingItem;
    cart.forEach((item) => {
      //if it is same element already exist
      if (productName === item.productName) {
        //store them in matching item
        matchingItem = item;
      }
    });
    if (matchingItem) {
      //if it's true in crease by one
      matchingItem.quantity += 1;
    } else {
      cart.push({
        productName: productName,
        quantity: 1,
      });
    }
}
export function showCartQuantity(){
    let cartQuantity = 0 ;
    cart.forEach((item)=>{
    cartQuantity +=item.quantity
    })
    document.querySelector('.js-cart-quantity').innerHTML =cartQuantity
    console.log(cartQuantity)
}
export function updateCart(){
    
}