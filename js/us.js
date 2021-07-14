'use strict';
let numOfItemInCart = JSON.parse(localStorage.getItem('numOfItemInCart')) || [];
let cartNavEl = document.getElementById("ss");
cartNavEl.textContent=`${numOfItemInCart}`;

function addToCounter() {

  numOfItemInCart[0]++

  let numOfItemInCartInLocal = JSON.stringify(numOfItemInCart);
  localStorage.setItem('numOfItemInCart', numOfItemInCartInLocal);

  cartNavEl.textContent=`${numOfItemInCart}`;
}