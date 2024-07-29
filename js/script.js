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
    "category": "Special",
    "description": "Indulge in the nostalgic flavors of summer with our creamy raspberry milkshake, topped with gooey marshmallows and chocolate.",
    "ingredients": ["Raspberry ice cream", "Marshmallows", "Chocolate"],
    "quantity": 1,
    "total_with_quantity": "8.99"
  },
 {
      "id": 8,
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
      "id": 22,
      "name": "Beef Burgers",
      "image": "https://i.ibb.co/7pyhHcB/beef-burgers.png",
      "price": "29.99",
      "category": "Special",
      "description": "Gather your friends and family for a feast with our pack of six juicy beef burgers, perfect for grilling up a storm.",
      "ingredients": ["Beef patties", "Buns", "Lettuce", "Tomato", "Cheese", "Pickles"],
      "quantity": 6,
      "total_with_quantity": "29.99"
    },
    {
      "id": 23,
      "name": "Custard & Jelly x2",
      "image": "https://i.ibb.co/dc8VyC1/custurad-and-jelly.png",
      "price": "19.99",
      "category": "Special",
      "description": "Enjoy a nostalgic treat with our classic custard and jelly cups, a sweet and creamy delight.",
      "ingredients": ["Custard", "Jelly"],
      "quantity": 2,
      "total_with_quantity": "19.99"
    },
    {
      "id": 24,
      "name": "Moroccan Chicken Wrap x",
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
      "id": 26,
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
      "id": 27,
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
      "id": 28,
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
      "id": 29,
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
      "id": 30,
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
      "id": 31,
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
      "id": 32,
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
      "id": 33,
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
      "id": 34,
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
      "id": 35,
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
      "id": 36,
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
      "id": 37,
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
      "id": 38,
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
      "id": 39,
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
      "id": 40,
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
      "id": 41,
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
      "id": 42,
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
      "id": 43,
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
      "id": 44,
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
      "id": 45,
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
      "id": 46,
      "name": "The Vegan Rou Jia Mo - Chinese Hamburger",
      "image": "https://i.postimg.cc/kGKVYKGg/The-vegan-Rou-Jia-Mo-Chinese-Hamburger.jpg",
      "price": "7.99",
      "category": "meal",
      "description": "A delicious vegan Chinese hamburger with a savory filling.",
      "ingredients": ["Bun", "Vegan meat", "Spices", "Vegetables"],
      "quantity": 1,
      "total_with_quantity": "7.99"
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
  // starters = list.filter(item => item.category.includes('starters'));
//  console.log(starters)
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
        //DISPLAY OF PRODUCTS
switch (number.number) {
case 1:
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
              <div class='col'><a href="../html/singleProd.html"><button class="button" onclick="singleProd(${index})" ><i class="bi bi-arrow-right"></i></button></a></div>
      <div>
      
      </center>
      <br>
  </div>
      `
  });

    break;
case 2:
    starters = list.filter(item => item.category.includes('starters'));
    number = JSON.parse(localStorage.getItem('number'))

   
      number.list =  starters
 
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
  default:
    break;
}

function clearSingleProd(){
    single_product = [];
    location.reload()
}

function singleProd(index){
  let number = JSON.parse(localStorage.getItem('number'))
  let id_target = list[index].id - 1;
  newlist = number.list

      single_product.push(
        {
            id:newlist[id_target].id,
            name: newlist[id_target].name, 
            price: newlist[id_target].price,
            image:newlist[id_target].image,
            description:newlist[id_target].description,
            ingredients:newlist[id_target].ingredients
        },

        ); 
 
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
  id_target = number.list[index].id -1;
 console.log(id_target)
 console.log(cart);
  if (cart.some(item => item.id === number.list[index].id)) {
    console.log('Already in');
  } else {
  //   console.log(number.list);
  // console.log( ); 
    
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
 



