// The arrays
const list = [
    {"id":1,"name":"Juicy Chicken Burger","image":"https://i.pinimg.com/564x/73/a5/d7/73a5d79799e91f4982b11993a621be16.jpg","price":"12.99","category":"meal"},
    {"id":2,"name":"Crispy Chicken Tacos","image":"https://i.pinimg.com/564x/1e/fc/75/1efc75b4422bc8c48e85c9030f2a6d57.jpg","price":"14.99","category":"meal"},
    {"id":3,"name":"Hot dog","image":"https://i.pinimg.com/564x/a3/d9/34/a3d93497180e92e5ca7166141efdb493.jpg","price":"9.99","category":"meal"},
    {"id":4,"name":"Sphagetti and meat sauce","image":"https://i.pinimg.com/564x/10/fd/c2/10fdc24b980f8025c1e4bb52b2d3db55.jpg","price":"16.99","category":"meal"},
    {"id":5,"name":"Pizza","image":"https://i.pinimg.com/736x/59/ff/2e/59ff2e6456372690e0b6436e898a26b4.jpg","price":"18.99","category":"meal"},
    {"id":6,"name":"Fish and Chips","image":"https://i.pinimg.com/564x/f1/fe/94/f1fe944658897fd32c5c01f926059243.jpg","price":"17.99","category":"meal"},
    {"id":7,"name":"Pumpkin Cookie Dough Ice-Cream","image":"https://i.pinimg.com/564x/b2/51/e4/b251e4cc8f45428783db12f83a3174da.jpg","price":"8.99","category":"desert"},
    {"id":8,"name":"Chocolate Oreo Pudding Delight","image":"https://i.pinimg.com/564x/0f/85/4f/0f854f1a226f39cf90c2f3c261fabcad.jpg","price":"9.99","category":"desert"},
    {"id":9,"name":"Crispy Chocolate Chip waffles","image":"https://i.pinimg.com/564x/a2/e1/1d/a2e11d22b223371bd5f999f5aaa6e9af.jpg","price":"7.99","category":"desert" },
    {"id":10,"name":"Old Fashioned Devils Food Cake","image":"https://i.pinimg.com/564x/c7/eb/6e/c7eb6eaab5fdc463070d24239f69f91c.jpg","price":"11.99","category":"desert"},
    {"id":11,"name":"Peppermint Crisp Tart","image":"https://i.pinimg.com/564x/67/47/4b/67474b2e8915c82c6ea017f9cc542669.jpg","price":"10.99","category":"desert"},
    {"id":12,"name":"Milk Tart","image":"https://i.pinimg.com/564x/98/3e/df/983edf8cdd43d46711b216267047cdb8.jpg","price":"8.99","category":"desert"},
    {"id":13,"name":"Galaxy Cup cake","image":"https://i.pinimg.com/564x/23/09/08/2309081c44c7f0f00f7ce79e7d1e22d2.jpg","price":"6.99","category":"desert"},
    {"id":14,"name":"Brownie Sundae","image":"https://i.pinimg.com/564x/7c/6a/94/7c6a94f180de7e9f6698d596fccd396e.jpg","price":"9.99","category":"desert"},
    {"id":15,"name":"Magnum Ice cream","image":"https://i.pinimg.com/564x/14/e1/6b/14e16bd3465af41f9dff460da200e8c1.jpg","price":"5.99","category":"desert"},
    {"id":16,"name":"Mini pizza","image":"https://i.pinimg.com/564x/0c/2f/c0/0c2fc05438e6fe41f034a232e1d710a5.jpg","price":"8.99","category":"starters"},
    {"id":17,"name":"Sushi","image":"https://i.pinimg.com/564x/05/43/49/054349a2911104caa84c099b2cbc2148.jpg","price":"12.99","category":"starters"},
    {"id":18,"name":"Samoosas","image":"https://i.pinimg.com/564x/35/47/90/354790ef813f126fbd51c52e7958f1ab.jpg","price":"9.99","category":"starters"},
    {"id":19,"image":"https://i.pinimg.com/564x/b7/4f/02/b74f02731c5e4b39eb40d4bb0845e19e.jpg","name":"Wings","category":"starters","price":"14.99",},
    {"id":20,"name":"Beef swekers","image":"https://i.pinimg.com/564x/85/f8/6e/85f86ef1e6bafd4004dc6d5b5739eb4a.jpg","price":"11.99","category":"starters"},
    {"id":21,"name":"Chipotle Chicken Nachos with Jalapeño Yogurt","image":"https://i.pinimg.com/564x/fc/3b/dd/fc3bdd5d885fdf404c8c11e21ce681be.jpg","price":"13.99","category":"starters"},
    {"id":22,"name":"Beef Burgers x 6","image":"https://i.pinimg.com/564x/b0/68/45/b0684510d758db6e05c13f71421ca49a.jpg","price":"29.99","category":"Special"},
    {"id":23,"name":"Custard & Jelly x2","image":"https://i.pinimg.com/564x/4c/b3/cd/4cb3cdb6d0543e40b54167cb7e0930d2.jpg","price":"19.99","category":"Special"},
    {"id":24,"name":"Moroccan Chicken Wrap x","image":"https://i.pinimg.com/564x/cd/2c/e1/cd2ce1bae745b70afc70a398b3bc3475.jpg","price":"15.99","category":"Special"},
    {"id":25,"name":"Rasberry mores Milkshake","image":"https://i.pinimg.com/564x/54/35/4b/54354b184e08e3d4c6512351cecfee87.jpg","price":"8.99","category":"Special"},
    {"id":26,"name":"Water","image":"https://i.pinimg.com/564x/ef/63/dd/ef63ddb07e1ece007b2de75e34e37e79.jpg","price":"2.99","category":"drinks"},
    {"id":27,"name":"Riverdale milkshake","image":"https://i.pinimg.com/564x/ff/e1/5e/ffe15ef81159f0e7146bfc835c3900f9.jpg","price":"5.99","category":"drinks"},
    {"id":28,"name":"Score energy drink","image":"https://i.pinimg.com/564x/0f/18/1c/0f181c90fd647bd8d68cc3ced8544b4e.jpg","price":"3.99","category":"drinks"},
    {"id":29,"name":"Coke","image":"https://i.pinimg.com/736x/d9/90/b4/d990b4e3fafb7073f2ab7241e48aea0b.jpg","price":"1.99","category":"drinks"},
    {"id":30,"name":"Corona","image":"https://i.pinimg.com/564x/22/70/17/22701784deb4629c2c3952f473a509af.jpg","price":"3.99","category":"drinks"},
    {"id":31,"name":"Fanta Orange","image":"https://i.pinimg.com/564x/95/f5/3a/95f53adebd89414863149903e700fe67.jpg","price":"2.99","category":"drinks"},
    {"id":32,"name":"HEINEKEN","image":"https://i.pinimg.com/564x/de/f5/57/def557ba9b9a9c2e7f753facfc0f1c58.jpg","price":"4.99","category":"drinks"},
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

