/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
const cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  const selectElement = document.getElementById('items');
  for (let i in Product.allProducts) {
    let optionElem = document.createElement('option');
    optionElem.textContent = Product.allProducts[i].name
    selectElement.appendChild(optionElem);
    // for (let i=0; i < Product.allProducts.length; i++) {
    //   let product = Product.allProducts[i];
    //   product.name;
    // }
  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {

  // TODO: Prevent the page from reloading
  event.preventDefault();
  // Do all the things ...

  // hey if you want to you can pass values to these functions 
  addSelectedItemToCart(event);
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview(event);
}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart(event) {
  // TODO: suss out the item picked from the select list
  let item = event.target.items.value;
  // TODO: get the quantity
  let quantity = event.target.quantity.value;
  // TODO: using those, add one item to the Cart
  console.log('item:' + item, 'quantity: ' + quantity);
  //product quantity
  if (quantity != '') {
    cart.addItem(item, quantity);
  } else {
    alert('oops!');
  }
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  let itemCountElem = document.getElementById('itemCount');
  let itemTotal = 0;
  for (let item of cart.items) {
    itemTotal += parseInt(item.quantity);
  }
  if (itemTotal > 0) {
    let counterElem = document.createElement('p');
    counterElem.textContent = itemTotal;
    itemCountElem.innerHTML = '';
    itemCountElem.appendChild(counterElem);
  }
}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview(event) {
  // TODO: Get the item and quantity from the form
  let item = event.target.items.value;
  let quantity = event.target.quantity.value;
  // TODO: Add a new element to the cartContents div with that information
  let divElem = document.getElementById('cartContents');
  let imgElem = document.createElement('img');
  let nameElem = document.createElement('p');
  let quantityElem = document.createElement('p');
  nameElem.textContent = item;
  quantityElem.textContent = quantity;
  divElem.appendChild(nameElem);
  divElem.appendChild(quantityElem);
  
  let imgPath = '';
  for (let product of Product.allProducts) {
    if (item === product.name) {
      imgPath = product.filePath;
    }
  }
  imgElem.src = imgPath;
  divElem.appendChild(imgElem);
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
