let wishlist = JSON.parse(localStorage.getItem('wishlist')) ? JSON.parse(localStorage.getItem('wishlist')) : [];
let cart = JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : [];


//DOCUMENT OBJECT MODEL
let displayWish = document.querySelector('.displayWish')
let cart_length = document.querySelector('.cart_length')
let wish_length = document.querySelector('.wish_length')

//DISPLAY LENGTHS
cart_length.innerHTML = cart.length
wish_length.innerHTML = wishlist.length

// DISPLAY
if(wishlist.length == 0){
    displayWish.innerHTML=`<p class="error">Wish list is empty</p>`
}
wishlist.forEach((element, index) => {
    displayWish.innerHTML += `
    <div class="card">
    <div class="card-image">
    <img src="${element.image}">
    </div>
    <center><h4>${element.name}</h4><span class="price">R ${element.price}</span></center>
    <center>
        <button class="buttonwish"  onclick="add_cart_del(${index})"> Add <i class="bi bi-bag-plus"></i></button>
    </center>
    <br>
</div>
    `
});

//FUNCTIONS
function add_cart_del(index){
    // push to cart array
    cart.push({
            id: wishlist[index].id,
            name: wishlist[index].name,
            price: wishlist[index].price,
            image:wishlist[index].image
        })

        //deleting from the wishlist
        let position = wishlist[index].id
        let target = wishlist.findIndex(obj => obj.id === position)
        wishlist.splice(target,1)
         

        //send to local storage
         localStorage.setItem("cart",JSON.stringify(cart))
         localStorage.setItem("wishlist",JSON.stringify(wishlist))
         location.reload();

        // cart length display
        cart_length.innerHTML = cart.length
}