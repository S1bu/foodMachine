// The arrays
const list =  [
  {
  "id": 1,
  "name": "Juicy Chicken Burger",
  "image": "https://i.ibb.co/0stWHsp/burger.png",
  "price": "12.99",
  "category": "meal",
  "description": "Sink your teeth into our succulent chicken burger, bursting with flavor and served with your choice of toppings.",
  "ingredients": ["Chicken breast", "Bun", "Lettuce", "Tomato", "Cheese", "Mayonnaise", "Pickles"],
  "quantity": 1
  },
  {
  "id": 2,
  "name": "Crispy Chicken Tacos",
  "image": "https://i.pinimg.com/564x/bc/db/f5/bcdbf5d5572ddc4c097b02f2f55105e7.jpg",
  "price": "14.99",
  "category": "meal",
  "description": "Indulge in a crunchy delight with our crispy chicken tacos, topped with fresh salsa and creamy guacamole.",
  "ingredients": ["Chicken breast", "Tortilla", "Salsa", "Guacamole", "Lettuce", "Tomato", "Cheese"],
  "quantity": 1
  },
  {
  "id": 3,
  "name": "Hot dog",
  "image": "https://i.pinimg.com/564x/a3/d9/34/a3d93497180e92e5ca7166141efdb493.jpg",
  "price": "9.99",
  "category": "meal",
  "description": "A classic favorite, our hot dog is grilled to perfection and topped with your favorite condiments for a satisfying bite.",
  "ingredients": ["Sausage", "Bun", "Ketchup", "Mustard", "Relish", "Onions", "Sauerkraut"],
  "quantity": 1
  },
  {
  "id": 4,
  "name": "Sphagetti and meat sauce",
  "image": "https://i.pinimg.com/564x/17/58/c7/1758c7c884753155f802e50372103200.jpg",
  "price": "16.99",
  "category": "meal",
  "description": "Dive into a hearty bowl of spaghetti smothered in savory meat sauce, a timeless comfort food.",
  "ingredients": ["Spaghetti", "Ground beef", "Tomato sauce", "Onions", "Garlic", "Herbs"],
  "quantity": 1
  },
  {
  "id": 5,
  "name": "Pizza",
  "image": "https://i.pinimg.com/564x/b9/a9/6c/b9a96c89d1348347524418f7056d7649.jpg",
  "price": "18.99",
  "category": "meal",
  "description": "Our pizza is topped with the finest ingredients and baked to perfection, offering a taste of Italy in every slice.",
  "ingredients": ["Dough", "Tomato sauce", "Mozzarella cheese", "Pepperoni", "Sausage", "Mushrooms", "Onions"],
  "quantity": 1
  },
  {
  "id": 6,
  "name": "Fish and Chips",
  "image": "https://i.pinimg.com/736x/9a/02/8b/9a028b4e049e7c7ed4acc34a4b8ca5ef.jpg",
  "price": "17.99",
  "category": "meal",
  "description": "Enjoy a taste of the seaside with our crispy battered fish served alongside golden fries, a British classic.",
  "ingredients": ["Fish", "Batter", "Fries", "Tartar sauce"],
  "quantity": 1
  },
  {
  "id": 7,
  "name": "Pumpkin Cookie Dough Ice-Cream",
  "image": "https://i.ibb.co/PQNYR03/pumpkin-coookie-dough-ice-cream.png",
  "price": "8.99",
  "category": "desert",
  "description": "Treat yourself to a creamy scoop of pumpkin-infused ice cream, studded with chunks of cookie dough.",
  "ingredients": ["Pumpkin ice cream", "Cookie dough", "Whipped cream"],
  "quantity": 1
  },
  {
    "id": 8,
    "name": "Chocolate Oreo Pudding Delight",
    "image": "https://i.ibb.co/Tv85T1w/Chocolate-Oreo-Pudding-Delight.png",
    "price": "9.99",
    "category": "desert",
    "description": "Indulge your sweet tooth with layers of rich chocolate pudding and crushed Oreo cookies, a heavenly dessert.",
    "ingredients": ["Chocolate pudding", "Oreo cookies", "Whipped cream"],
    "quantity": 1
    },
    {
    "id": 9,
    "name": "Crispy Chocolate Chip waffles",
    "image": "https://i.pinimg.com/564x/e3/5a/87/e35a87911dfd1aaf09a24d715c8b3fc2.jpg",
    "price": "7.99",
    "category": "desert",
    "description": "Start your day off right with our crispy waffles studded with chocolate chips, drizzled with maple syrup.",
    "ingredients": ["Waffle batter", "Chocolate chips", "Maple syrup", "Butter"],
    "quantity": 1
    },
    {
    "id": 10,
    "name": "Old Fashioned Devils Food Cake",
    "image": "https://i.ibb.co/rZ5cRcy/devil-fruit-cake.png",
    "price": "11.99",
    "category": "desert",
    "description": "Satisfy your craving for chocolate with our decadent devil's food cake, rich and moist with a velvety frosting.",
    "ingredients": ["Chocolate cake", "Frosting", "Sugar", "Eggs", "Butter"],
    "quantity": 1
    },
    {
    "id": 11,
    "name": "Peppermint Crisp Tart",
    "image": "https://i.ibb.co/Xy7sx4x/peppermint-crisp-tart.png",
    "price": "10.99",
    "category": "desert",
    "description": "Refresh your palate with our cool and creamy peppermint crisp tart, a South African favorite.",
    "ingredients": ["Pastry crust", "Peppermint filling", "Chocolate", "Whipped cream"],
    "quantity": 1
    },
    {
    "id": 12,
    "name": "Milk Tart",
    "image": "https://i.ibb.co/KKGhhGW/milktart.png",
    "price": "8.99",
    "category": "desert",
    "description": "Delight in the creamy goodness of our traditional milk tart, with a hint of cinnamon in a buttery crust.",
    "ingredients": ["Pastry crust", "Milk", "Sugar", "Eggs", "Cinnamon"],
    "quantity": 1
    },
    {
    "id": 13,
    "name": "Galaxy Cup cake",
    "image": "https://i.ibb.co/vPV03Qs/galaxy-cup-cake.png",
    "price": "6.99",
    "category": "desert",
    "description": "Blast off into flavor with our out-of-this-world galaxy cupcake, topped with colorful swirls and edible glitter.",
    "ingredients": ["Cupcake", "Buttercream", "Food coloring", "Edible glitter"],
    "quantity": 1
    },
    {
    "id": 14,
    "name": "Brownie Sundae",
    "image": "https://i.ibb.co/KhFYPzC/brownie-sundae.png",
    "price": "9.99",
    "category": "desert",
    "description": "Indulge in the ultimate dessert experience with our fudgy brownie topped with scoops of ice cream, whipped cream, and chocolate sauce.",
    "ingredients": ["Brownie", "Ice cream", "Whipped cream", "Chocolate sauce"],
    "quantity": 1
    },
    {
    "id": 15,
    "name": "Magnum Ice cream",
    "image": "https://i.ibb.co/db7g5wP/magnum-ice-cream.png",
    "price": "5.99",
    "category": "desert",
    "description": "Treat yourself to a moment of luxury with our premium Magnum ice cream, coated in a thick layer of Belgian chocolate.",
    "ingredients": ["Ice cream", "Belgian chocolate"],
    "quantity": 1
    },
    {
    "id": 16,
    "name": "Mini pizza",
    "image": "https://i.ibb.co/m6FFqcb/mini-pizza.png",
    "price": "8.99",
    "category": "starters",
    "description": "Enjoy a bite-sized version of our classic pizza, perfect for sharing or savoring all to yourself.",
    "ingredients": ["Dough", "Tomato sauce", "Mozzarella cheese", "Pepperoni", "Sausage", "Mushrooms", "Onions"],
    "quantity": 1
    },
    {
    "id": 17,
    "name": "Sushi",
    "image": "https://i.ibb.co/GHwXN1F/sushi.png",
    "price": "12.99",
    "category": "starters",
    "description": "Experience the artistry of Japanese cuisine with our selection of fresh sushi, expertly crafted and bursting with flavor.",
    "ingredients": ["Sushi rice", "Fish", "Vegetables", "Seaweed"],
    "quantity": 1
    },
    {
    "id": 18,
    "name": "Samoosas",
    "image": "https://i.ibb.co/LPggH7f/samoosa.png",
    "price": "9.99",
    "category": "starters",
    "description": "Delight in the crispy goodness of our savory samoosas, filled with spiced potatoes or minced meat, a beloved Indian snack.",
    "ingredients": ["Pastry", "Potatoes", "Minced meat", "Spices"],
    "quantity": 1
    },{
      "id": 19,
      "name": "Wings",
      "image": "https://i.ibb.co/9hhxSnG/wings.png",
      "price": "14.99",
      "category": "starters",
      "description": "Get your hands dirty with our finger-licking chicken wings, coated in your choice of tangy sauce for the ultimate flavor explosion.",
      "ingredients": ["Chicken wings", "Sauce"],
      "quantity": 1
      },
      {
      "id": 20,
      "name": "Beef swekers",
      "image": "https://i.ibb.co/hX9MNXC/beef-skewers.png",
      "price": "11.99",
      "category": "starters",
      "description": "Savor the smoky goodness of our tender beef skewers, marinated to perfection and grilled to juicy perfection.",
      "ingredients": ["Beef", "Marinade", "Skewers"],
      "quantity": 1
      },
      {
      "id": 21,
      "name": "Chipotle Chicken Nachos with Jalapeño Yogurt",
      "image": "https://i.ibb.co/YtmJC9j/nachos.png",
      "price": "13.99",
      "category": "starters",
      "description": "Spice up your snack time with our loaded nachos topped with chipotle chicken and zesty jalapeño yogurt.",
      "ingredients": ["Tortilla chips", "Chipotle chicken", "Jalapeño yogurt", "Cheese", "Jalapeños"],
      "quantity": 1
      },
      {
      "id": 22,
      "name": "Beef Burgers x 6",
      "image": "https://i.ibb.co/7pyhHcB/beef-burgers.png",
      "price": "29.99",
      "category": "Special",
      "description": "Gather your friends and family for a feast with our pack of six juicy beef burgers, perfect for grilling up a storm.",
      "ingredients": ["Beef patties", "Buns", "Lettuce", "Tomato", "Cheese", "Pickles"],
      "quantity": 6
      },
      {
      "id": 23,
      "name": "Custard & Jelly x2",
      "image": "https://i.ibb.co/dc8VyC1/custurad-and-jelly.png",
      "price": "19.99",
      "category": "Special",
      "description": "Enjoy a nostalgic treat with our classic custard and jelly cups, a sweet and creamy delight.",
      "ingredients": ["Custard", "Jelly"],
      "quantity": 2
      },
      {
      "id": 24,
      "name": "Moroccan Chicken Wrap x",
      "image": "https://i.ibb.co/3fwmZMK/moroccan-chicken-wraps.png",
      "price": "15.99",
      "category": "Special",
      "description": "Transport your taste buds to Morocco with our flavorful chicken wrap, filled with exotic spices and fresh ingredients.",
      "ingredients": ["Chicken", "Tortilla", "Spices", "Vegetables"],
      "quantity": 1
      },
      {
      "id": 25,
      "name": "Rasberry mores Milkshake",
      "image": "https://i.ibb.co/Swt2fVG/Rasberry-milkshake.png",
      "price": "8.99",
      "category": "Special",
      "description": "Indulge in the nostalgic flavors of summer with our creamy raspberry milkshake, topped with gooey marshmallows and chocolate.",
      "ingredients": ["Raspberry ice cream", "Marshmallows", "Chocolate"],
      "quantity": 1
      },
      {
      "id": 26,
      "name": "Water",
      "image": "https://i.ibb.co/TcfvM1j/water.png",
      "price": "2.99",
      "category": "drinks",
      "description": "Stay refreshed with our crisp and clear bottled water, the perfect companion for any meal.",
      "ingredients": ["Water"],
      "quantity": 1
      },
      {
      "id": 27,
      "name": "Soft Drink",
      "image": "https://i.ibb.co/FwtDqhB/Riverdale-milkshake.png",
      "price": "3.99",
      "category": "drinks",
      "description": "Quench your thirst with our selection of popular soft drinks, available in a range of flavors.",
      "ingredients": ["Soft drink syrup", "Carbonated water"],
      "quantity": 1
      },
      {
      "id": 28,
      "name": "Juice",
      "image": "https://i.ibb.co/09CTJZ7/score.png",
      "price": "4.99",
      "category": "drinks",
      "description": "Sip on a refreshing glass of 100% fruit juice, made with the finest ingredients and no added sugars.",
      "ingredients": ["Fruit", "Water"],
      "quantity": 1
      },
      {
      "id": 29,
      "name": "Coffee",
      "image": "https://i.ibb.co/540Tnvd/coke.png",
      "price": "2.99",
      "category": "drinks",
      "description": "Kickstart your day with a rich and smooth cup of coffee, roasted to perfection.",
      "ingredients": ["Coffee beans", "Water"],
      "quantity": 1
      },
      {
      "id": 30,
      "name": "Tea",
      "image": "https://i.ibb.co/1QfdsBR/corona.png",
      "price": "2.99",
      "category": "drinks",
      "description": "Unwind with a soothing cup of tea, available in a range of flavors and blends.",
      "ingredients": ["Tea leaves", "Water"],
      "quantity": 1
      },
      {
      "id": 31,
      "name": "Craft Beer",
      "image": "https://i.ibb.co/ccdgJ4r/fanta-orange.png",
      "price": "7.99",
      "category": "drinks",
      "description": "Discover a new favorite with our selection of craft beers, featuring unique flavors and brews.",
      "ingredients": ["Malted barley", "Hops", "Yeast", "Water"],
      "quantity": 1
      },
      {
      "id": 32,
      "name": "Heinken",
      "image": "https://i.ibb.co/ts4v1qF/heinken.png",
      "price": "9.99",
      "category": "drinks",
      "description": "Indulge in a glass of fine wine, carefully curated from top vineyards around the world.",
      "ingredients": ["Grapes", "Yeast"],
      "quantity": 1
      },
      {
      "id": 33,
      "name": "Cocktail",
      "image": "https://i.ibb.co/rGk1yDb/rumberry-cocktail.png",
      "price": "12.99",
      "category": "drinks",
      "description": "Experience the art of mixology with our handcrafted cocktails, featuring premium spirits and fresh ingredients.",
      "ingredients": ["Spirits", "Mixers", "Garnishes"],
      "quantity": 1
      },
      {
      "id": 34,
      "name": "Mocktail",
      "image": "https://i.ibb.co/f4GY0bf/Perfect-Vanilla-Bean-Iced-Coffee.png",
      "price": "8.99",
      "category": "drinks",
      "description": "Enjoy a refreshing mocktail, expertly crafted with flavorful ingredients and no alcohol.",
      "ingredients": ["Juice", "Soda", "Garnishes"],
      "quantity": 1
      }
]
const review = [
    {
      id: 1,
      pic: 'https://i.pinimg.com/564x/19/b6/fa/19b6fa6c5ebfadd4945c70afe89f169d.jpg',
      name: 'John Doe',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat accusantium debitis optio cupiditate laboriosam omnis tenetur nisi quia quas atque provident sapiente nemo ex modi expedita, odit fugiat nesciunt non.'
    },
    {
      id: 2,
      pic: 'https://i.pinimg.com/564x/2e/f1/13/2ef1137288bbc3b64e69641fc9ed8e3b.jpg',
      name: 'Alice Smith',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consectetur enim nisi, at rutrum nibh dapibus eu. Fusce ullamcorper, velit sit amet tincidunt.'
    },
    {
      id: 3,
      pic: 'https://i.pinimg.com/564x/58/c4/3e/58c43e39ff83153804dc302d0f3dae6c.jpg',
      name: 'Bob Johnson',
      text: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer et mattis purus. Nam posuere eros ac magna sollicitudin volutpat.'
    },
    {
      id: 4,
      pic: 'https://i.pinimg.com/564x/f4/59/47/f4594755648ce1257f05dc24eed40db2.jpg',
      name: 'Emily Davis',
      text: 'Donec vitae tincidunt leo. In vitae dolor eget magna venenatis dapibus nec a libero. Curabitur quis nunc non est volutpat malesuada ut vel libero.'
    },
    {
      id: 5,
      pic: 'https://i.pinimg.com/564x/de/cc/e0/decce044ca6c600c82b3052c934a1527.jpg',
      name: 'Michael Brown',
      text: 'Fusce id fermentum quam. Integer eget semper purus. Cras vestibulum suscipit turpis nec venenatis. Sed tempus nunc id elit aliquet, vel luctus ligula condimentum.'
    },
    {
      id: 6,
      pic: 'https://i.pinimg.com/564x/d0/ba/21/d0ba21bb168f59257a67abaa2a19a478.jpg',
      name: 'Olivia Thompson',
      text: 'Fusce id fermentum quam. Integer eget semper purus. Cras vestibulum suscipit turpis nec venenatis. Sed tempus nunc id elit aliquet, vel luctus ligula condimentum.'
    },
    {
      id: 7,
      pic: 'https://i.pinimg.com/564x/46/95/34/469534220723f31ca234d26cd71a05af.jpg',
      name: ' Ethan Patel',
      text: 'Fusce id fermentum quam. Integer eget semper purus. Cras vestibulum suscipit turpis nec venenatis. Sed tempus nunc id elit aliquet, vel luctus ligula condimentum.'
    },
    {
      id: 8,
      pic: 'https://i.pinimg.com/564x/df/51/07/df5107a44a4fc5a18535137aee49bdf2.jpg',
      name: 'Ava Morales',
      text: 'Fusce id fermentum quam. Integer eget semper purus. Cras vestibulum suscipit turpis nec venenatis. Sed tempus nunc id elit aliquet, vel luctus ligula condimentum.'
    },
    {
      id: 9,
      pic: 'https://i.pinimg.com/564x/72/d7/cc/72d7cc32e51ef9c829011bb9bf84f36a.jpg',
      name: 'Liam Reynolds',
      text: 'Fusce id fermentum quam. Integer eget semper purus. Cras vestibulum suscipit turpis nec venenatis. Sed tempus nunc id elit aliquet, vel luctus ligula condimentum.'
    },
    {
      id: 10,
      pic: 'https://i.pinimg.com/564x/f6/c3/f6/f6c3f678154c65d4fc6d0a3816c871e2.jpg',
      name: 'Sophia Rodriguez',
      text: 'Fusce id fermentum quam. Integer eget semper purus. Cras vestibulum suscipit turpis nec venenatis. Sed tempus nunc id elit aliquet, vel luctus ligula condimentum.'
    },
    {
      id: 11,
      pic: 'https://i.pinimg.com/564x/28/b5/a4/28b5a42ec108821f8a16acaafd96bba4.jpg',
      name: 'Noah Brooks',
      text: 'Fusce id fermentum quam. Integer eget semper purus. Cras vestibulum suscipit turpis nec venenatis. Sed tempus nunc id elit aliquet, vel luctus ligula condimentum.'
    },
    {
      id: 12,
      pic: 'https://i.pinimg.com/564x/50/c8/5a/50c85add95a0c88e0b2b63f8cf4fcdf8.jpg',
      name: 'Mia Wallace',
      text: 'Fusce id fermentum quam. Integer eget semper purus. Cras vestibulum suscipit turpis nec venenatis. Sed tempus nunc id elit aliquet, vel luctus ligula condimentum.'
    },
    {
      id: 13,
      pic: 'https://i.pinimg.com/564x/a9/b2/fd/a9b2fdb12dcf8a29b82b1ba291bcefac.jpg',
      name: 'Logan Price',
      text: 'Fusce id fermentum quam. Integer eget semper purus. Cras vestibulum suscipit turpis nec venenatis. Sed tempus nunc id elit aliquet, vel luctus ligula condimentum.'
    },
    {
      id: 14,
      pic: 'https://i.pinimg.com/564x/19/e1/e9/19e1e91b0fec6d356c06aec57d98b4e0.jpg',
      name: 'Isabella Sanchez',
      text: 'Fusce id fermentum quam. Integer eget semper purus. Cras vestibulum suscipit turpis nec venenatis. Sed tempus nunc id elit aliquet, vel luctus ligula condimentum.'
    },
    {
      id: 15,
      pic: 'https://i.pinimg.com/564x/22/01/12/220112ce9c3967e2022ce13673a9d4f6.jpg',
      name: 'Alexander Lee',
      text: 'Fusce id fermentum quam. Integer eget semper purus. Cras vestibulum suscipit turpis nec venenatis. Sed tempus nunc id elit aliquet, vel luctus ligula condimentum.'
    },
  ];
  
 
// CALLING FROM LOCAL STORAGE
let cart = JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : [];
let wishlist = JSON.parse(localStorage.getItem('wishlist')) ? JSON.parse(localStorage.getItem('wishlist')) : [];
let reviews = JSON.parse(localStorage.getItem('reviews')) ? JSON.parse(localStorage.getItem('reviews')) : [];
let single_product = [];
let filteredItems =[]
// let single_product_info = JSON.parse(localStorage.getItem('single_product')) ? JSON.parse(localStorage.getItem('single_product')) : [];

// DOCUMENT OBJECT MODEL
let display = document.querySelector('.output')
let heading = document.querySelector('.heading')
let cart_display = document.querySelector('.cart_display')
let cart_length = document.querySelector('.cart_length')
let cart_length_2 = document.querySelector('.cart_length_2')
let wish_length = document.querySelector('.wish_length')
let searched = document.querySelector('.searched')
//------------ ------- --------- ----------
let meals = document.querySelector('.meals')
let drinks = document.querySelector('.drink')
let starters =document.querySelector('.starters')
let desserts =document.querySelector('.dessert')
let Specials = document.querySelector('.special')
let SinglepProductDisplay = document.querySelector('.SinglepProductDisplay')
let filter;
// LIST LENGTHS

cart_length.innerHTML = `( ${cart.length} )`
cart_length_2.innerHTML =`( ${cart.length} )`
wish_length.innerHTML =  `( ${wishlist.length } )`
 


 

function Remove(index) {
    let position = cart[index].id
    let target = cart.findIndex(obj => obj.id === position)
     cart.splice(target,1)
     localStorage.setItem("cart",JSON.stringify(cart))

     cart = cart
    cartItems()    //  location.reload();
 }
 
function total(){
    let cartTotal = cart.reduce((accumulator, cart) => {
      let price = parseFloat(cart.price) * parseFloat(cart.quantity);
      return accumulator + price;
    }, 0);
 
   document.querySelector('.TotalDisplay').innerHTML=`${cartTotal.toFixed(2)}`
}
total()
//--------------
//---------------
review.slice(0, 5).forEach(element => {
  document.querySelector('.review').innerHTML += `
    <div class="card">
      <center>
        <h5>${element.name}</h5>
        <img src="${element.pic}" alt="">
      </center>
       
      <br>
      <p>"${element.text}"</p>
    </div>
  `;
});
        //DISPLAY OF PRODUCTS
list.forEach((element, index) => {
    display.innerHTML += `
    <div class="card" class="container-fluid row" data-aos="fade-up">
    <div class="wish-holder">
    <button class="wishbtn" onclick="add_to_wishlist(${index})"><i class="bi bi-heart"></i></button>
    </div>
    <center><p>${element.name}</p><span class="price">R ${element.price}</span></center>
    <div class="card-image">
    <img src="${element.image}">
    </div>
    <center>
    <div class='row'>
    <div class='col'><button class="button" onclick="add_to_cart(${index})"><i class="bi bi-bag-plus"></i></button></div>
    <div class='col'> <a href ='../html/singleProd.html'> <button class="button" onclick="singleProd(${index})" ><i class="bi bi-arrow-right"></i></button></a></div>
    <div>
    
    </center>
    <br>
</div>
    `
});
function clearSingleProd(){
    single_product = [];
    // localStorage.setItem("single_product",JSON.stringify(single_product))
    location.reload()
}
// function singleProdSearch(index){
//     single_product.push(
//         {
//             id: filteredItems[index].id,
//             name: filteredItems[index].name, 
//             price: filteredItems[index].price,
//             image:filteredItems[index].image,
//             description:filteredItems[index].description,
//             ingredients:filteredItems[index].ingredients
//         }
       
//         );
 
      
//         single_product.forEach(element => {
//             SinglepProductDisplay.innerHTML+=
//         `
//         <div class="row modal-row">
//         <center>
//         <h3>${element.name}</h3>
//         </center>
//         </div>
    
//         <br>
//         <br>
//         <div class="col text-center">
//         <img src="${element.image}" alt="">
//         </div>
       
       
//         <p><b>Price :</b></b>${element.price}</p>
//         <p><b>Description: </b>${element.description}</p>
      
//         `
//         })
// }
function singleProd(index){
    single_product.push(
        {
            id: list[index].id,
            name: list[index].name, 
            price: list[index].price,
            image:list[index].image,
            description:list[index].description,
            ingredients:list[index].ingredients
        },

        );
localStorage.setItem("singleProduct",JSON.stringify(single_product))

     
}
//ADD TO CART 
function add_to_cart(index) {
  let id_target = list[index].id;

  if (cart.some(item => item.id === id_target)) {
    console.log('Already in');
  } else {
    cart.push({
      id: list[index].id,
      name: list[index].name, 
      price: list[index].price,
      image: list[index].image,
      quantity:list[index].quantity
    });
    
    localStorage.setItem("cart", JSON.stringify(cart));

    // Update cart length display
    cart_length.innerHTML = cart.length;
    cart_length_2.innerHTML =cart.length

  }
 
//   location.reload()
  total()
}
function search_add_to_cart(index){
    let filteredItemlist = JSON.parse(localStorage.getItem('filteredItem')) ? JSON.parse(localStorage.getItem('filteredItem')) : [];

    cart.push(
        {
            id: filteredItemlist[index].id,
            name: filteredItemlist[index].name,
            price: filteredItemlist[index].price,
            image: filteredItemlist[index].image,
            quantity: filteredItemlist[index].quantity
        }
        )
    localStorage.setItem("cart",JSON.stringify(cart))
    // cart length display
    cart_length.innerHTML = cart.length
}
function search_add_wishlist(index){
    let filteredItemlist = JSON.parse(localStorage.getItem('filteredItem')) ? JSON.parse(localStorage.getItem('filteredItem')) : [];
    // console.log(filteredItemlist[index].name)
        wishlist.push(
            {
                id: filteredItemlist[index].id,
                name: filteredItemlist[index].name,
                price: filteredItemlist[index].price,
                image: filteredItemlist[index].image
            }
            )
            console.log(wishlist)
        localStorage.setItem("wishlist",JSON.stringify(wishlist))

        // cart length display
        wish_length.innerHTML = wishlist.length
}
//SEARCH FUNCTIONALITY
function search() {
    const searchInput = document.querySelector('.searchbar').value.toLowerCase();

    if(searchInput == ''){
searched.innerHTML=`
<center>
<p style="color:white">Sorry can't find your Item<p/>
<img src="https://i.ibb.co/g60DcbQ/searchfood.png" class='error-image'/>
</center>
`
    }else{
        searched.innerHTML = '';
        // Filter items based on the search input
         filteredItems = list.filter(item => item.name.toLowerCase().includes(searchInput));
       
        filteredItems.forEach((item, index) => {
            searched.innerHTML+=`

            <div class="card" class="container-fluid row" data-aos="fade-up">
                <div class="heart-holder" style="float:right;">
                    <i class="bi bi-heart" style="float: right;margin-right: 2%; padding:10px"></i>
                </div>
                
                <div class="row">

                    <div class="col">
                        <img src="${item.image}" alt="">
                    </div>
                    <div class="col">
                          <p><b>${item.name}</b></p>
                          <p>R ${item.price}</p>
                    </div>
                    <div class="col">
                        <button onclick="search_add_to_cart(${index})"><i class="bi bi-bag-plus"></i></button>
                        <br>
                        <br>
                        <button onclick="singleProdSearch(${index})" class="view" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="bi bi-arrow-right"></i></button></button>
                    </div>
                </div>
            </div>
            `
 
        });
        localStorage.setItem('filteredItem',JSON.stringify(filteredItems))
    }
  
}

document.querySelector('.searchbar').addEventListener('input',search)
 
 
document.querySelector('.btn-close').addEventListener('click',clearSingleProd)
function quantAdd(index){
    // increase quantity
    cart[index].quantity++
    //update cart quantity
    localStorage.setItem("cart", JSON.stringify(cart));
    // updating the UX 
    document.querySelectorAll('.card .quantityDisplay')[index].innerHTML = 'x '+ cart[index].quantity;
    total()
}
function quantSub(index){
    if( cart[index].quantity != 1)
    // decrease quantity
    cart[index].quantity--
    //update cart quantity
    localStorage.setItem("cart", JSON.stringify(cart));
    // updating the UX 
    document.querySelectorAll('.card .quantityDisplay')[index].innerHTML ='x '+ cart[index].quantity;
    total()
}

function reviewinputview(){
let text =  document.querySelector('.review-text').value
let reviewLength = reviews.length

review.push(
  {
    pic: 'https://i.pinimg.com/564x/7c/06/76/7c0676b215b591d2c6043596da128f96.jpg',
    name: 'you',
    text: text
  }
)
localStorage.setItem("reviews",JSON.stringify(review))

alert('Review added successfully✅')
}
reviews.forEach((element, index) => {
  document.querySelector('.review-display').innerHTML += `
  <div class="review-card">
  <div class="row">
  
  <div>
  <div class="row">
    <div class="col-2">
    <br>
   
      <img src="${element.pic}" alt="${element.name}">
    </div>
    <div class="col-9 text-center">
      <p>${element.name}</p>

      <p>${element.text}</p>
    </div>
  </div>
</div>
  `
});

