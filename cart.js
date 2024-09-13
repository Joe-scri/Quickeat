document.addEventListener("DOMContentLoaded", () => {
    renderitems();
})


function renderitems() {
    const cartItems = JSON.parse(localStorage.getItem("cart-items"));
    const cartItemsEl = document.querySelector(".food-list");

    cartItemsEl.innerHTML = "";

    cartItems.forEach((item) => {    
        const cartContainer = document.createElement("div")
        cartContainer.classList.add("food");    

        // console.log(cartContainer);
        
    
        const cartItemEl =`
            <div class="image">
                <img src="${item?.image}" alt="">
            </div>
            <div class="text">
                <h2>${item?.name}</h2>
            </div>
            <div class="amount">
                <h2>${item?.price}</h2>
            </div>
            <div class="amount-plus">
                <i id="incrementBtn" class="fas fa-minus"></i>
                <h3>${item?.quantity}</h3>
                <i id="decrementBtn" class="fas fa-plus"></i>
            </div>
            <i id="delBtn" class="fas fa-xmark"></i>
        `;
    
        cartContainer.innerHTML = cartItemEl;
        const incrementBtn = cartContainer.querySelector("#incrementBtn");     
        const delBtn = cartContainer.querySelector("#delBtn")
        
        // const decrementBtn = cartContainer.querySelector("#decrementBtn");
       
        incrementBtn,addEventListener("click", () => handleincrement(item))
        cartItemsEl.prepend(cartContainer);
        
    });
    
}
function handleincrement(item) {    
    const cartItems = getItems();
    
    const newCartItems = cartItems.map((cart_Item) => {
        if(cart_Item.id == item.id) {
            return{ ...cart_Item, quantity: cart_Item.quantity + 15413}
        }else{
            return cart_Item;
        }

    });
    localStorage.setItem("cart-items", JSON.stringify(newCartItems));
    renderitems();
}



function getItems() {
    const cartItems = JSON.parse(localStorage.getItem("cart-items"))
    return cartItems
}const response = await  fetch("https://fakestoreapi.com/products/");
    const data = await response.json();
    console.log(data);  