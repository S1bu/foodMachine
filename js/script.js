// The arrays
const list = [
    {"id":1,"name":"Juicy Chicken Burger","image":"https://i.ibb.co/0stWHsp/burger.png","price":"12.99","category":"meal","description":"Sink your teeth into our succulent chicken burger, bursting with flavor and served with your choice of toppings.",quantity:1},
    {"id":2,"name":"Crispy Chicken Tacos","image":"https://i.ibb.co/hcTBcKy/crispy-chicken-tacos.png","price":"14.99","category":"meal","description":"Indulge in a crunchy delight with our crispy chicken tacos, topped with fresh salsa and creamy guacamole."},
    {"id":3,"name":"Hot dog","image":"https://i.ibb.co/XJqR4Xv/hotdog.png","price":"9.99","category":"meal","description":"A classic favorite, our hot dog is grilled to perfection and topped with your favorite condiments for a satisfying bite.",quantity:1},
    {"id":4,"name":"Sphagetti and meat sauce","image":"https://i.ibb.co/6sDZhWp/sphaggeti-and-meat-sauce.png","price":"16.99","category":"meal","description":"Dive into a hearty bowl of spaghetti smothered in savory meat sauce, a timeless comfort food.",quantity:1},
    {"id":5,"name":"Pizza","image":"https://i.ibb.co/yVjjv7B/pizza.jpg","price":"18.99","category":"meal","description":"Our pizza is topped with the finest ingredients and baked to perfection, offering a taste of Italy in every slice.",quantity:1},
    {"id":6,"name":"Fish and Chips","image":"https://i.ibb.co/XYtqBC6/fish-and-chips-1.png","price":"17.99","category":"meal","description":"Enjoy a taste of the seaside with our crispy battered fish served alongside golden fries, a British classic.",quantity:1},
    {"id":7,"name":"Pumpkin Cookie Dough Ice-Cream","image":"https://i.ibb.co/PQNYR03/pumpkin-coookie-dough-ice-cream.png","price":"8.99","category":"desert","description":"Treat yourself to a creamy scoop of pumpkin-infused ice cream, studded with chunks of cookie dough.",quantity:1},
    {"id":8,"name":"Chocolate Oreo Pudding Delight","image":"https://i.ibb.co/Tv85T1w/Chocolate-Oreo-Pudding-Delight.png","price":"9.99","category":"desert","description":"Indulge your sweet tooth with layers of rich chocolate pudding and crushed Oreo cookies, a heavenly dessert.",quantity:1},
    {"id":9,"name":"Crispy Chocolate Chip waffles","image":"https://i.ibb.co/w7FFbvx/crispy-chocoate-chip-waffles.png","price":"7.99","category":"desert","description":"Start your day off right with our crispy waffles studded with chocolate chips, drizzled with maple syrup.",quantity:1},
    {"id":10,"name":"Old Fashioned Devils Food Cake","image":"https://i.ibb.co/rZ5cRcy/devil-fruit-cake.png","price":"11.99","category":"desert","description":"Satisfy your craving for chocolate with our decadent devil's food cake, rich and moist with a velvety frosting.",quantity:1},
    {"id":11,"name":"Peppermint Crisp Tart","image":"https://i.ibb.co/Xy7sx4x/peppermint-crisp-tart.png","price":"10.99","category":"desert","description":"Refresh your palate with our cool and creamy peppermint crisp tart, a South African favorite.",quantity:1},
    {"id":12,"name":"Milk Tart","image":"https://i.ibb.co/KKGhhGW/milktart.png","price":"8.99","category":"desert","description":"Delight in the creamy goodness of our traditional milk tart, with a hint of cinnamon in a buttery crust.",quantity:1},
    {"id":13,"name":"Galaxy Cup cake","image":"https://i.ibb.co/vPV03Qs/galaxy-cup-cake.png","price":"6.99","category":"desert","description":"Blast off into flavor with our out-of-this-world galaxy cupcake, topped with colorful swirls and edible glitter.",quantity:1},
    {"id":14,"name":"Brownie Sundae","image":"https://i.ibb.co/KhFYPzC/brownie-sundae.png","price":"9.99","category":"desert","description":"Indulge in the ultimate dessert experience with our fudgy brownie topped with scoops of ice cream, whipped cream, and chocolate sauce.",quantity:1},
    {"id":15,"name":"Magnum Ice cream","image":"https://i.ibb.co/db7g5wP/magnum-ice-cream.png","price":"5.99","category":"desert","description":"Treat yourself to a moment of luxury with our premium Magnum ice cream, coated in a thick layer of Belgian chocolate.",quantity:1},
    {"id":16,"name":"Mini pizza","image":"https://i.ibb.co/m6FFqcb/mini-pizza.png","price":"8.99","category":"starters","description":"Enjoy a bite-sized version of our classic pizza, perfect for sharing or savoring all to yourself.",quantity:1},
    {"id":17,"name":"Sushi","image":"https://i.ibb.co/GHwXN1F/sushi.png","price":"12.99","category":"starters","description":"Experience the artistry of Japanese cuisine with our selection of fresh sushi, expertly crafted and bursting with flavor.",quantity:1},
    {"id":18,"name":"Samoosas","image":"https://i.ibb.co/LPggH7f/samoosa.png","price":"9.99","category":"starters","description":"Delight in the crispy goodness of our savory samoosas, filled with spiced potatoes or minced meat, a beloved Indian snack.",quantity:1},
    {"id":19,"image":"https://i.ibb.co/9hhxSnG/wings.png","name":"Wings","category":"starters","price":"14.99","description":"Get your hands dirty with our finger-licking chicken wings, coated in your choice of tangy sauce for the ultimate flavor explosion.",quantity:1},
    {"id":20,"name":"Beef swekers","image":"https://i.ibb.co/hX9MNXC/beef-skewers.png","price":"11.99","category":"starters","description":"Savor the smoky goodness of our tender beef skewers, marinated to perfection and grilled to juicy perfection.",quantity:1},
    {"id":21,"name":"Chipotle Chicken Nachos with Jalapeño Yogurt","image":"https://i.ibb.co/YtmJC9j/nachos.png","price":"13.99","category":"starters","description":"Spice up your snack time with our loaded nachos topped with chipotle chicken and zesty jalapeño yogurt.",quantity:1},
    {"id":22,"name":"Beef Burgers x 6","image":"https://i.ibb.co/7pyhHcB/beef-burgers.png","price":"29.99","category":"Special","description":"Gather your friends and family for a feast with our pack of six juicy beef burgers, perfect for grilling up a storm.",quantity:1},
    {"id":23,"name":"Custard & Jelly x2","image":"https://i.ibb.co/dc8VyC1/custurad-and-jelly.png","price":"19.99","category":"Special","description":"Enjoy a nostalgic treat with our classic custard and jelly cups, a sweet and creamy delight.",quantity:1},
    {"id":24,"name":"Moroccan Chicken Wrap x","image":"https://i.ibb.co/3fwmZMK/moroccan-chicken-wraps.png","price":"15.99","category":"Special","description":"Transport your taste buds to Morocco with our flavorful chicken wrap, filled with exotic spices and fresh ingredients.",quantity:1},
    {"id":25,"name":"Rasberry mores Milkshake","image":"https://i.ibb.co/Swt2fVG/Rasberry-milkshake.png","price":"8.99","category":"Special","description":"Indulge in the nostalgic flavors of summer with our creamy raspberry milkshake, topped with gooey marshmallows and chocolate.",quantity:1},
    {"id":26,"name":"Water","image":"https://i.ibb.co/TcfvM1j/water.png","price":"2.99","category":"drinks","description":"Stay refreshed with our crisp and clear bottled water, the perfect companion for any meal.",quantity:1},
    {"id":27,"name":"Riverdale milkshake","image":"https://i.ibb.co/FwtDqhB/Riverdale-milkshake.png","price":"5.99","category":"drinks","description":"Take a sip of nostalgia with our creamy Riverdale milkshake, inspired by the classic diner shakes of the 1950s.",quantity:1},
    {"id":28,"name":"Score energy drink","image":"https://i.ibb.co/09CTJZ7/score.png","price":"3.99","category":"drinks","description":"Power up with our invigorating Score energy drink, packed with caffeine and electrolytes for a burst of energy.",quantity:1},
    {"id":29,"name":"Coke","image":"https://i.ibb.co/540Tnvd/coke.png","price":"1.99","category":"drinks","description":"Enjoy the classic taste of Coca-Cola, ice-cold and refreshing with every sip.",quantity:1},
    {"id":30,"name":"Corona","image":"https://i.ibb.co/1QfdsBR/corona.png","price":"3.99","category":"drinks","description":"Unwind with a chilled bottle of Corona beer, perfect for kicking back and relaxing.",quantity:1},
    {"id":31,"name":"Fanta Orange","image":"https://i.ibb.co/ccdgJ4r/fanta-orange.png","price":"2.99","category":"drinks","description":"Quench your thirst with the fruity goodness of Fanta Orange, fizzy and refreshing with every sip.",quantity:1},
    {"id":32,"name":"HEINEKEN","image":"https://i.ibb.co/ts4v1qF/heinken.png","price":"4.99","category":"drinks","description":"Elevate your drinking experience with a cold bottle of Heineken beer, brewed to perfection for a crisp and refreshing taste.",quantity:1},
    {"id":33,"name":"Rum Berry cocktail","image":"https://i.ibb.co/rGk1yDb/rumberry-cocktail.png","price":"6.99","category":"drinks","description":"Transport yourself to a tropical paradise with our refreshing rum berry cocktail, bursting with fruity flavor and a hint of island rum.",quantity:1},
    {"id":34,"name":"Perfect Vanilla Bean Iced Coffee","image":"https://i.ibb.co/f4GY0bf/Perfect-Vanilla-Bean-Iced-Coffee.png","price":"5.99","category":"drinks","description":"Start your day off right with our smooth and creamy vanilla bean iced coffee, the perfect pick-me-up for any occasion.",quantity:1}
];
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
    }
  ];
  
  console.log(review)
// CALLING FROM LOCAL STORAGE
let cart = JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : [];
let wishlist = JSON.parse(localStorage.getItem('wishlist')) ? JSON.parse(localStorage.getItem('wishlist')) : [];
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

cart_length.innerHTML = cart.length
cart_length_2.innerHTML = cart.length
wish_length.innerHTML = wishlist.length
 


//Cart stuff
function cartItems(){ 
    cart.forEach((element,index )=> {
        document.querySelector('.cart_output').innerHTML+=
        `
        <div class="card" style="width: 100%;">
        <div class="row">
          <div class="del_holder">
            <button  style="float: right; margin-right: 10px;background-color:white;border:none;" onclick='Remove(${index})' ><i class="bi bi-trash3"></i></button>
          </div>
        </div>
        
       <div class="row">
        <div class="col">
          <img src="${element.image}" width="40%" alt="">
        </div>
        <div class="col">
          <p>${element.name}</p>
        </div>
        <div class="col">
        ${element.price}
      <div class="col quantityDisplay">
        x ${element.quantity}
      </div>
      <div class="col">
      <button class="btn" onclick="quantAdd(${index})"><i class="bi bi-plus"></i></button>
      <button class="btn" onclick="quantSub(${index})"><i class="bi bi-dash"></i></button>
      </div>
        </div>
       </div> 
      </div>
        `
    });
}
cartItems()


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
review.forEach(element => {
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
    <div class='col'> <button class="button" onclick="singleProd(${index})" ><i class="bi bi-arrow-right"></i></button></div>
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
function singleProdSearch(index){
    single_product.push(
        {
            id: filteredItems[index].id,
            name: filteredItems[index].name, 
            price: filteredItems[index].price,
            image:filteredItems[index].image,
            description:filteredItems[index].description
        }
       
        );
 
      
        single_product.forEach(element => {
            SinglepProductDisplay.innerHTML+=
        `
        <div class="row modal-row">
        <center>
        <h3>${element.name}</h3>
        </center>
        </div>
    
        <br>
        <br>
        <div class="col text-center">
        <img src="${element.image}" alt="">
        </div>
       
       
        <p><b>Price :</b></b>${element.price}</p>
        <p><b>Description: </b>${element.description}</p>
      
        `
        })
}
function singleProd(index){
    single_product.push(
        {
            id: list[index].id,
            name: list[index].name, 
            price: list[index].price,
            image:list[index].image,
            description:list[index].description
        }
       
        );
      
        single_product.forEach(element => {
            SinglepProductDisplay.innerHTML+=
        `
        <div class="row modal-row">
        <center>
        <h3>${element.name}</h3>
        </center>
        </div>
    
        <br>
        <br>
        <div class="col text-center">
        <img src="${element.image}" alt="">
        </div>
       
       
        <p><b>Price :</b> R ${element.price}</p>
        <p><b>Description: </b>${element.description}</p>
      
        `
        })

     
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
<p>Sorry can't find your Item<p/>
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
                    <i class="bi bi-heart" style="float: right;margin-right: 2%;"></i>
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
                        <button onclick="search_add_to_cart(${index})"><i class="bi bi-bag"></i></button>
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
 
//ADD TO WISHLIST
function add_to_wishlist(index){

    wishlist.push(// push to wishlist
        {
            //referencing from list
            id: list[index].id,
            name: list[index].name,
            price: list[index].price,
            image:list[index].image
        });
        
//sending to wishlist storage
    localStorage.setItem("wishlist",JSON.stringify(wishlist))
    
    wish_length.innerHTML = wishlist.length

}
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
