let cart = JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : [];
let single_product = JSON.parse(localStorage.getItem('singleProduct'));

 
let SinglepProductDisplay = document.querySelector('.SinglepProductDisplay')

function clearSingleProd(){
    localStorage.removeItem("singleProduct")
}

// let quantity = 1
// let price = single_product[0].price
// let sum = 0
 
// document.querySelector('.quantity_amount').innerHTML =`<b>Quantity :  </b> X ${quantity}`;
// document.querySelector('.product_total').innerHTML =`<b>Price</b> : R  ${price}` 
// function increase(){
// quantity++
// document.querySelector('.quantity_amount').innerHTML = `<b>Quantity :  </b> X ${quantity}`;

// sum = parseFloat(price) * parseFloat(quantity)

// document.querySelector('.product_total').innerHTML =`<b>Price</b> : R ${sum.toFixed(2)}` 

// }
// function decrease() {
//     if (quantity > 1) {
//         quantity--;
//         document.querySelector('.quantity_amount').innerHTML =  `<b>Quantity :   </b> X ${quantity}`;

//         let sum = parseFloat(price) * parseFloat(quantity);

//         document.querySelector('.product_total').innerHTML = `<b>Price</b> : R ${sum.toFixed(2)}`
//     }
// }

// function add_to_cart(){
//        cart.push(
//            {
//                id: single_product[0].id,
//                name: single_product[0].name,
//                price: sum,
//                image:single_product[0].image,
//            }
          
//            )
//    localStorage.setItem("cart",JSON.stringify(cart))
//    }

// Sing product display
single_product.forEach(element => {
display = document.querySelector('.rowSinglePrd').innerHTML+=
`
   <div class="left">
        <center>
            <img src="${element.image}" alt="" class="singlePrd_image"> 
        </center>
     
    </div>
    <div class="right">
    <h3> Item </h3>
        <p class="singlePrd_name">
           ${element.name}
        </p>
        <br>
        <h3> Price </h3>

    <p class="singlePrd_price">R ${element.price}</p>
    <br>
    <h3> Description </h3>
        <p class="singlePrd_description">
    ${element.description}
        </p>
<br>
<h3> Ingredients </h3>
<ul>
  ${element.ingredients.map((ingredient, index) => {
    return `<li>${ingredient}</li>`;
  }).join('')}
</ul>

 
 
      
    </div>
`
})