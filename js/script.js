// The arrays
const list = [
  {
    "id": 1,
    "name": "Juicy Chicken Burger",
    "image": "https://i.ibb.co/0stWHsp/burger.png",
    "price": "12.99",
    "category": "meal",
    "description": "Sink your teeth into our succulent chicken burger, bursting with flavor and served with your choice of toppings.",
    "ingredients": ["Chicken breast", "Bun", "Lettuce", "Tomato", "Cheese", "Mayonnaise", "Pickles"],
    "quantity": 1,
    "total_with_quantity": "12.99"
  },
  {
    "id": 2,
    "name": "Crispy Chicken Tacos",
    "image": "https://i.pinimg.com/564x/bc/db/f5/bcdbf5d5572ddc4c097b02f2f55105e7.jpg",
    "price": "14.99",
    "category": "meal",
    "description": "Indulge in a crunchy delight with our crispy chicken tacos, topped with fresh salsa and creamy guacamole.",
    "ingredients": ["Chicken breast", "Tortilla", "Salsa", "Guacamole", "Lettuce", "Tomato", "Cheese"],
    "quantity": 1,
    "total_with_quantity": "14.99"
  },
  {
    "id": 3,
    "name": "Hot dog",
    "image": "https://i.pinimg.com/564x/a3/d9/34/a3d93497180e92e5ca7166141efdb493.jpg",
    "price": "9.99",
    "category": "meal",
    "description": "A classic favorite, our hot dog is grilled to perfection and topped with your favorite condiments for a satisfying bite.",
    "ingredients": ["Sausage", "Bun", "Ketchup", "Mustard", "Relish", "Onions", "Sauerkraut"],
    "quantity": 1,
    "total_with_quantity": "9.99"
  },
  {
    "id": 4,
    "name": "Sphagetti and meat sauce",
    "image": "https://i.pinimg.com/564x/17/58/c7/1758c7c884753155f802e50372103200.jpg",
    "price": "16.99",
    "category": "meal",
    "description": "Dive into a hearty bowl of spaghetti smothered in savory meat sauce, a timeless comfort food.",
    "ingredients": ["Spaghetti", "Ground beef", "Tomato sauce", "Onions", "Garlic", "Herbs"],
    "quantity": 1,
    "total_with_quantity": "16.99"
  },
  {
    "id": 5,
    "name": "Pizza",
    "image": "https://i.pinimg.com/564x/b9/a9/6c/b9a96c89d1348347524418f7056d7649.jpg",
    "price": "18.99",
    "category": "meal",
    "description": "Our pizza is topped with the finest ingredients and baked to perfection, offering a taste of Italy in every slice.",
    "ingredients": ["Dough", "Tomato sauce", "Mozzarella cheese", "Pepperoni", "Sausage", "Mushrooms", "Onions"],
    "quantity": 1,
    "total_with_quantity": "18.99"
  },
  {
    "id": 6,
    "name": "Fish and Chips",
    "image": "https://i.pinimg.com/736x/9a/02/8b/9a028b4e049e7c7ed4acc34a4b8ca5ef.jpg",
    "price": "17.99",
    "category": "meal",
    "description": "Enjoy a taste of the seaside with our crispy battered fish served alongside golden fries, a British classic.",
    "ingredients": ["Fish", "Batter", "Fries", "Tartar sauce"],
    "quantity": 1,
    "total_with_quantity": "17.99"
  },
  {
    "id": 7,
    "name": "Pumpkin Cookie Dough Ice-Cream",
    "image": "https://i.ibb.co/PQNYR03/pumpkin-coookie-dough-ice-cream.png",
    "price": "8.99",
    "category": "desert",
    "description": "Treat yourself to a creamy scoop of pumpkin-infused ice cream, studded with chunks of cookie dough.",
    "ingredients": ["Pumpkin ice cream", "Cookie dough", "Whipped cream"],
    "quantity": 1,
    "total_with_quantity": "8.99"
  },
  {
    "id": 8,
    "name": "Chocolate Oreo Pudding Delight",
    "image": "https://i.ibb.co/Tv85T1w/Chocolate-Oreo-Pudding-Delight.png",
    "price": "9.99",
    "category": "desert",
    "description": "Indulge your sweet tooth with layers of rich chocolate pudding and crushed Oreo cookies, a heavenly dessert.",
    "ingredients": ["Chocolate pudding", "Oreo cookies", "Whipped cream"],
    "quantity": 1,
    "total_with_quantity": "9.99"
  },
  {
    "id": 9,
    "name": "Crispy Chocolate Chip waffles",
    "image": "https://i.pinimg.com/564x/e3/5a/87/e35a87911dfd1aaf09a24d715c8b3fc2.jpg",
    "price": "7.99",
    "category": "desert",
    "description": "Start your day off right with our crispy waffles studded with chocolate chips, drizzled with maple syrup.",
    "ingredients": ["Waffle batter", "Chocolate chips", "Maple syrup", "Butter"],
    "quantity": 1,
    "total_with_quantity": "7.99"
  },
  {
    "id": 10,
    "name": "Old Fashioned Devils Food Cake",
    "image": "https://i.ibb.co/rZ5cRcy/devil-fruit-cake.png",
    "price": "11.99",
    "category": "desert",
    "description": "Satisfy your craving for chocolate with our decadent devil's food cake, rich and moist with a velvety frosting.",
    "ingredients": ["Chocolate cake", "Frosting", "Sugar", "Eggs", "Butter"],
    "quantity": 1,
    "total_with_quantity": "11.99"
  },
 {
    "id": 11,
    "name": "Peppermint Crisp Tart",
    "image": "https://i.ibb.co/Xy7sx4x/peppermint-crisp-tart.png",
    "price": "10.99",
    "category": "dessert",
    "description": "Refresh your palate with our cool and creamy peppermint crisp tart, a South African favorite.",
    "ingredients": ["Pastry crust", "Peppermint filling", "Chocolate", "Whipped cream"],
    "quantity": 1,
    "total_with_quantity": "10.99"
  },
  {
    "id": 12,
    "name": "Milk Tart",
    "image": "https://i.ibb.co/KKGhhGW/milktart.png",
    "price": "8.99",
    "category": "dessert",
    "description": "Delight in the creamy goodness of our traditional milk tart, with a hint of cinnamon in a buttery crust.",
    "ingredients": ["Pastry crust", "Milk", "Sugar", "Eggs", "Cinnamon"],
    "quantity": 1,
    "total_with_quantity": "8.99"
  },
  {
    "id": 13,
    "name": "Galaxy Cup cake",
    "image": "https://i.ibb.co/vPV03Qs/galaxy-cup-cake.png",
    "price": "6.99",
    "category": "dessert",
    "description": "Blast off into flavor with our out-of-this-world galaxy cupcake, topped with colorful swirls and edible glitter.",
    "ingredients": ["Cupcake", "Buttercream", "Food coloring", "Edible glitter"],
    "quantity": 1,
    "total_with_quantity": "6.99"
  },
  {
    "id": 14,
    "name": "Brownie Sundae",
    "image": "https://i.ibb.co/KhFYPzC/brownie-sundae.png",
    "price": "9.99",
    "category": "dessert",
    "description": "Indulge in the ultimate dessert experience with our fudgy brownie topped with scoops of ice cream, whipped cream, and chocolate sauce.",
    "ingredients": ["Brownie", "Ice cream", "Whipped cream", "Chocolate sauce"],
    "quantity": 1,
    "total_with_quantity": "9.99"
  },
  {
    "id": 15,
    "name": "Magnum Ice cream",
    "image": "https://i.ibb.co/db7g5wP/magnum-ice-cream.png",
    "price": "5.99",
    "category": "dessert",
    "description": "Treat yourself to a moment of luxury with our premium Magnum ice cream, coated in a thick layer of Belgian chocolate.",
    "ingredients": ["Ice cream", "Belgian chocolate"],
    "quantity": 1,
    "total_with_quantity": "5.99"
  },
  {
    "id": 16,
    "name": "Mini pizza",
    "image": "https://i.ibb.co/m6FFqcb/mini-pizza.png",
    "price": "8.99",
    "category": "starters",
    "description": "Enjoy a bite-sized version of our classic pizza, perfect for sharing or savoring all to yourself.",
    "ingredients": ["Dough", "Tomato sauce", "Mozzarella cheese", "Pepperoni", "Sausage", "Mushrooms", "Onions"],
    "quantity": 1,
    "total_with_quantity": "8.99"
  },
  {
    "id": 17,
    "name": "Sushi",
    "image": "https://i.ibb.co/GHwXN1F/sushi.png",
    "price": "12.99",
    "category": "starters",
    "description": "Experience the artistry of Japanese cuisine with our selection of fresh sushi, expertly crafted and bursting with flavor.",
    "ingredients": ["Sushi rice", "Fish", "Vegetables", "Seaweed"],
    "quantity": 1,
    "total_with_quantity": "12.99"
  },
  {
    "id": 18,
    "name": "Samoosas",
    "image": "https://i.ibb.co/LPggH7f/samoosa.png",
    "price": "9.99",
    "category": "starters",
    "description": "Delight in the crispy goodness of our savory samoosas, filled with spiced potatoes or minced meat, a beloved Indian snack.",
    "ingredients": ["Pastry", "Potatoes", "Minced meat", "Spices"],
    "quantity": 1,
    "total_with_quantity": "9.99"
  },
  {
    "id": 19,
    "name": "Wings",
    "image": "https://i.ibb.co/9hhxSnG/wings.png",
    "price": "14.99",
    "category": "starters",
    "description": "Get your hands dirty with our finger-licking chicken wings, coated in your choice of tangy sauce for the ultimate flavor explosion.",
    "ingredients": ["Chicken wings", "Sauce"],
    "quantity": 1,
    "total_with_quantity": "14.99"
  },
  {
    "id": 20,
    "name": "Beef skewers",
    "image": "https://i.ibb.co/hX9MNXC/beef-skewers.png",
    "price": "11.99",
    "category": "starters",
    "description": "Savor the smoky goodness of our tender beef skewers, marinated to perfection and grilled to juicy perfection.",
    "ingredients": ["Beef", "Marinade", "Skewers"],
    "quantity": 1,
    "total_with_quantity": "11.99"
  },
  {
    "id": 21,
    "name": "Chipotle Chicken Nachos with Jalapeño Yogurt",
    "image": "https://i.ibb.co/YtmJC9j/nachos.png",
    "price": "13.99",
    "category": "starters",
    "description": "Spice up your snack time with our loaded nachos topped with chipotle chicken and zesty jalapeño yogurt.",
    "ingredients": ["Tortilla chips", "Chipotle chicken", "Jalapeño yogurt", "Cheese", "Jalapeños"],
    "quantity": 1,
    "total_with_quantity": "13.99"
  },
  {
    "id": 22,
    "name": "Beef Burgers",
    "image": "https://i.ibb.co/7pyhHcB/beef-burgers.png",
    "price": "29.99",
    "category": "Special",
    "description": "Gather your friends and family for a feast with our pack of six juicy beef burgers, perfect for grilling up a storm.",
    "ingredients": ["Beef patties", "Buns", "Lettuce", "Tomato", "Cheese", "Pickles"],
    "quantity": 1,
    "total_with_quantity": "29.99"
  },
  {
    "id": 23,
    "name": "Custard & Jelly",
    "image": "https://i.ibb.co/dc8VyC1/custurad-and-jelly.png",
    "price": "19.99",
    "category": "Special",
    "description": "Enjoy a nostalgic treat with our classic custard and jelly cups, a sweet and creamy delight.",
    "ingredients": ["Custard", "Jelly"],
    "quantity": 1,
    "total_with_quantity": "19.99"
  },
  {
    "id": 24,
    "name": "Moroccan Chicken Wrap",
    "image": "https://i.ibb.co/3fwmZMK/moroccan-chicken-wraps.png",
    "price": "15.99",
    "category": "Special",
    "description": "Transport your taste buds to Morocco with our flavorful chicken wrap, filled with exotic spices and fresh ingredients.",
    "ingredients": ["Chicken", "Tortilla", "Spices", "Vegetables"],
    "quantity": 1,
    "total_with_quantity": "15.99"
  },
  {
    "id": 25,
    "name": "Raspberry smores Milkshake",
    "image": "https://i.ibb.co/Swt2fVG/Rasberry-milkshake.png",
    "price": "8.99",
    "category": "drink",
    "description": "Indulge in the nostalgic flavors of summer with our creamy raspberry milkshake, topped with gooey marshmallows and chocolate.",
    "ingredients": ["Raspberry ice cream", "Marshmallows", "Chocolate"],
    "quantity": 1,
    "total_with_quantity": "8.99"
  },
 {
      "id": 26,
      "name": "Chocolate Oreo Pudding Delight",
      "image": "https://i.ibb.co/Tv85T1w/Chocolate-Oreo-Pudding-Delight.png",
      "price": "9.99",
      "category": "dessert",
      "description": "Indulge your sweet tooth with layers of rich chocolate pudding and crushed Oreo cookies, a heavenly dessert.",
      "ingredients": ["Chocolate pudding", "Oreo cookies", "Whipped cream"],
      "quantity": 1,
      "total_with_quantity": "9.99"
    },
    {
      "id": 27,
      "name": "Texas Fried Chicken",
      "image": "https://i.pinimg.com/564x/0e/77/b2/0e77b2b589c4b0b69a6c4c40f62af936.jpg",
      "price": "29.99",
      "category": "Special",
      "description": "Savor the taste of the South with our Texas Fried Chicken, crispy on the outside and juicy on the inside, seasoned with a blend of special spices.",
      "ingredients": ["Chicken", "Flour", "Spices", "Oil"],
      "quantity": 1,
      "total_with_quantity": "29.99"
    },
    {
      "id": 28,
      "name": "Giant Beef Burger",
      "image": "https://i.pinimg.com/564x/44/b9/2f/44b92ff52badd98c4df45a80dbf9b69e.jpg",
      "price": "19.99",
      "category": "Special",
      "description": "Indulge in our Giant Beef Burger, a mouth-watering delight with a massive beef patty, fresh vegetables, and a soft bun.",
      "ingredients": ["Beef patty", "Bun", "Lettuce", "Tomato", "Cheese", "Pickles"],
      "quantity": 1,
      "total_with_quantity": "19.99"
    },    
    {
      "id": 29,
      "name": "Creamy Garlic Chicken",
      "image": "https://i.pinimg.com/564x/cb/16/2b/cb162be2b7a20bce1a6b11119dde0a00.jpg",
      "price": "15.99",
      "category": "Special",
      "description": "Enjoy a rich and flavorful creamy garlic chicken dish, cooked to perfection with tender chicken breasts in a delicious garlic cream sauce.",
      "ingredients": ["Chicken", "Garlic", "Cream", "Herbs", "Spices"],
      "quantity": 1,
      "total_with_quantity": "15.99"
    },    
    {
      "id": 30,
      "name": "Blueberry Pancake",
      "image": "https://i.postimg.cc/VLXMKQ0W/blue-berry-pancake.jpg",
      "price": "5.99",
      "category": "dessert",
      "description": "Fluffy pancakes topped with fresh blueberries and a drizzle of maple syrup.",
      "ingredients": ["Flour", "Blueberries", "Maple syrup", "Eggs", "Milk", "Baking powder"],
      "quantity": 1,
      "total_with_quantity": "5.99"
    },
    {
      "id": 31,
      "name": "Carrot Soup",
      "image": "https://i.postimg.cc/RhkFcFTx/carrot-soup.jpg",
      "price": "4.99",
      "category": "meal",
      "description": "A warm and comforting bowl of creamy carrot soup.",
      "ingredients": ["Carrots", "Onions", "Garlic", "Vegetable broth", "Cream", "Spices"],
      "quantity": 1,
      "total_with_quantity": "4.99"
    },
    {
      "id": 32,
      "name": "Cherry Sundae",
      "image": "https://i.postimg.cc/8PgfJKXJ/cherry-sundae.jpg",
      "price": "6.99",
      "category": "dessert",
      "description": "A delightful sundae topped with cherries and whipped cream.",
      "ingredients": ["Ice cream", "Cherries", "Whipped cream", "Cherry syrup"],
      "quantity": 1,
      "total_with_quantity": "6.99"
    },
    {
      "id": 33,
      "name": "Chicken Alfredo Sauce",
      "image": "https://i.postimg.cc/Jn9DQP1F/chicken-alfedo-sauce.jpg",
      "price": "12.99",
      "category": "meal",
      "description": "A creamy Alfredo sauce with tender chicken pieces.",
      "ingredients": ["Chicken", "Cream", "Parmesan cheese", "Garlic", "Butter", "Pasta"],
      "quantity": 1,
      "total_with_quantity": "12.99"
    },
    {
      "id": 34,
      "name": "Chocolate and Oreo Donuts",
      "image": "https://i.postimg.cc/nL3h3T1k/chocolate-and-oreo-donuts.jpg",
      "price": "3.99",
      "category": "dessert",
      "description": "Delicious donuts topped with chocolate glaze and Oreo crumbs.",
      "ingredients": ["Flour", "Sugar", "Cocoa powder", "Oreo cookies", "Butter", "Eggs"],
      "quantity": 1,
      "total_with_quantity": "3.99"
    },
    {
      "id": 35,
      "name": "Chocolate Chip Cookie Sandwich",
      "image": "https://i.postimg.cc/zBMXrB6H/chocolate-chip-cookie-sandwich.jpg",
      "price": "2.99",
      "category": "dessert",
      "description": "Two chocolate chip cookies with a creamy filling in between.",
      "ingredients": ["Chocolate chips", "Flour", "Sugar", "Butter", "Eggs", "Cream"],
      "quantity": 1,
      "total_with_quantity": "2.99"
    },
    {
      "id": 36,
      "name": "Chocolate Chip Muffins",
      "image": "https://i.postimg.cc/v8g566Qj/chocolate-chip-muffins.jpg",
      "price": "3.49",
      "category": "dessert",
      "description": "Moist muffins loaded with chocolate chips.",
      "ingredients": ["Chocolate chips", "Flour", "Sugar", "Butter", "Eggs", "Baking powder"],
      "quantity": 1,
      "total_with_quantity": "3.49"
    },
    {
      "id": 37,
      "name": "Classic Philly Cheese Steak",
      "image": "https://i.postimg.cc/d0VyQhH5/Classic-Philly-cheesesteak.jpg",
      "price": "8.99",
      "category": "meal",
      "description": "A classic Philly cheese steak with tender beef and melted cheese.",
      "ingredients": ["Beef", "Cheese", "Onions", "Bell peppers", "Hoagie roll"],
      "quantity": 1,
      "total_with_quantity": "8.99"
    },
    {
      "id": 38,
      "name": "Full English Breakfast",
      "image": "https://i.postimg.cc/bwTnjxTG/Full-english-breakfast.jpg",
      "price": "10.99",
      "category": "breakfast",
      "description": "A hearty full English breakfast with eggs, bacon, sausages, and more.",
      "ingredients": ["Eggs", "Bacon", "Sausages", "Baked beans", "Tomatoes", "Mushrooms"],
      "quantity": 1,
      "total_with_quantity": "10.99"
    },
    {
      "id": 39,
      "name": "Grilled Chicken Tikka Sandwich",
      "image": "https://i.postimg.cc/Nf8916ZN/Grilled-Chicken-Tikka-sandwich.jpg",
      "price": "7.99",
      "category": "meal",
      "description": "A spicy grilled chicken tikka sandwich with fresh vegetables.",
      "ingredients": ["Chicken", "Spices", "Bread", "Lettuce", "Tomato", "Onion"],
      "quantity": 1,
      "total_with_quantity": "7.99"
    },
    {
      "id": 40,
      "name": "Lasagna",
      "image": "https://i.postimg.cc/tT1nPLHP/Lasagna.jpg",
      "price": "9.99",
      "category": "meal",
      "description": "A classic Italian lasagna with layers of pasta, meat sauce, and cheese.",
      "ingredients": ["Pasta", "Ground beef", "Tomato sauce", "Cheese", "Bechamel sauce"],
      "quantity": 1,
      "total_with_quantity": "9.99"
    },
    {
      "id": 41,
      "name": "Master Meal",
      "image": "https://i.postimg.cc/YSrSNTQ0/master-meal.jpg",
      "price": "14.99",
      "category": "meal",
      "description": "A hearty meal with sausages, cheese toast, potato fries, ribs, and a drumstick.",
      "ingredients": ["Sausages", "Cheese toast", "Potato fries", "Ribs", "Drumstick"],
      "quantity": 1,
      "total_with_quantity": "14.99"
    },
    {
      "id": 42,
      "name": "Oreo Cupcake",
      "image": "https://i.postimg.cc/c6Gxvzss/oreo-cupcakes.jpg",
      "price": "3.99",
      "category": "dessert",
      "description": "Moist cupcakes topped with Oreo crumbs and a creamy frosting.",
      "ingredients": ["Flour", "Sugar", "Butter", "Eggs", "Oreo cookies", "Frosting"],
      "quantity": 1,
      "total_with_quantity": "3.99"
    },
    {
      "id": 43,
      "name": "Peanut Butter Brownies",
      "image": "https://i.postimg.cc/KcwRXqhp/peanut-butter-brownies.jpg",
      "price": "4.49",
      "category": "dessert",
      "description": "Rich brownies with a swirl of peanut butter.",
      "ingredients": ["Chocolate", "Peanut butter", "Flour", "Sugar", "Butter", "Eggs"],
      "quantity": 1,
      "total_with_quantity": "4.49"
    },
    {
      "id": 44,
      "name": "Ribs and Mashed Potatoes",
      "image": "https://i.postimg.cc/9QtM7cRs/rib-and-mash-potatoes.jpg",
      "price": "11.99",
      "category": "meal",
      "description": "Tender ribs served with creamy mashed potatoes.",
      "ingredients": ["Ribs", "Potatoes", "Butter", "Cream", "Spices"],
      "quantity": 1,
      "total_with_quantity": "11.99"
    },
    {
      "id": 45,
      "name": "Ribs Burger",
      "image": "https://i.postimg.cc/7ZDzcsg8/rib-burger.jpg",
      "price": "8.49",
      "category": "meal",
      "description": "A juicy burger with tender rib meat and BBQ sauce.",
      "ingredients": ["Rib meat", "Burger bun", "BBQ sauce", "Lettuce", "Tomato"],
      "quantity": 1,
      "total_with_quantity": "8.49"
    },
    {
      "id": 46,
      "name": "Roasted Butternut Soup",
      "image": "https://i.postimg.cc/fTdkMcwz/Roasted-butternut-soup.jpg",
      "price": "4.99",
      "category": "meal",
      "description": "A creamy soup made with roasted butternut squash.",
      "ingredients": ["Butternut squash", "Onions", "Garlic", "Vegetable broth", "Cream"],
      "quantity": 1,
      "total_with_quantity": "4.99"
    },
    {
      "id": 47,
      "name": "Rotisserie Chicken Noodle Soup",
      "image": "https://i.postimg.cc/BnGbbj6x/Rotisserie-chicken-noodle-soup.jpg",
      "price": "5.99",
      "category": "meal",
      "description": "A comforting soup with rotisserie chicken and noodles.",
      "ingredients": ["Chicken", "Noodles", "Carrots", "Celery", "Chicken broth"],
      "quantity": 1,
      "total_with_quantity": "5.99"
    },
    {
      "id": 48,
      "name": "Spaghetti and Meatballs",
      "image": "https://i.postimg.cc/Gpgs4b6d/sphaghetti-and-meatballs.jpg",
      "price": "8.99",
      "category": "meal",
      "description": "Classic spaghetti served with homemade meatballs.",
      "ingredients": ["Spaghetti", "Ground beef", "Tomato sauce", "Parmesan cheese", "Garlic"],
      "quantity": 1,
      "total_with_quantity": "8.99"
    },
    {
      "id": 49,
      "name": "Strawberry Glazed Donuts",
      "image": "https://i.postimg.cc/QCTNxDZ4/strawberry-glazed-donuts.jpg",
      "price": "2.99",
      "category": "dessert",
      "description": "Fluffy donuts topped with a sweet strawberry glaze.",
      "ingredients": ["Flour", "Sugar", "Strawberries", "Butter", "Eggs"],
      "quantity": 1,
      "total_with_quantity": "2.99"
    },
    {
      "id": 50,
      "name": "Strawberry Pancakes",
      "image": "https://i.postimg.cc/L4cLk65s/strawberry-pancakes.jpg",
      "price": "5.99",
      "category": "dessert",
      "description": "Fluffy pancakes topped with fresh strawberries and a drizzle of syrup.",
      "ingredients": ["Flour", "Strawberries", "Maple syrup", "Eggs", "Milk", "Baking powder"],
      "quantity": 1,
      "total_with_quantity": "5.99"
    },
    {
      "id": 51,
      "name": "The Vegan Rou Jia Mo - Chinese Hamburger",
      "image": "https://i.postimg.cc/kGKVYKGg/The-vegan-Rou-Jia-Mo-Chinese-Hamburger.jpg",
      "price": "7.99",
      "category": "meal",
      "description": "A delicious vegan Chinese hamburger with a savory filling.",
      "ingredients": ["Bun", "Vegan meat", "Spices", "Vegetables"],
      "quantity": 1,
      "total_with_quantity": "7.99"
    },
      {
        "id": 52,
        "name": "Lotus Biscoff Cheesecake",
        "image": "https://i.pinimg.com/564x/4b/08/93/4b0893b63940a3a2b1366b4ef9492c02.jpg",
        "price": "7.99",
        "category": "dessert",
        "description": "A creamy cheesecake with a Lotus Biscoff crust and topping, perfect for dessert lovers.",
        "ingredients": ["Cream cheese", "Lotus Biscoff biscuits", "Butter", "Sugar", "Vanilla extract"],
        "quantity": 1,
        "total_with_quantity": "7.99"
      },
      {
        "id": 53,
        "name": "Super Moist Banana Bread",
        "image": "https://i.pinimg.com/564x/e0/bd/60/e0bd600d32022d76c5f2281ecf3a7579.jpg",
        "price": "5.99",
        "category": "dessert",
        "description": "Deliciously moist banana bread with a rich banana flavor and soft texture.",
        "ingredients": ["Bananas", "Flour", "Sugar", "Butter", "Eggs", "Baking soda"],
        "quantity": 1,
        "total_with_quantity": "5.99"
      },
      {
        "id": 54,
        "name": "Carrot Cake",
        "image": "https://i.pinimg.com/736x/8e/1d/d2/8e1dd2a46d39b93fc8d11b15dcf1abd0.jpg",
        "price": "6.99",
        "category": "dessert",
        "description": "A classic carrot cake with cream cheese frosting, filled with shredded carrots and spices.",
        "ingredients": ["Carrots", "Flour", "Sugar", "Butter", "Eggs", "Cinnamon", "Cream cheese"],
        "quantity": 1,
        "total_with_quantity": "6.99"
      },
      {
        "id": 55,
        "name": "Fruit Cake",
        "image": "https://i.pinimg.com/564x/f3/5f/f0/f35ff0d432c5cb4411c9a8a62aa1c796.jpg",
        "price": "7.49",
        "category": "dessert",
        "description": "A rich and moist fruit cake packed with dried fruits and nuts.",
        "ingredients": ["Dried fruits", "Nuts", "Flour", "Sugar", "Butter", "Eggs", "Spices"],
        "quantity": 1,
        "total_with_quantity": "7.49"
      },
      {
        "id": 56,
        "name": "Creamy Vegan Tiramisu Cheesecake",
        "image": "https://i.pinimg.com/564x/e9/23/ec/e923ec0370edb18b16a2d9a6a0563a1e.jpg",
        "price": "8.99",
        "category": "dessert",
        "description": "A vegan version of the classic tiramisu cheesecake with a creamy coffee-flavored filling.",
        "ingredients": ["Vegan cream cheese", "Coffee", "Cocoa powder", "Vegan biscuits", "Coconut cream"],
        "quantity": 1,
        "total_with_quantity": "8.99"
      },
      {
        "id": 57,
        "name": "Cherry Cheesecake",
        "image": "https://i.pinimg.com/564x/05/9f/2f/059f2f570464889d15e46b6c7d6545cb.jpg",
        "price": "7.99",
        "category": "dessert",
        "description": "A delicious cheesecake topped with sweet cherry compote.",
        "ingredients": ["Cream cheese", "Cherry compote", "Graham crackers", "Butter", "Sugar", "Vanilla extract"],
        "quantity": 1,
        "total_with_quantity": "7.99"
      },
      {
        "id": 58,
        "name": "Mean Steak Sandwich",
        "image": "https://i.pinimg.com/564x/7e/7d/3f/7e7d3f704ac553de46c6925825869970.jpg",
        "price": "9.99",
        "category": "meal",
        "description": "A hearty steak sandwich with tender beef, melted cheese, and fresh veggies.",
        "ingredients": ["Beef steak", "Cheese", "Bread", "Lettuce", "Tomato", "Onion"],
        "quantity": 1,
        "total_with_quantity": "9.99"
      },
      {
        "id": 59,
        "name": "Juicy and Tender Pork Tenderloin Roast",
        "image": "https://i.pinimg.com/564x/7b/3d/b5/7b3db50599f4d96068bd67c7e2312ba8.jpg",
        "price": "12.99",
        "category": "meal",
        "description": "A perfectly roasted pork tenderloin that's juicy and full of flavor.",
        "ingredients": ["Pork tenderloin", "Garlic", "Herbs", "Olive oil", "Spices"],
        "quantity": 1,
        "total_with_quantity": "12.99"
      },
      {
        "id": 60,
        "name": "Roasted Chicken with Garlic Herb Butter",
        "image": "https://i.pinimg.com/564x/d3/07/2a/d3072adbd91ba3094777720a1337a34a.jpg",
        "price": "14.99",
        "category": "meal",
        "description": "A succulent roasted chicken with a flavorful garlic herb butter.",
        "ingredients": ["Chicken", "Garlic", "Herbs", "Butter", "Lemon"],
        "quantity": 1,
        "total_with_quantity": "14.99"
      },
      {
        "id": 61,
        "name": "Rice with Chicken and Mushroom Sauce",
        "image": "https://i.pinimg.com/564x/18/d6/67/18d66710aea02d29b62da1564c4e2f59.jpg",
        "price": "11.99",
        "category": "meal",
        "description": "A comforting dish of rice topped with chicken and a creamy mushroom sauce.",
        "ingredients": ["Rice", "Chicken", "Mushrooms", "Cream", "Onions", "Garlic"],
        "quantity": 1,
        "total_with_quantity": "11.99"
      },
      {
        "id": 62,
        "name": "Creamy Chicken Pie",
        "image": "https://i.pinimg.com/564x/e6/e3/3d/e6e33dcee3be9c9044be11bae6075170.jpg",
        "price": "13.99",
        "category": "meal",
        "description": "A rich and creamy chicken pie with a flaky crust.",
        "ingredients": ["Chicken", "Pastry", "Cream", "Vegetables", "Herbs"],
        "quantity": 1,
        "total_with_quantity": "13.99"
      },
      {
        "id": 63,
        "name": "British Breakfast",
        "image": "https://i.pinimg.com/564x/3b/6f/de/3b6fde8f771c0213a74218a161914267.jpg",
        "price": "10.99",
        "category": "breakfast",
        "description": "A traditional British breakfast with eggs, bacon, sausages, beans, and toast.",
        "ingredients": ["Eggs", "Bacon", "Sausages", "Baked beans", "Toast"],
        "quantity": 1,
        "total_with_quantity": "10.99"
      },
      {
        "id": 64,
        "name": "Steamed Bread and Tripe",
        "image": "https://i.pinimg.com/564x/db/ca/9c/dbca9cb0aa68bdd17e5b0eccf8f6ca7b.jpg",
        "price": "8.99",
        "category": "meal",
        "description": "A traditional dish of steamed bread served with flavorful tripe.",
        "ingredients": ["Bread", "Tripe", "Spices", "Herbs"],
        "quantity": 1,
        "total_with_quantity": "8.99"
      },
      {
        "id": 65,
        "name": "South African Seven Colours Meal",
        "image": "https://i.pinimg.com/564x/89/7c/de/897cde8333c1a918bbdc00d94323cde7.jpg",
        "price": "15.99",
        "category": "meal",
        "description": "A vibrant meal with creamy spinach, potato salad, beetroot, beef stew, samp, and bean salad.",
        "ingredients": ["Creamy spinach", "Potato salad", "Beetroot", "Beef stew", "Samp", "Bean salad"],
        "quantity": 1,
        "total_with_quantity": "15.99"
      } , 
      {
        "id": 66,
        "name": "Oreo and Cream Milkshake",
        "image": "https://i.pinimg.com/564x/65/18/58/65185813a04d1cfc911fa92644ec0de7.jpg",
        "price": "5.99",
        "category": "drink",
        "description": "A delicious blend of Oreo cookies and creamy vanilla ice cream, topped with whipped cream and more Oreo crumbles.",
        "ingredients": ["Oreo cookies", "Vanilla ice cream", "Milk", "Whipped cream"],
        "quantity": 1,
        "total_with_quantity": "5.99"
      },
      {
        "id": 67,
        "name": "Butterscotch Milkshake",
        "image": "https://i.pinimg.com/564x/28/90/3f/28903fa9949d795384fe0d9964f7d7a9.jpg",
        "price": "5.99",
        "category": "drink",
        "description": "A smooth and creamy butterscotch milkshake topped with whipped cream and butterscotch drizzle.",
        "ingredients": ["Butterscotch syrup", "Vanilla ice cream", "Milk", "Whipped cream"],
        "quantity": 1,
        "total_with_quantity": "5.99"
      },
      {
        "id": 68,
        "name": "Mint Julep Milkshake",
        "image": "https://i.pinimg.com/564x/99/c0/ca/99c0ca9af395b285a87c06dd60d4a9cb.jpg",
        "price": "5.99",
        "category": "drink",
        "description": "A refreshing mint-flavored milkshake with a hint of vanilla, topped with whipped cream and a sprig of mint.",
        "ingredients": ["Mint syrup", "Vanilla ice cream", "Milk", "Whipped cream"],
        "quantity": 1,
        "total_with_quantity": "5.99"
      },
      {
        "id": 69,
        "name": "Red Velvet Milkshake",
        "image": "https://i.pinimg.com/564x/82/0c/99/820c9955aaa6c9a3afc9f6761def4492.jpg",
        "price": "5.99",
        "category": "drink",
        "description": "A rich and creamy red velvet milkshake with a hint of cocoa, topped with whipped cream and red velvet crumbs.",
        "ingredients": ["Red velvet cake mix", "Vanilla ice cream", "Milk", "Whipped cream"],
        "quantity": 1,
        "total_with_quantity": "5.99"
      },
      {
        "id": 70,
        "name": "Mango Milkshake",
        "image": "https://i.pinimg.com/564x/aa/c8/e7/aac8e7495442ea137e4b6d81354d4876.jpg",
        "price": "5.99",
        "category": "drink",
        "description": "A tropical mango milkshake made with fresh mangoes and creamy vanilla ice cream, topped with whipped cream.",
        "ingredients": ["Fresh mango", "Vanilla ice cream", "Milk", "Whipped cream"],
        "quantity": 1,
        "total_with_quantity": "5.99"
      },
      {
        "id": 71,
        "name": "Coca-Cola",
        "image": "https://i.pinimg.com/564x/0a/8b/2b/0a8b2bfeb8bfbd3dc3eacbe79df20c1e.jpg",
        "price": "1.99",
        "category": "drink",
        "description": "A classic, refreshing Coca-Cola served ice-cold.",
        "ingredients": ["Coca-Cola"],
        "quantity": 1,
        "total_with_quantity": "1.99"
      },
      {
        "id": 72,
        "name": "Blueberry Cream Soda Floats",
        "image": "https://i.pinimg.com/564x/14/c8/57/14c85735ebbe794a78e54b39c4582ead.jpg",
        "price": "4.99",
        "category": "drink",
        "description": "A delightful blueberry cream soda float made with blueberry soda and vanilla ice cream, topped with whipped cream.",
        "ingredients": ["Blueberry soda", "Vanilla ice cream", "Whipped cream"],
        "quantity": 1,
        "total_with_quantity": "4.99"
      },
      {
        "id": 73,
        "name": "Caramel Frappuccino",
        "image": "https://i.pinimg.com/564x/e6/e3/bd/e6e3bd8ec20ced2cf3d2c1791e9f7835.jpg",
        "price": "5.99",
        "category": "drink",
        "description": "A rich and creamy caramel frappuccino blended with ice, topped with whipped cream and caramel drizzle.",
        "ingredients": ["Caramel syrup", "Coffee", "Milk", "Ice", "Whipped cream"],
        "quantity": 1,
        "total_with_quantity": "5.99"
      },
      {
        "id": 74,
        "name": "Onion Rings",
        "image": "https://i.pinimg.com/564x/74/73/18/747318b324d82ce7abc289ab51d3021d.jpg",
        "price": 4.99,
        "category": "starters",
        "description": "Crispy onion rings breaded and fried to a golden brown, served with tangy dipping sauce.",
        "ingredients": [
        "Onions",
        "Breading mixture",
        "Vegetable oil",
        "Dipping sauce"
        ],
        "quantity": 1,
        "total_with_quantity": 4.99
        },
        {
          "id": 75,
          "name": "Fried Zucchini Fries",
          "image": "https://i.pinimg.com/564x/12/4f/0c/124f0ce301276769471f7711891d57e1.jpg",
          "price": 5.49,
          "category": "starters",
          "description": "Thinly sliced zucchinis breaded and fried to a crispy golden brown, served with ranch dressing.",
          "ingredients": [
          "Zucchinis",
          "Breading mixture",
          "Vegetable oil",
          "Ranch dressing"
          ],
          "quantity": 1,
          "total_with_quantity": 5.49,
          "optionalToppings": [
          "Parmesan cheese",
          "Garlic aioli",
          "Marinara sauce"
          ]
          },
          {
            "id": 76,
            "name": "Grilled Shrimp Skewers",
            "image": "https://i.pinimg.com/564x/1a/6d/ea/1a6dea52a8a3d263686bc06ba21ec6bf.jpg",
            "price": 12.99,
            "category": "starters",
            "description": "Succulent shrimp marinated in tropical spices, grilled to perfection.",
            "ingredients": [
            "Shrimp",
            "Pineapple",
            "Onion",
            "Bell pepper",
            "Tropical spices"
            ],
            "quantity": 1,
            "total_with_quantity": 12.99
            }
,
            {
            "id": 77,
            "name": "Steamed Mussels",
            "image": "https://i.pinimg.com/564x/9e/88/5f/9e885fcb081c32dcb56f4a4b43e66d73.jpg",
            "price": 10.99,
            "category": "starters",
            "description": "Freshly harvested mussels steamed in white wine, garlic, and lemon.",
            "ingredients": [
            "Mussels",
            "White wine",
            "Garlic",
            "Lemon",
            "Herbs"
            ],
            "quantity": 1,
            "total_with_quantity": 10.99
            }
          ,
            {
            "id": 78,
            "name": "Fish Cakes",
            "image": "https://i.pinimg.com/564x/95/7e/96/957e9677be13f22e834886bd883a2f88.jpg",
            "price": 9.99,
            "category": "starters",
            "description": "Crispy fish cakes filled with cod, salmon, and spices, served with tartar sauce.",
            "ingredients": [
            "Cod",
            "Salmon",
            "Panko breadcrumbs",
            "Spices",
            "Tartar sauce"
            ],
            "quantity": 1,
            "total_with_quantity": 9.99
            }
            ,
            {
            "id": 79,
            "name": "Crab Cakes",
            "image": "https://i.pinimg.com/564x/2c/b2/d8/2cb2d851b94aed48a6a91fe7beefcb56.jpg",
            "price": 14.99,
            "category": "starters",
            "description": "Jumbo lump crab meat mixed with spices and pan-seared to perfection.",
            "ingredients": [
            "Jumbo lump crab meat",
            "Panko breadcrumbs",
            "Spices",
            "Lemon",
            "Old Bay"
            ],
            "quantity": 1,
            "total_with_quantity": 14.99
            },
            
            {
            "id": 80,
            "name": "Lobster Rolls",
            "image": "https://i.pinimg.com/736x/b5/b9/db/b5b9db550dede3bdb5fa8e08b4a3baba.jpg)",
            "price": 24.99,
            "category": "meal",
            "description": "Fresh lobster meat served on a toasted, split-top bun with lemon butter.",
            "ingredients": [
            "Lobster meat",
            "Butter",
            "Lemon",
            "Letuce",
            "Tomato"
            ],
            "quantity": 1,
            "total_with_quantity": 24.99
            },

{
"id": 81,
"name": "Avocado Toast",
"image": "https://i.pinimg.com/564x/40/c9/6d/40c96d4016f5e7bbd52910952bb10b0b.jpg",
"price": 7.99,
"category": "breakfast",
"description": "Toasted sourdough topped with mashed avocado, cherry tomatoes, and feta cheese.",
"ingredients": [
"Avocado",
"Sourdough bread",
"Cherry tomatoes",
"Feta cheese",
"Spinach"
],
"quantity": 1,
"total_with_quantity": 7.99
}

,

{
"id": 82,
"name": "Eggs Benedict",
"image": "https://i.pinimg.com/736x/5f/97/1f/5f971fed8fcb8872e600ced5d303aaf3.jpg",
"price": 12.99,
"category": "breakfast",
"description": "Poached eggs on toasted English muffins with smoked salmon and hollandaise sauce.",
"ingredients": [
"Eggs",
"English muffins",
"Smoked salmon",
"Hollandaise sauce",
"Spinach"
],
"quantity": 1,
"total_with_quantity": 12.99
}

,

{
"id": 83,
"name": "Blueberry Pancakes",
"image": "https://i.pinimg.com/564x/7c/96/c3/7c96c322e4c6cc7943fe54433f298728.jpg",
"price": 8.99,
"category": "breakfast",
"description": "Fluffy pancakes loaded with fresh blueberries and topped with maple syrup.",
"ingredients": [
"Pancake mix",
"Blueberries",
"Maple syrup",
"Butter",
"Whipped cream"
],
"quantity": 1,
"total_with_quantity": 8.99
}

,
{
"id": 84,
"name": "Breakfast Burrito",
"image": "https://i.pinimg.com/564x/16/08/74/160874a812e98adc6dfeacae874ab98e.jpg",
"price": 9.99,
"category": "breakfast",
"description": "Scrambled eggs, chorizo, black beans, and cheddar wrapped in a flour tortilla.",
"ingredients": [
"Eggs",
"Chorizo",
"Black beans",
"Cheddar cheese",
"Flour tortilla"
],
"quantity": 1,
"total_with_quantity": 9.99
}
,
{
"id": 85,
"name": "Cinnamon French Toast",
"image": "https://i.pinimg.com/564x/e3/73/a4/e373a4d2e285be26785035d1afaa16f4.jpg",
"price": 10.99,
"category": "breakfast",
"description": "Thick-cut brioche dipped in cinnamon egg batter and grilled to perfection.",
"ingredients": [
"Brioche bread",
"Eggs",
"Cinnamon",
"Maple syrup",
"Whipped cream"
],
"quantity": 1,
"total_with_quantity": 10.99
},
{
"id": 86,
"name": "Caramel Macchiato",
"image": "https://i.pinimg.com/564x/3e/ac/51/3eac51b6557e961b454f1f72d9d7c2be.jpg",
"price": 4.99,
"category": "drink",
"description": "Espresso, vanilla syrup, and caramel sauce topped with whipped cream.",
"ingredients": [
"Espresso",
"Vanilla syrup",
"Caramel sauce",
"Whipped cream"
],
"quantity": 1,
"total_with_quantity": 4.99
}
,
{
"id": 87,
"name": "Mango Smoothie",
"image": "https://i.pinimg.com/564x/d2/2c/49/d22c49a7b5309f97eb57e0dda6304a1b.jpg",
"price": 5.99,
"category": "drink",
"description": "Fresh mango blended with yogurt and honey.",
"ingredients": [
"Mango",
"Yogurt",
"Honey",
"Ice"
],
"quantity": 1,
"total_with_quantity": 5.99
}
,
{
"id": 88,
"name": "Iced Tea",
"image": "https://i.pinimg.com/736x/c9/3d/bf/c93dbfd5325ea8ac9edce0300f4fce11.jpg",
"price": 2.99,
"category": "drink",
"description": "Brewed tea served over ice.",
"ingredients": [
"Tea",
"Ice"
],
"quantity": 1,
"total_with_quantity": 2.99
}
,
{
"id": 89,
"name": "Piña Colada",
"image": "https://i.pinimg.com/564x/55/61/45/556145eeaca3b537ad1758331e32496e.jpg",
"price": 7.99,
"category": "drink",
"description": "Pineapple juice, coconut cream, and rum blended together.",
"ingredients": [
"Pineapple juice",
"Coconut cream",
"Rum",
"Pineapple wedge"
],
"quantity": 1,
"total_with_quantity": 7.99
}
,
{
"id": 90,
"name": "Hot Chocolate",
"image": "https://i.pinimg.com/564x/cd/d3/db/cdd3db84880274327145aff48c0a3806.jpg",
"price": 3.99,
"category": "hot drink",
"description": "Rich chocolate mixed with steamed milk.",
"ingredients": [
"Chocolate syrup",
"Steamed milk",
"Whipped cream"
],
"quantity": 1,
"total_with_quantity": 3.99
}       
          
]
const review = [
  {
    id: 1,
    pic: 'https://i.pinimg.com/564x/19/b6/fa/19b6fa6c5ebfadd4945c70afe89f169d.jpg',
    name: 'John Doe',
    text: 'The food was absolutely delicious! Each dish was bursting with flavor and beautifully presented. Highly recommend this place!'
  },
  {
    id: 2,
    pic: 'https://i.pinimg.com/564x/2e/f1/13/2ef1137288bbc3b64e69641fc9ed8e3b.jpg',
    name: 'Alice Smith',
    text: 'A delightful dining experience. The service was excellent, and the ambiance was perfect for a relaxing meal. The desserts were to die for!'
  },
  {
    id: 3,
    pic: 'https://i.pinimg.com/564x/58/c4/3e/58c43e39ff83153804dc302d0f3dae6c.jpg',
    name: 'Bob Johnson',
    text: 'This restaurant exceeded all my expectations. The ingredients were fresh, and the menu offered a great variety of options. Will definitely return.'
  },
  {
    id: 4,
    pic: 'https://i.pinimg.com/564x/f4/59/47/f4594755648ce1257f05dc24eed40db2.jpg',
    name: 'Emily Davis',
    text: 'Loved the cozy atmosphere and the friendly staff. The appetizers were amazing, and the main courses were cooked to perfection. A must-visit!'
  },
  {
    id: 5,
    pic: 'https://i.pinimg.com/564x/de/cc/e0/decce044ca6c600c82b3052c934a1527.jpg',
    name: 'Michael Brown',
    text: 'A culinary gem! The chef’s special was a highlight, and the wine selection complemented the meal perfectly. Looking forward to my next visit.'
  },
  {
    id: 6,
    pic: 'https://i.pinimg.com/564x/d0/ba/21/d0ba21bb168f59257a67abaa2a19a478.jpg',
    name: 'Olivia Thompson',
    text: 'Great value for money. The portions were generous, and the quality of the food was top-notch. The staff made us feel very welcome.'
  },
  {
    id: 7,
    pic: 'https://i.pinimg.com/564x/46/95/34/469534220723f31ca234d26cd71a05af.jpg',
    name: ' Ethan Patel',
    text: 'An unforgettable dining experience. The flavors were exquisite, and the presentation was artful. The service was attentive and friendly.'
  },
  {
    id: 8,
    pic: 'https://i.pinimg.com/564x/df/51/07/df5107a44a4fc5a18535137aee49bdf2.jpg',
    name: 'Ava Morales',
    text: 'This place never disappoints! The food is consistently excellent, and the staff always go above and beyond to ensure a great experience.'
  },
  {
    id: 9,
    pic: 'https://i.pinimg.com/564x/72/d7/cc/72d7cc32e51ef9c829011bb9bf84f36a.jpg',
    name: 'Liam Reynolds',
    text: 'Had a fantastic meal here. The atmosphere was warm and inviting, and the dishes were full of flavor. Will definitely be coming back.'
  },
  {
    id: 10,
    pic: 'https://i.pinimg.com/564x/f6/c3/f6/f6c3f678154c65d4fc6d0a3816c871e2.jpg',
    name: 'Sophia Rodriguez',
    text: 'Amazing food and great service! The pasta dishes were particularly outstanding. A wonderful place for a special occasion.'
  },
  {
    id: 11,
    pic: 'https://i.pinimg.com/564x/28/b5/a4/28b5a42ec108821f8a16acaafd96bba4.jpg',
    name: 'Noah Brooks',
    text: 'The best dining experience I’ve had in a long time. The flavors were unique and memorable, and the staff were incredibly welcoming.'
  },
  {
    id: 12,
    pic: 'https://i.pinimg.com/564x/50/c8/5a/50c85add95a0c88e0b2b63f8cf4fcdf8.jpg',
    name: 'Mia Wallace',
    text: 'Excellent food, great service, and a lovely atmosphere. The seafood dishes were particularly impressive. Highly recommend!'
  },
  {
    id: 13,
    pic: 'https://i.pinimg.com/564x/a9/b2/fd/a9b2fdb12dcf8a29b82b1ba291bcefac.jpg',
    name: 'Logan Price',
    text: 'A fantastic restaurant with delicious food and wonderful service. The ambiance was perfect, and the desserts were a real treat.'
  },
  {
    id: 14,
    pic: 'https://i.pinimg.com/564x/19/e1/e9/19e1e91b0fec6d356c06aec57d98b4e0.jpg',
    name: 'Isabella Sanchez',
    text: 'Absolutely loved everything about this place. The food was fresh and flavorful, and the staff were friendly and attentive.'
  },
  {
    id: 15,
    pic: 'https://i.pinimg.com/564x/22/01/12/220112ce9c3967e2022ce13673a9d4f6.jpg',
    name: 'Alexander Lee',
    text: 'One of the best dining experiences I’ve ever had. The flavors were incredible, and the presentation was beautiful. Highly recommend!'
  },
];

// CALLING FROM LOCAL STORAGE
 
let cart = JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : [];
let wishlist = JSON.parse(localStorage.getItem('wishlist')) ? JSON.parse(localStorage.getItem('wishlist')) : [];
let reviews = JSON.parse(localStorage.getItem('reviews')) ? JSON.parse(localStorage.getItem('reviews')) : [];
let single_product = [];
let filteredItems =[]
let number = JSON.parse(localStorage.getItem('number'))
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

 
// if(number.list)
console.log(typeof(number.list))

 

function Remove(index) {
    let position = cart[index].id
    let target = cart.findIndex(obj => obj.id === position)
     cart.splice(target,1)
     localStorage.setItem("cart",JSON.stringify(cart))
     cart = cart
    cartItems() 
 }
 
 

function number_1(){
  number = {
    number : 1,
    list : "list"
  } 
  localStorage.setItem("number",JSON.stringify(number))
  location.reload()
  
}
function number_2(){
  number ={
    number : 2,
    list :"starters"
  } 
  localStorage.setItem("number",JSON.stringify(number))
  location.reload()
}
function number_3(){
  number ={
    number : 3,
    list : "breakfast"
  } 
  localStorage.setItem("number",JSON.stringify(number))
  location.reload()
}
function number_4(){
  number = {
    number : 4,
    list : "meals"
  }
  localStorage.setItem("number",JSON.stringify(number))
  location.reload()
}
function number_5(){
  number ={
    number : 5,
    list :"desserts"
  } 
  localStorage.setItem("number",JSON.stringify(number))
  location.reload()
}
function number_6(){
  number = {
    number :6,
    list:"Specials"
  } 
  localStorage.setItem("number",JSON.stringify(number))
  location.reload()
}
function number_7(){
  number = {
    number :7,
    list:"drinks"
  } 
  localStorage.setItem("number",JSON.stringify(number))
  location.reload()
}
// Shuffle the list
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
        //DISPLAY OF PRODUCTS
switch (number.number) {
case 1:
// 2
number = JSON.parse(localStorage.getItem('number'))
  // 3
  // shuffleArray(list);
  // 4
  number.list =  list
  // 5
  localStorage.setItem("number",JSON.stringify(number))

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
      <div class='row'>
      <div class='col'><button class="button" onclick="add_to_cart(${index})"><i class="bi bi-bag-plus"></i></button></div>
       <div class='col'><a href="../html/singleProd.html"><button class="button" onclick="singleProd(${index})" ><i class="bi bi-arrow-right"></i></button></a></div>
      <div>
      
      </center>
      <br>
  </div>
      `
  });

    break;
case 2:
  //filtering the starter items
  // 1
    starters = list.filter(item => item.category.includes('starters'));
    // 2
    number = JSON.parse(localStorage.getItem('number'))
    // 3
    // shuffleArray(starters); 
    // 4
      number.list =  starters
//  5
    localStorage.setItem("number",JSON.stringify(number))

    starters.forEach((element, index) => {
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
       <div class='col'><a href="../html/singleProd.html"><button class="button" onclick="singleProd(${index})" ><i class="bi bi-arrow-right"></i></button></a></div>
      <div>
      
      </center>
      <br>
  </div>
      `
  });
    break;
case 3:
    breakfast = list.filter(item => item.category.includes('breakfast'));
    number = JSON.parse(localStorage.getItem('number'))

    // shuffleArray(breakfast);
    number.list =  breakfast

  localStorage.setItem("number",JSON.stringify(number))

    breakfast.forEach((element, index) => {
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
        <div class='col'><a href="../html/singleProd.html"><button class="button" onclick="singleProd(${index})" ><i class="bi bi-arrow-right"></i></button></a></div>
      <div>
      
      </center>
      <br>
  </div>
      `
  });
    break;
case 4:
      meals = list.filter(item => item.category.includes('meal'));
      number = JSON.parse(localStorage.getItem('number'))
      // shuffleArray(meals);
   
      number.list =  meals
 
    localStorage.setItem("number",JSON.stringify(number))

      meals.forEach((element, index) => {
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
                     <div class='col'><a href="../html/singleProd.html"><button class="button" onclick="singleProd(${index})" ><i class="bi bi-arrow-right"></i></button></a></div>
        <div>
        
        </center>
        <br>
    </div>
        `
    });
      break;
case 5:
        desserts = list.filter(item => item.category.includes('dessert'));
        number = JSON.parse(localStorage.getItem('number'))

        // shuffleArray(desserts);
        number.list =  desserts
   
      localStorage.setItem("number",JSON.stringify(number))
  
        desserts.forEach((element, index) => {
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
                  <div class='col'><a href="../html/singleProd.html"><button class="button" onclick="singleProd(${index})" ><i class="bi bi-arrow-right"></i></button></a></div>
          <div>
          
          </center>
          <br>
      </div>
          `
      });
        break;
case 6:
          Specials = list.filter(item => item.category.includes('Special'));
          number = JSON.parse(localStorage.getItem('number'))

          // shuffleArray(Specials);
          number.list =  Specials
     
        localStorage.setItem("number",JSON.stringify(number))
    

        

          Specials.forEach((element, index) => {
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
                <div class='col'><a href="../html/singleProd.html"><button class="button" onclick="singleProd(${index})" ><i class="bi bi-arrow-right"></i></button></a></div>
            <div>
            
            </center>
            <br>
        </div>
            `
        });
          break;
          case 7:
          drinks = list.filter(item => item.category.includes('drink'));
          number = JSON.parse(localStorage.getItem('number'))

          // shuffleArray(drinks);
          number.list =  drinks
     
        localStorage.setItem("number",JSON.stringify(number))
    

        

        drinks.forEach((element, index) => {
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
                <div class='col'><a href="../html/singleProd.html"><button class="button" onclick="singleProd(${index})" ><i class="bi bi-arrow-right"></i></button></a></div>
            <div>
            
            </center>
            <br>
        </div>
            `
        });
          break;
  default:
    break;
}

function clearSingleProd(){
    single_product = [];
    location.reload()
}

function singleProd(index){
  // getting the number from local storage
  let number = JSON.parse(localStorage.getItem('number'))
  // locating the index of the item
  let id_target = list[index].id - 1;

  newlist = number.list
  

      single_product.push(
        {
            id:newlist[id_target].id,
            name: newlist[id_target].name, 
            price: newlist[id_target].price,
            image:newlist[id_target].image,
            description:newlist[id_target].description,
            ingredients:newlist[id_target].ingredients,
            category: newlist[id_target].category
        },
        ); 
 
        console.log(single_product);
        console.log('the ID of the item: '+newlist[id_target].id);
    console.log(newlist)
localStorage.setItem("singleProduct",JSON.stringify(single_product))
     
}
function singleProdFiltered(index){
  single_product.push(
      {
          id: filteredItems[index].id,
          name: filteredItems[index].name, 
          price: filteredItems[index].price,
          image:filteredItems[index].image,
          description:filteredItems[index].description,
          ingredients:filteredItems[index].ingredients
      },

      );
localStorage.setItem("singleProduct",JSON.stringify(single_product))

   
}
//ADD TO CART 
function add_to_cart(index) {
  id_target = number.list[index].id - 1;
  console.log(id_target)
 
  if (cart.some(item => item.id === number.list[index].id)) {
    console.log('Already in');
  } else {
    console.log(list)
    cart.push({
      id: list[id_target].id,
      name: list[id_target].name, 
      price: list[id_target].price,
      image: list[id_target].image,
      quantity:list[id_target].quantity,
      total_with_quantity:list[id_target].total_with_quantity

    });
    
    localStorage.setItem("cart", JSON.stringify(cart));

    // Update cart length display
    cart_length.innerHTML = cart.length;
    cart_length_2.innerHTML =cart.length

  }
 
//   location.reload()
 
}
function search_add_to_cart(index){


    let filteredItemlist = JSON.parse(localStorage.getItem('filteredItem')) ? JSON.parse(localStorage.getItem('filteredItem')) : [];
    target_item = filteredItemlist[index].id

    if (cart.some(item => item.id ===  target_item )) {
      console.log('Already in');
    } else {
      cart.some(item => item.name == target_item  )
       target_item = filteredItemlist[index].id - 1
  
      cart.push(
        {
          id: list[target_item ].id,
          name: list[target_item ].name, 
          price: list[target_item ].price,
          image: list[target_item ].image,
          quantity:list[target_item ].quantity,
          total_with_quantity:list[target_item ].total_with_quantity
        }
        )

    //     console.log(cart)
    }
    
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
       console.log(filteredItems)
        filteredItems.forEach((item, index) => {
            searched.innerHTML+=`

            <div class="card" class="container-fluid row" data-aos="fade-up">
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
                       <a href="../html/singleProd.html"><button onclick="singleProdFiltered(${index})" class="view" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="bi bi-arrow-right"></i></button></button></a>
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

// pushing new review into the local storage
function reviewinputview(){
let text =  document.querySelector('.review-text').value
// let reviewLength = reviews.length

review.push(
  {
    pic: 'https://i.pinimg.com/564x/7c/06/76/7c0676b215b591d2c6043596da128f96.jpg',
    name: 'you',
    text: text
  }
)

localStorage.setItem("reviews",JSON.stringify(review))
location.reload()
alert('Review added successfully✅')
}


localStorage.setItem("reviews",JSON.stringify(review))

// managing the loading of the reviews
if(reviews.length != 0){
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
}else{
  location.reload()
}
