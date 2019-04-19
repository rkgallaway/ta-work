'use strict';

var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

function renderCart() {
  loadCart();
  clearCart();
  showCart();
}


var tbody = document.querySelector('tbody');

function clearCart() {
  while (tbody.lastChild) {
=======// TODO: Remove all of the rows (tr) in the cart table (tbody)
var tbody = document.querySelector('tbody');

function clearCart() {
  while (tbody.lastchild) {

    tbody.removeChild(tbody.lastChild);
  }
}

function showCart() {

  

  for (var i in cart.items) {
    var trEl = document.createElement('tr');

    var dumpItem = document.createElement('button');
    dumpItem.type = 'button';
    dumpItem.textContent = 'X';
    dumpItem.id = i;
    trEl.appendChild(dumpItem);

    var quantity = document.createElement('td');
    quantity.textContent = cart.items[i].quantity;
    trEl.appendChild(quantity);

    var product = document.createElement('td');
    product.textContent = cart.items[i].product;
    trEl.appendChild(product);

    tbody.appendChild(trEl);

  for(var i in cart.items) {
    var trElement = document.createElement('tr');

    var disposeItem = document.createElement('button');
    disposeItem.type = 'button';
    disposeItem.textContent = 'X';
    disposeItem.id = i;
    trElement.appendChild(disposeItem);
    // TODO: Find the table bod
    var quantity = document.createElement('td');
    quantity.textContent = cart.Items[i].quantity;
    trElement.appendChild(quantity);

    var product = document.createElement('td');
    product.textContentn= cart.items[i].product;
    trElement.appendChild(product);

    tbody.appendChild(trElement);

  }
}

function removeItemFromCart(event) {

  cart.removeItem(parseInt(event.target.id));

  cart.saveToLocalStorage();
  renderCart();


  cart.saveToLocalStprage();
  renderCart();




renderCart();

renderCart();

