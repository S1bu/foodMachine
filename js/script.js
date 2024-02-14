// The arrays
const list = [
    {"id":1,"name":"Juicy Chicken Burger","image":"https://i.ibb.co/0stWHsp/burger.png","price":"12.99","category":"meal"},
    {"id":2,"name":"Crispy Chicken Tacos","image":"https://i.ibb.co/hcTBcKy/crispy-chicken-tacos.png","price":"14.99","category":"meal"},
    {"id":3,"name":"Hot dog","image":"https://i.ibb.co/XJqR4Xv/hotdog.png","price":"9.99","category":"meal"},
    {"id":4,"name":"Sphagetti and meat sauce","image":"https://i.ibb.co/6sDZhWp/sphaggeti-and-meat-sauce.png","price":"16.99","category":"meal"},
    {"id":5,"name":"Pizza","image":"https://i.ibb.co/yVjjv7B/pizza.jpg","price":"18.99","category":"meal"},
    {"id":6,"name":"Fish and Chips","image":"https://i.ibb.co/XYtqBC6/fish-and-chips-1.png","price":"17.99","category":"meal"},
    {"id":7,"name":"Pumpkin Cookie Dough Ice-Cream","image":"https://i.ibb.co/PQNYR03/pumpkin-coookie-dough-ice-cream.png","price":"8.99","category":"desert"},
    {"id":8,"name":"Chocolate Oreo Pudding Delight","image":"https://i.ibb.co/Tv85T1w/Chocolate-Oreo-Pudding-Delight.png","price":"9.99","category":"desert"},
    {"id":9,"name":"Crispy Chocolate Chip waffles","image":"https://i.ibb.co/w7FFbvx/crispy-chocoate-chip-waffles.png","price":"7.99","category":"desert" },
    {"id":10,"name":"Old Fashioned Devils Food Cake","image":"https://i.pinimg.com/564x/c7/eb/6e/c7eb6eaab5fdc463070d24239f69f91c.jpg","price":"11.99","category":"desert"},
    {"id":11,"name":"Peppermint Crisp Tart","image":"https://i.ibb.co/Xy7sx4x/peppermint-crisp-tart.png","price":"10.99","category":"desert"},
    {"id":12,"name":"Milk Tart","image":"https://i.ibb.co/KKGhhGW/milktart.png","price":"8.99","category":"desert"},
    {"id":13,"name":"Galaxy Cup cake","image":"https://i.ibb.co/vPV03Qs/galaxy-cup-cake.png","price":"6.99","category":"desert"},
    {"id":14,"name":"Brownie Sundae","image":"https://i.ibb.co/KhFYPzC/brownie-sundae.png","price":"9.99","category":"desert"},
    {"id":15,"name":"Magnum Ice cream","image":"https://i.ibb.co/db7g5wP/magnum-ice-cream.png","price":"5.99","category":"desert"},
    {"id":16,"name":"Mini pizza","image":"https://i.ibb.co/m6FFqcb/mini-pizza.png","price":"8.99","category":"starters"},
    {"id":17,"name":"Sushi","image":"https://i.pinimg.com/564x/05/43/49/054349a2911104caa84c099b2cbc2148.jpg","price":"12.99","category":"starters"},
    {"id":18,"name":"Samoosas","image":"https://i.ibb.co/LPggH7f/samoosa.png","price":"9.99","category":"starters"},
    {"id":19,"image":"https://i.ibb.co/9hhxSnG/wings.png","name":"Wings","category":"starters","price":"14.99",},
    {"id":20,"name":"Beef swekers","image":"https://i.pinimg.com/564x/85/f8/6e/85f86ef1e6bafd4004dc6d5b5739eb4a.jpg","price":"11.99","category":"starters"},
    {"id":21,"name":"Chipotle Chicken Nachos with Jalapeño Yogurt","image":"https://i.pinimg.com/564x/fc/3b/dd/fc3bdd5d885fdf404c8c11e21ce681be.jpg","price":"13.99","category":"starters"},
    {"id":22,"name":"Beef Burgers x 6","image":"https://i.ibb.co/7pyhHcB/beef-burgers.png","price":"29.99","category":"Special"},
    {"id":23,"name":"Custard & Jelly x2","image":"https://i.ibb.co/dc8VyC1/custurad-and-jelly.png","price":"19.99","category":"Special"},
    {"id":24,"name":"Moroccan Chicken Wrap x","image":"https://i.ibb.co/3fwmZMK/moroccan-chicken-wraps.png","price":"15.99","category":"Special"},
    {"id":25,"name":"Rasberry mores Milkshake","image":"https://i.ibb.co/Swt2fVG/Rasberry-milkshake.png","price":"8.99","category":"Special"},
    {"id":26,"name":"Water","image":"https://i.ibb.co/TcfvM1j/water.png","price":"2.99","category":"drinks"},
    {"id":27,"name":"Riverdale milkshake","image":"https://i.ibb.co/FwtDqhB/Riverdale-milkshake.png","price":"5.99","category":"drinks"},
    {"id":28,"name":"Score energy drink","image":"https://i.ibb.co/09CTJZ7/score.png","price":"3.99","category":"drinks"},
    {"id":29,"name":"Coke","image":"https://i.pinimg.com/736x/d9/90/b4/d990b4e3fafb7073f2ab7241e48aea0b.jpg","price":"1.99","category":"drinks"},
    {"id":30,"name":"Corona","image":"https://i.pinimg.com/564x/22/70/17/22701784deb4629c2c3952f473a509af.jpg","price":"3.99","category":"drinks"},
    {"id":31,"name":"Fanta Orange","image":"https://i.pinimg.com/564x/95/f5/3a/95f53adebd89414863149903e700fe67.jpg","price":"2.99","category":"drinks"},
    {"id":32,"name":"HEINEKEN","image":"https://i.ibb.co/ts4v1qF/heinken.png","price":"4.99","category":"drinks"},
    {"id":33,"name":"Rum Berry cocktail","image":"https://i.pinimg.com/564x/94/77/35/947735f971eeba424518b37e78efe5b6.jpg","price":"6.99","category":"drinks"},
    {"id":34,"name":"Perfect Vanilla Bean Iced Coffee","image":"https://i.pinimg.com/564x/98/79/f1/9879f186f06b552856148d291eb69210.jpg","price":"5.99","category":"drinks"},
];
// CALLING FROM LOCAL STORAGE
let cart = JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : [];
let wishlist = JSON.parse(localStorage.getItem('wishlist')) ? JSON.parse(localStorage.getItem('wishlist')) : [];
let single_product = [];

// DOCUMENT OBJECT MODEL
let display = document.querySelector('.output')
let heading = document.querySelector('.heading')
let cart_display = document.querySelector('.cart_display')
let cart_length = document.querySelector('.cart_length')
let wish_length = document.querySelector('.wish_length')
let searched = document.querySelector('.searched')
//------------ ------- --------- ----------
let meals = document.querySelector('.meals')
let drinks = document.querySelector('.drink')
let starters =document.querySelector('.starters')
let desserts =document.querySelector('.dessert')
let Specials = document.querySelector('.special')
let filter;
// LIST LENGTHS
cart_length.innerHTML = cart.length
wish_length.innerHTML = wishlist.length
 
        //DISPLAY OF PRODUCTS
list.forEach((element, index) => {
    display.innerHTML += `
    <div class="card">
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
    <div class='col'><a href="../html/singleProd.html"><button onclick="singleProd(${index})" class="view"><i class="bi bi-arrow-right"></i></button></a></div>
    <div>
    
    </center>
    <br>
</div>
    `
});



 function singleProd(index){
    single_product.push(
        {
            id: list[index].id,
            name: list[index].name, 
            price: list[index].price,
            image:list[index].image
        }
       
        );
 localStorage.setItem("single_product",JSON.stringify(single_product))
}

//ADD TO CART
function add_to_cart(index){

 console.log(list[index].id)

    cart.push(
        {
            id: list[index].id,
            name: list[index].name, 
            price: list[index].price,
            image:list[index].image
        }
       
        )
//    }

localStorage.setItem("cart",JSON.stringify(cart))
// cart length display
cart_length.innerHTML = cart.length
}
function search_add_to_cart(index){
    let filteredItemlist = JSON.parse(localStorage.getItem('filteredItem')) ? JSON.parse(localStorage.getItem('filteredItem')) : [];
// console.log(filteredItemlist[index].name)
    cart.push(
        {
            id: filteredItemlist[index].id,
            name: filteredItemlist[index].name,
            price: filteredItemlist[index].price,
            image: filteredItemlist[index].image
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
<center><p class="error">Incorrect search input</p></center>
`
    }else{
        searched.innerHTML = '';
        // Filter items based on the search input
        const filteredItems = list.filter(item => item.name.toLowerCase().includes(searchInput));
        // get from  storage
        // let filteredItem = JSON.parse(localStorage.getItem('filteredItem')) ? JSON.parse(localStorage.getItem('filteredItem')) : [];
        // Display the search results
        filteredItems.forEach((item, index) => {
            searched.innerHTML+=`
            <div class="card">
            <center><h4>${item.name}</h4><span class="price">R ${item.price}</span></center>
            <div class="card-image">
            <img src="${item.image}">
            </div>
            <center>
            <button class="button"  onclick="search_add_to_cart(${index})">Add <i class="bi bi-bag-plus"></i></button>
            <button class="wishbtn" onclick="search_add_wishlist(${index})" ><i class="bi bi-heart"></i></button>
            </center>
            <br>
            </div>
            `
 
        });
        localStorage.setItem('filteredItem',JSON.stringify(filteredItems))
    }
  
}
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

