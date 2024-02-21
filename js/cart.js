
// let cart = JSON.parse(localStorage.getItem('cart')) ?? [];
let cart = JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : [];
let wishlist = JSON.parse(localStorage.getItem('wishlist')) ? JSON.parse(localStorage.getItem('wishlist')) : [];

// DOCUMENT OBJECT MODEL
let display = document.querySelector('.display')
let cart_length = document.querySelector('.cart_length')
let clearButton = document.querySelector('.clearButton')
let totalPrice = document.querySelector('.Total');
let wish_length = document.querySelector('.wish_length')

//DISPLAY LENGTHS
cart_length.innerHTML = cart.length
wish_length.innerHTML = wishlist.length

// DISPLAY CART
if(cart.length == 0){
    display.innerHTML=`
    <p class="error">Cart is empty</p>
    `
}else{
    cart.forEach((element,index) => {
        display.innerHTML += `
            <div class="card_cart">
            <div class="card-image">
            <center>
                 <img src="${element.image}">
            </center>
            </div>
                <center><h4>${element.name}</h4><span class="price">R ${element.price}</span></center>
                <center>
                <button class="buttonRemove" onclick="Remove(${index})">Remove <i class="bi bi-trash"></i></button>
                <button class="wishbtn" onclick="add_to_wishlist(${index})"><i class="bi bi-heart"></i></button>
                </center>
                <br>
            </div>
        `
    });
}
// FUNCTIONS
function add_to_wishlist(index){

    wishlist.push(
        {
            id: cart[index].id,
            name: cart[index].name,
            price: cart[index].price,
            image:cart[index].image
        }
       
        );
        
      

    localStorage.setItem("wishlist",JSON.stringify(wishlist))
    
    wish_length.innerHTML = wishlist.length

}

function total(){
    let cartTotal = cart.reduce((accumulator, cart) => {
      let price = parseFloat(cart.price);
      return accumulator + price;
    }, 0);
 
    totalPrice.innerHTML=`<span class="price">Total: R${cartTotal.toFixed(2)}</span></h5>`
}
// CALLING FUNCTIONS
total()
// CLEAR LOCAL STORAGE 
function clearStorage(){
    localStorage.removeItem("cart")
    location.reload();
}
// EVENT LISTENERS
clearButton.addEventListener("click",clearStorage)

function purchase() {
    alert(`${list}`)
}


document.querySelector('.purchase').addEventListener('click',purchase)