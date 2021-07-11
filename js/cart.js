'use strict';

let  table = document.getElementById('cart');
let tbodyEl = document.getElementById('body');
table.appendChild(tbodyEl);

let tshirt = {
    design : [],
}

function loadCart() {
  let  tShirtItems = JSON.parse(localStorage.getItem('t-shirtInCart')) || [];
  tshirt.design= tShirtItems;
  console.log(tshirt);
}


function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

function clearCart() {

tbodyEl.textContent='';
}


let trEl;
  let tdEl;
  let aEl;
function showCart() {
  
for (let i = 0; i < tshirt.design.length; i++) {
   trEl=document.createElement('tr');
  tdEl = document.createElement('td');
   aEl =document.createElement('a');
  aEl.setAttribute('id',`${i}`)
  aEl.innerHTML='<i class="far fa-trash-alt"></i>';
  aEl.addEventListener('click', removeItemFromCart);
  tdEl.appendChild(aEl);
  trEl.appendChild(tdEl);
  let tdEl1 = document.createElement('td');
  tdEl1.textContent=`${tshirt.design[i].quantity}`;
  trEl.appendChild(tdEl1);
  let tdEl2 = document.createElement('td');
  tdEl2.textContent=`${tshirt.design[i].icon.split('.')[0]}`;
  trEl.appendChild(tdEl2);
  let tdEl3 = document.createElement('td');
  tdEl3.textContent=`${tshirt.design[i].tsColor.split('.')[0]}`;
  trEl.appendChild(tdEl3);
  tbodyEl.appendChild(trEl);
}

}


function removeItemFromCart(event) {
  
  console.log(event.target.id);
  event.preventDefault();
removeItem(event.target.id) ;
saveToLocalStorage();
renderCart();
}


function removeItem(index) {

    tshirt.design.splice(index,1);
    console.log(tshirt);
  };

  
function saveToLocalStorage() {

    let tShirtInCart = JSON.stringify(tshirt.design);
    localStorage.setItem('t-shirtInCart',tShirtInCart);
  };
  
renderCart();
// ******************************************************************************************
// mone
let openEl=document.getElementById('openBtn');

openEl.addEventListener('click',showPop)

function showPop(event){

  document.querySelector(".popUpForm").style.display="flex"
  event.preventDefault();

}
// let closeForm=document.getElementById('closeBtn1')
//   closeForm.addEventListener("click",unShow)
  
//   function unShow(event){
//     event.preventDefault();
//     closeForm.querySelector(".popUpForm").style.display="none"
//   }


// *****************************************************************************************************