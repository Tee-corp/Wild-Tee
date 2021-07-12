'use strict';

let table = document.getElementById('cart');
let tbodyEl = document.getElementById('body');
table.appendChild(tbodyEl);
table.addEventListener('click', removeItemFromCart);
let tshirt = {
  design : [],
};

function loadCart() {
  let tShirtItems = JSON.parse(localStorage.getItem('t-shirtInCart')) || [];
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
<<<<<<< HEAD
    aEl =document.createElement('a');
    aEl.setAttribute('id',`${i}`);
    aEl.innerHTML='<i class="far fa-trash-alt"></i>';
    aEl.addEventListener('click', removeItemFromCart);
=======
    aEl = document.createElement('a');
    aEl.innerHTML = `<i id='${i}' class="far fa-trash-alt"></i>`;
>>>>>>> origin/main
    tdEl.appendChild(aEl);
    trEl.appendChild(tdEl);
    let tdEl1 = document.createElement('td');
    tdEl1.textContent=`${tshirt.design[i].quantity}`;
    trEl.appendChild(tdEl1);
    let tdEl2 = document.createElement('td');
    tdEl2.textContent=`${tshirt.design[i].icon.split('.')[0]}`;
    trEl.appendChild(tdEl2);
<<<<<<< HEAD
=======
    // **************************************************************
    let tdEl4 = document.createElement('td');
    let img = document.createElement('img');
    img.setAttribute("src", "images/icon/" + tshirt.design[i].icon);
    img.setAttribute("width", "40px");
    img.setAttribute("height", "40px");
    tdEl4.appendChild(img);
// *******************************************************************
    trEl.appendChild(tdEl4);
>>>>>>> origin/main
    let tdEl3 = document.createElement('td');
    tdEl3.textContent=`${tshirt.design[i].tsColor.split('.')[0]}`;
    trEl.appendChild(tdEl3);
    tbodyEl.appendChild(trEl);
  }



function removeItemFromCart(event) {
<<<<<<< HEAD

  console.log(event.target.id);
=======
 
>>>>>>> origin/main
  event.preventDefault();
  removeItem(event.target.id) ;
  saveToLocalStorage();
  renderCart();
}


<<<<<<< HEAD
  tshirt.design.splice(index,1);
  console.log(tshirt);
}
=======
function removeItem(index) {
  tshirt.design.splice(Number(index),1); 
};
>>>>>>> origin/main


function saveToLocalStorage() {

  let tShirtInCart = JSON.stringify(tshirt.design);
  localStorage.setItem('t-shirtInCart',tShirtInCart);
}

renderCart();
// ******************************************************************************************
// mone
let openEl = document.getElementById('openBtn');

openEl.addEventListener('click',showPop);

function showPop(event) {

  document.querySelector('.popUpForm').style.display='flex';
  event.preventDefault();

}
// let closeForm=document.getElementById('closeBtn1');
// closeForm.addEventListener('click',unShow);

// function unShow(event){

//   closeForm.querySelector('.popUpForm').style.display='none';
//   event.preventDefault();
// }


// ******************************************form javascript*******************************************************
let orderRes=document.getElementById('payForm');
let ulEl=document.getElementById('test');
let buttonRes=document.getElementById('btnFin');
let divlabel1=document.getElementById('div1');
let details=[];


function FinalCheck(name,type,check){
  this.customerName=name;
  this.paymentType=type;
  this.checkdeliver=check;
  details.push(this);

}
divlabel1.addEventListener('click',finalStep);

function finalStep(event){
  event.preventDefault();
  let name=event.target.formUser.value;
  let type=event.target.cardPay.value;
  let check=event.target.check.value;

  new FinalCheck(name,type,check);

  testValue();

}
function saveTestStorage(){
  let storage=JSON.stringify(FinalCheck.details);
  localStorage.setItem('result',storage);

}

function readStorage(){

  let objString=localStorage.getItem('result');
  let objNorm=JSON.parse(objString);
  if(objNorm !==null){
    FinalCheck.details=objNorm;
    testValue();

  }

}
readStorage();
let checkDelver;
function testValue(){

  for(let i=0;i<details.length;i++){

    let liElement=document.createElement('li');

    if(details.length[i].check){
      checkDelver='aramix';
    }
    else{
      checkDelver='Express';

    }
    liElement.textContent=`welcome our customer ${details.length[i].name} you went to pay using ${details.length[i].type} and recived product using ${checkDelver}`;
    ulEl.appendChild(liElement);
    orderRes.appendChild(ulEl);

  }
  saveTestStorage();
}
buttonRes.addEventListener('click',finalStep);
// move from page to another

let googleBut=document.getElementById('gog');
let faceboBut=document.getElementById('fac');

googleBut.addEventListener('click',goGoogl);
faceboBut.addEventListener('click',goFace);

function goGoogl(event){
  event.preventDefault();
  window.location.href='https://accounts.google.com/signin/v2/identifier?service=mail&lp=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin';
}

function goFace(event){
  event.preventDefault();
  window.location.href='https://web.facebook.com/?_rdc=1&_rdr';
}