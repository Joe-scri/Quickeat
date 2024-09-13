const openEl = document.getElementById("openEl");
const closeEl = document.getElementById("closeEl");
const navEl = document.querySelector("nav")

openEl.addEventListener("click", () =>{
    navEl.style.display = "flex";
    openEl.style.display="none";
    closeEl.style.display = "flex";
})

closeEl.addEventListener("click", () =>{
    navEl.style.display = "none";
    openEl.style.display="flex";
    closeEl.style.display = "none";
});


//getting tag elements
const orderBtnEls = document.querySelectorAll("#order-btn");
// console.log(orderBtnEls);
const cartItems =["Food items:"];

orderBtnEls.forEach((orderBtn) =>{
    orderBtn.addEventListener("click", () => {
        const parentEl = orderBtn.parentElement;
        
        const item = {
            image: parentEl.querySelector("img").src,
            price: parentEl.querySelector("#price").innerHTML.replace('',''),
            name: parentEl.querySelector("#name").innerHTML,
            quantity: 1,
            id: Math.floor(Date.now() + Math.random()),
        };

        console.log(item);
        
        additemtocart(item)
    })
})





const additemtocart = (item) => {
    const cartItems = JSON.parse(localStorage.getItem("cart-items")) || [];
    cartItems.unshift(item);

    localStorage.setItem("cart-items", JSON.stringify(cartItems))
}