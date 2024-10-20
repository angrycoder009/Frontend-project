// Fetch the data.json file
fetch("data.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
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
    document.querySelector("button").addEventListener("click", () => {
      let currentValue =
        parseInt(document.querySelector(".Your-cart").innerText) || 0;

      // Increment the value
      currentValue += 1;

      // Update the content of the .Your-cart element
      document.querySelector(
        ".Your-cart"
      ).innerHTML = `Your Cart(${currentValue})`;
    });

    document.querySelectorAll(".js-add-to-cart").forEach((button) => {
      button.addEventListener("click", () => {
        const productName = button.dataset.productName;
        console.log(productName);

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

        console.log(cart);
      });
    });

    console.log(cart);
  })
  .catch((error) =>
    console.error("There was a problem with the fetch operation:", error)
  );
