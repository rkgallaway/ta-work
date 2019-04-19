'use strict';

var cart = new Cart([]);

function populateForm() {

  var selectElement = document.getElementById('items');
  for (var i in Product.allProducts) {
    var optionEl = document.createElement('option');
    optionEl.value = Product.allProducts[i].name;
    optionEl.textContent = Product.allProducts[i].name;
    selectElement.appendChild(optionEl);
  }
}

function handleSubmit(event) {

  event.preventDefault();

  addSelectedItemToCart(event);
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();
}

function addSelectedItemToCart() {
  var selectedItem = document.getElementById('items').value;

  var desiredQuantity = document.getElementById('quantity').value;

  cart.addItem(selectedItem, desiredQuantity);
}

var counter = 0;
function updateCounter() {
  counter += parseInt(document.getElementById('quantity').value);
  var spanEl = document.getElementById('itemCount');
  spanEl.textContent = counter;
}

function updateCartPreview() {
  var previewList = document.getElementById('cartContents');

  var liEl = document.createElement('li');
  liEl.style.listStyle = 'none';
  liEl.textContent = `${document.getElementById('items').value}: ${document.getElementById('quantity').value}`;
  previewList.appendChild(liEl);
   var liElement = document.createElement('li');
  liElement.style.listStyle = 'none';
  liElement.textContent = `${document.getElementById('items').value}: ${document.getElementById('quantity').value}`;
  previewList.appendChild(liElement);

}

var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

populateForm();