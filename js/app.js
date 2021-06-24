'use strict';

// Cart constructor.
const Cart = function(items) {
  // this.items is an array of CartItem instances.
  this.items = items;
};

Cart.prototype.addItem = function(product, quantity) {
  // instatiate a cart item using the arguments from product and quantity
  let myNewCartItem = new CartItem(product, quantity);
  console.log(myNewCartItem);
  // push into the items array
  this.items.push(myNewCartItem);
  // this.items.push(new CartItem(product, quantity));
};

Cart.prototype.saveToLocalStorage = function() {
  // TODO: Fill in this instance method to save the contents of the cart to localStorage
   let stringifiedCartItems = JSON.stringify(this.items);
   localStorage.setItem('items', stringifiedCartItems);
   console.log(stringifiedCartItems);
   // from busmall
  //  let stringifiedProducts = JSON.stringify(Product.allProducts);
  //  localStorage.setItem('products', stringifiedProducts);
};

Cart.prototype.removeItem = function(item) {
  // TODO: Fill in this instance method to remove one item from the cart.
  // Note: You will have to decide what kind of parameter to pass in here!
  // we took in a name, and now we have to figure out the index and how many
  for (i in this.items) {
      //cthulu === object at that index/"i"-- name
    if (item === this.items[i].product) {
      this.items.splice(i, 1);
    }
  }
};

//CartItem constructor.
const CartItem = function(product, quantity) {
  this.product = product;
  this.quantity = quantity;
};

// Product contructor.
const Product = function(filePath, name) {
  this.filePath = filePath;
  this.name = name;
  Product.allProducts.push(this);
};
Product.allProducts = [];

function generateCatalog() {
  new Product('assets/bag.jpg', 'Bag');
  new Product('assets/banana.jpg', 'Banana');
  new Product('assets/bathroom.jpg', 'Bathroom');
  new Product('assets/boots.jpg', 'Boots');
  new Product('assets/breakfast.jpg', 'Breakfast');
  new Product('assets/bubblegum.jpg', 'Bubblegum');
  new Product('assets/chair.jpg', 'Chair');
  new Product('assets/cthulhu.jpg', 'Cthulhu');
  new Product('assets/dog-duck.jpg', 'Dog-Duck');
  new Product('assets/dragon.jpg', 'Dragon');
  new Product('assets/pen.jpg', 'Pen');
  new Product('assets/pet-sweep.jpg', 'Pet Sweep');
  new Product('assets/scissors.jpg', 'Scissors');
  new Product('assets/shark.jpg', 'Shark');
  new Product('assets/sweep.png', 'Sweep');
  new Product('assets/tauntaun.jpg', 'Taun-Taun');
  new Product('assets/unicorn.jpg', 'Unicorn');
  new Product('assets/usb.gif', 'USB');
  new Product('assets/water-can.jpg', 'Water Can');
  new Product('assets/wine-glass.jpg', 'Wine Glass');
}

// Initialize the app by creating the big list of products with images and names
generateCatalog();
// Cart.prototype.addItem(Product.allProducts[0], 1);
// Cart.prototype.saveToLocalStorage();

