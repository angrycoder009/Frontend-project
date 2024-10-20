import {cart ,addToCart,showCartQuantity} from './cart.js'

// Fetch the data.json file
fetch("data.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    // console.log(data)
    let productHTML = "";
    data.forEach((data) => {
      productHTML += `
        <div class="c1">
        <img src="${data.image.desktop}">
        <button class="js-add-to-cart" data-product-name = "${data.name}" > <img style="width: 1.2rem;" src="assets/images/icon-add-to-cart.svg" alt="">Add to cart</button>
        <div class="cart-content">
          <p class="card-category">${data.category}</p>
          <p class="card-name">${data.name}</p>
          <p class="card-price">$${data.price}</p>
        </div>
      </div>
       `;
    });
    document.querySelector(".listings").innerHTML = productHTML;
  
    document.querySelectorAll(".js-add-to-cart").forEach((button) => {
      button.addEventListener("click", () => {
        const productName = button.dataset.productName;
        console.log(productName);
      addToCart(productName)
      showCartQuantity();
        console.log(cart)
       
        let matchingItemProduct;
        data.forEach((data)=>{
          if(productName === data.name){
            matchingItemProduct = data
          }
        })
         
        console.log(matchingItemProduct)
      });
    
    });
  
  })
  .catch((error) =>
    console.error("There was a problem with the fetch operation:", error)
  );
