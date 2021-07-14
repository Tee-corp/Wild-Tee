'use strict';

let table = document.getElementById('cart');
let tbodyEl = document.getElementById('body');
table.appendChild(tbodyEl);


let tshirt = {
  design: [],
};

function loadCart() {
  let tShirtItems = JSON.parse(localStorage.getItem('t-shirtInCart')) || [];
  tshirt.design = tShirtItems;
}



function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

function clearCart() {

  tbodyEl.textContent = '';
}


let trEl;
let tdEl;
let aEl;
let sumOfQuantity = 0;

function showCart() {

  for (let i in tshirt.design) {
    trEl = document.createElement('tr');
    tdEl = document.createElement('td');
    aEl = document.createElement('a');
    aEl.innerHTML = `<i id='${i}' class="far fa-trash-alt"></i>`;
    tdEl.addEventListener('click', removeItemFromCart);
    tdEl.appendChild(aEl);
    trEl.appendChild(tdEl);
    let tdEl1 = document.createElement('td');
    tdEl1.textContent = `${tshirt.design[i].quantity}`;
    trEl.appendChild(tdEl1);
    let tdEl2 = document.createElement('td');
    tdEl2.textContent = `${tshirt.design[i].icon.split('.')[0]}`;
    trEl.appendChild(tdEl2);
    // **************************************************************
    let tdEl4 = document.createElement('td');
    let img = document.createElement('img');
    img.setAttribute('src', 'images/icon/' + tshirt.design[i].icon);
    img.setAttribute('width', '40px');
    img.setAttribute('height', '40px');
    tdEl4.appendChild(img);
    // *******************************************************************
    let tdEl5 = document.createElement("td");
    let img2 = document.createElement("img");
    img2.setAttribute("src", "images/tshirt/" + tshirt.design[i].tsColor);
    img2.setAttribute("width", "60px");
    img2.setAttribute("height", "60px");
    tdEl5.appendChild(img2);
    trEl.appendChild(tdEl5);
    // ********************************************************************
    trEl.appendChild(tdEl4);
    let tdEl3 = document.createElement('td');
    tdEl3.textContent = `${tshirt.design[i].tsColor.split('.')[0]}`;
    trEl.appendChild(tdEl3);
    // *************************************************************************
    let tdEl6 = document.createElement("td");

    tdEl6.innerHTML = `10 <i class="fas fa-dollar-sign"></i>`;
    trEl.appendChild(tdEl6);
    // *******************************************************************************
    tbodyEl.appendChild(trEl);
    sumOfQuantity = sumOfQuantity + Number(tshirt.design[i].quantity);
  }
  let totalOfCartEl = document.getElementById('total');
  totalOfCartEl.textContent = ` Total price: ${sumOfQuantity * 10}$`;
}



function removeItemFromCart(event) {

  event.preventDefault();
  deleteFromCounter();
  sumOfQuantity = 0;
  removeItem(event);
  saveToLocalStorage();
  renderCart();
}


function removeItem(event) {
  event.preventDefault();
  tshirt.design.splice(Number(event.target.id), 1);
}


function saveToLocalStorage() {

  let tShirtInCart = JSON.stringify(tshirt.design);
  localStorage.setItem('t-shirtInCart', tShirtInCart);
}

renderCart();
// ****************************************************************************************
let numOfItemInCart = JSON.parse(localStorage.getItem('numOfItemInCart')) || [];
let cartNavEl = document.getElementById("ss");
cartNavEl.textContent = `${numOfItemInCart}`;

function deleteFromCounter() {

  numOfItemInCart[0]--;
  if (numOfItemInCart == 0) {
    numOfItemInCart = '';

  }
  let numOfItemInCartInLocal = JSON.stringify(numOfItemInCart);
  localStorage.setItem('numOfItemInCart', numOfItemInCartInLocal);

  cartNavEl.textContent = `${numOfItemInCart}`;
}


// ******************************************************************************************
// mone
let openEl = document.getElementById('openBtn');
let buttonRes = document.getElementById('btnFin');
// let formEl=document.getElementById('payForm');

openEl.addEventListener('click', showPop);

function showPop(event) {

  document.querySelector('.popUpForm').style.display = 'flex';
  event.preventDefault();

}

let fontClose = document.getElementById('closeBtn1');
fontClose.addEventListener('click', closeFormShow);
function closeFormShow() {
  document.querySelector('.popUpForm').style.display = 'none';
}

buttonRes.addEventListener('click', deletTableRow);

function deletTableRow(event) {
  event.preventDefault();

  let tShirtInCart = JSON.stringify([]);
  localStorage.setItem('t-shirtInCart', tShirtInCart);
  sumOfQuantity = 0;
  if (numOfItemInCart) {
    // if(typeof(numOfItemInCart) !== typeof('') ){
    numOfItemInCart[0] = [1];
    deleteFromCounter();
    renderCart();
  }
  document.querySelector('.popUpForm').style.display = 'none';
}