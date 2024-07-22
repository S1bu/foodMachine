
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
    <center><p class="error">Cart is empty</p></center>
    `
}else{
    cart.forEach((element,index) => {
        display.innerHTML += `
<div class="container text-center">
  <div class="row align-items-start">
    <div class="col">
          <img src="${element.image}" alt="${element.name}+' image'">
    </div>
    <div class="col">
      <p>${element.name}</p>
      <p>${element.price}</p>
    </div>
    <div class="col">
          <button class="btn-trash" onclick="Remove(${index})">
        <i class="bi bi-trash3-fill"></i>
        </button>
    </div>
  </div>
</div>
        `
    });
}
function Remove(index) {
    let position = cart[index].id
    let target = cart.findIndex(obj => obj.id === position)
     cart.splice(target,1)

     localStorage.setItem("cart",JSON.stringify(cart))
console.log('clicked')
     cart = cart
  
      location.reload();
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
document.querySelector('.items').innerHTML=`Items X ${cart.length}`
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