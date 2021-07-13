'use strict';

let table = document.getElementById('cart');
let tbodyEl = document.getElementById('body');
table.appendChild(tbodyEl);
table.addEventListener('click', removeItemFromCart);

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


function showCart() {

  for (let i in tshirt.design) {
    trEl = document.createElement('tr');
    tdEl = document.createElement('td');
    aEl = document.createElement('a');
    aEl.innerHTML = `<i id='${i}' class="far fa-trash-alt"></i>`;
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
    trEl.appendChild(tdEl4);
    let tdEl3 = document.createElement('td');
    tdEl3.textContent = `${tshirt.design[i].tsColor.split('.')[0]}`;
    trEl.appendChild(tdEl3);
    tbodyEl.appendChild(trEl);

  }

}



function removeItemFromCart(event) {

  event.preventDefault();
  removeItem(event);
  saveToLocalStorage();
  renderCart();
}


function removeItem(event) {
  event.preventDefault();
  tshirt.design.splice(Number(event.target.id),1);
}


function saveToLocalStorage() {

  let tShirtInCart = JSON.stringify(tshirt.design);
  localStorage.setItem('t-shirtInCart', tShirtInCart);
}

renderCart();


// ******************************************************************************************
// mone
let openEl = document.getElementById('openBtn');
let buttonRes=document.getElementById('btnFin');
// let formEl=document.getElementById('payForm');

openEl.addEventListener('click', showPop);

function showPop(event) {

  document.querySelector('.popUpForm').style.display = 'flex';
  event.preventDefault();

}

let fontClose=document.getElementById('closeBtn1');
fontClose.addEventListener('click', closeFormShow);
function closeFormShow(){
  event.preventDefault();
  document.querySelector(".popUpForm").style.display="none";
}

buttonRes.addEventListener('click',deletTableRow);
function deletTableRow(event){
  event.preventDefault();
  let tableBody=document.getElementById('body');
  tableBody.innerHTML = '';

  

}

// move from page to another
let googleBut=document.getElementById('gog');
let faceboBut=document.getElementById('fac');
let TshirtBtn=document.getElementById('ShirtPage');

googleBut.addEventListener('click',goGoogl);
faceboBut.addEventListener('click',goFace);
TshirtBtn.addEventListener('click',goTshirt);

function goGoogl(event){
  event.preventDefault();
  window.location.href='https://accounts.google.com/signin/v2/identifier?service=mail&lp=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin';
}

function goFace(event){
  event.preventDefault();
  window.location.href='https://web.facebook.com/?_rdc=1&_rdr';
}


function goTshirt(event){
  event.preventDefault();
  window.location.href='shirt.html';
}
// ////////////////image conatiner////////////////////

let myIndex = 0;
carousel();

function carousel() {
  let i;
  let x = document.getElementsByClassName('mySlides');
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1;}
  x[myIndex-1].style.display = 'block';
  setTimeout(carousel, 1000);
  // Change image every 1 seconds

}
// let closeForm=document.getElementById('closeBtn1')
//   closeForm.addEventListener("click",unShow)

//   function unShow(event){
//     event.preventDefault();
    
//   }


// *****************************************************************************************************
////////////////new form popup
// ulEl=document.getElementById('test');
// let details=[];

// let orderRes=document.getElementById('payForm');
// let divTrac1=document.getElementById('cardID');
// let ulEl=document.getElementById('test');
// function FinalCheck(name,type,check){
//   this.customerName=name;
//   this.paymentType=type;
//   this.checkdeliver=check;
//   details.push(this);

// }
// let checkbox = document.getElementById('checkFo');
// let checkResu;
// checkbox.addEventListener('change', checkedFun);
// function checkedFun(e){
//   checkResu=e.target.checked;
//   console.log(checkResu);

// }


// function finalStep(event){

//   event.preventDefault();
//   console.log(event.target.formUser,'test');

//   let name=event.target.formUser.value;

//   console.log(name);
//   let type=event.target.cardPay.value;
//   // let check=event.target.checked;
//   console.log(check,'test check');
//   new FinalCheck(name,type,check);

//   testValue();

// }
// function saveTestStorage(){
//   let storage=JSON.stringify(FinalCheck.details);
//   localStorage.setItem('result',storage);

// }

// function readStorage(){

//   let objString=localStorage.getItem('result');
//   let objNorm=JSON.parse(objString);
//   if(objNorm !==null){
//     FinalCheck.details=objNorm;
//     testValue();

//   }

// }
// readStorage();
// let checkDelver;
// function testValue(){

//   for(let i=0;i<details.length;i++){

//     let liElement=document.createElement('li');

//     if(details.length[i].check){
//       checkDelver='aramix';
//     }
//     else{
//       checkDelver='Express';

//     }
//     liElement.textContent=`welcome our customer ${details.length[i].name} you went to pay using ${details.length[i].type} and recived product using ${checkDelver}`;
//     ulEl.appendChild(liElement);
//     orderRes.appendChild(ulEl);

//   }
//   saveTestStorage();
// }
// orderRes.addEventListener('submit',finalStep);
