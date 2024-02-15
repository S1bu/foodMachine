let single_product = JSON.parse(localStorage.getItem('single_product'));
let cart = JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : [];


let SinglepProductDisplay = document.querySelector('.SinglepProductDisplay')




let quantity = 1
let price = single_product[0].price
let sum = 0
 
document.querySelector('.quantity_amount').innerHTML =`<b>Quantity :  </b> X ${quantity}`;
document.querySelector('.product_total').innerHTML =`<b>Price</b> : R  ${price}` 
function increase(){
quantity++
document.querySelector('.quantity_amount').innerHTML = `<b>Quantity :  </b> X ${quantity}`;

sum = parseFloat(price) * parseFloat(quantity)

document.querySelector('.product_total').innerHTML =`<b>Price</b> : R ${sum.toFixed(2)}` 

}
function decrease() {
    if (quantity > 1) {
        quantity--;
        document.querySelector('.quantity_amount').innerHTML =  `<b>Quantity :   </b> X ${quantity}`;

        let sum = parseFloat(price) * parseFloat(quantity);

        document.querySelector('.product_total').innerHTML = `<b>Price</b> : R ${sum.toFixed(2)}`
    }
}

function add_to_cart(){
       cart.push(
           {
               id: single_product[0].id,
               name: single_product[0].name,
               price: sum,
               image:single_product[0].image,
           }
          
           )
   localStorage.setItem("cart",JSON.stringify(cart))
   }