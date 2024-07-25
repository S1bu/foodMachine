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
      <p>${element.name} X <span class="quantityDisplay">${element.quantity}</p>
      <p class="cart_price">${element.price}</p>
    </div>
    <div class="col">
    <div class="add">
    <button onclick="quantAdd(${index})">
<i class="bi bi-plus"></i>
    </button>
    </div>
    <div class="subtract">
     <button onclick="quantSub(${index})">
    <i class="bi bi-dash"></i>
    </button>
    </div>
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
      let price = parseFloat(cart.total_with_quantity);
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
// clearButton.addEventListener("click",clearStorage)


// document.querySelector('.purchase').addEventListener('click',purchase)
// render the price



function quantAdd(index){
    // increase quantity
cart[cart.findIndex(obj => obj.id === cart[index].id)]=
{
    'id': cart[index].id,
    'name': cart[index].name, 
    'price': cart[index].price,
    'image': cart[index].image,
    'quantity': parseInt(cart[index].quantity ) + 1,
    'total_with_quantity': (parseFloat(cart[index].total_with_quantity)+ parseFloat(cart[index].price)).toFixed(2)
}//update cart quantity
    localStorage.setItem("cart", JSON.stringify(cart));
    // updating the UX 
    document.querySelectorAll('.quantityDisplay')[index].innerHTML = cart[index].quantity;
    document.querySelectorAll('.cart_price')[index].innerHTML = cart[index].total_with_quantity
    total()
}
function quantSub(index){
    if( cart[index].quantity != 1){
    // decrease quantity
    cart[cart.findIndex(obj => obj.id === cart[index].id)]=
{
    'id': cart[index].id,
    'name': cart[index].name, 
    'price': cart[index].price,
    'image': cart[index].image,
    'quantity': parseInt(cart[index].quantity ) - 1,
    'total_with_quantity': (parseFloat(cart[index].total_with_quantity) - parseFloat(cart[index].price)).toFixed(2)
}
    }

    //update cart quantity
    localStorage.setItem("cart", JSON.stringify(cart));
      // updating the UX 
      document.querySelectorAll('.quantityDisplay')[index].innerHTML = cart[index].quantity;
      document.querySelectorAll('.cart_price')[index].innerHTML = cart[index].total_with_quantity
    total()

    console.log('substract is clicked')
}