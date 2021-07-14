'use strict';
let imgContainerEl = document.getElementById("shirt-card");
let changeColorContainer =document.getElementById('changeColor');
let changeColorContainerGirl = document.getElementById('changeColorGirl');
let iconsContenierEl=document.getElementById("icons")

let icons=['cat.png', 'pizza-slices.png','batman.png','Bee.png','believe-in-you.png','bird2.png','blah-blah-blah.png','brain.png','Cob.png','creativity.png','Destroyed.png','Earth.png','Planets.png','Sun-Umbrella.png','superman.png','Flower.png','Flower-circle.png','Ladybug.png','light-bulb.png','Meteorite.png',"no-way.png" ,'money-bag.png','accident.png',"dolphin.png",'ostrich.png','penguin.png','cheetah.png','butterfly.png',"ballon.png", "bekind.png", "pizza.png", 'grunge.png', 'Etcher.png',  'a123 .png','hamster.png','bird.png','mushroom.png','Red-Mushroom.png','jordan.png','palestine.png','syria.png','sun.png','dahlia.png','sunflower.png','motorcycle.png',"nope.png",'sword.png',"wounded.png","wreath.png",'bunny.png','pikachu.png','splash.png','surprised.png'];

let  iconImg;
let  newIcon;
let tsColorInLlocal ;

let tsColor=['Black.png','Gray.png','Blue.png','Orange.png','Yellow.png','Megenta.png','Sea-Green.png','Mid-Night-Blue.png','Sonar-Green.png','white.png','Fever-Red.png','Rioja-Red.png','Mint-Green.png'];
tsColorInLlocal = JSON.stringify(tsColor[0]);
  localStorage.setItem("tsColor", tsColorInLlocal);

  let tsColorGirl=["White-girl.png","Black-girl.png",'Venus-Violet-gitl.png','Beryl-Green-girl.png','Wolf-Grey-girl.png','Turquoise-girl.png','MediumSea-Green-girl.png','Pearl-Grey-girl.png','Ultraviolet-girl.png','Pale-Violetred-girl.png','Light-Red-girl.png']


function placeIcon() {
 iconImg = JSON.parse(localStorage.getItem('clickedicon')) || [];
     newIcon = document.createElement("img");
    newIcon.setAttribute("src", "images/icon/" + iconImg);
    newIcon.setAttribute("class", "icon");

    imgContainerEl.appendChild(newIcon);
  }
placeIcon();


let imgs=[];
for (let i = 2; i < 15; i++) {
  imgs.push(`${i}a.jpg`);
}
let girlImgs=[];
for (let i = 1; i < 12; i++) {
  girlImgs.push(`${i}.jpg`);
}


let imgEl2;
function render(lengTh,imgFile,contenerName,changeClass,imgPath) {
  for (let i = 0; i < lengTh; i++) {
    imgEl2 = document.createElement("img");
    imgEl2.setAttribute("src", imgPath + imgFile[i]);
    imgEl2.setAttribute("class",changeClass );
    imgEl2.setAttribute("width", "40px");
    imgEl2.setAttribute("id", i);
    contenerName.appendChild(imgEl2);
  }
}

render(imgs.length,imgs,changeColorContainer,'circle',"images/ManColor/");/* color box for man */
render(icons.length,icons,iconsContenierEl,'icons',"images/icon/");/*change icon  */
render(girlImgs.length,girlImgs,changeColorContainerGirl,'circleGirl',"images/girl/");/* color box for girl */

let  imgTsEl;
changeColorContainer.addEventListener("click", changeColor);

function changeColor (event){
  if (event.target.id !=='changeColor' && event.target.id !==''){
  let ColorIndex = event.target.id ;
  imgContainerEl.textContent='';
  imgTsEl = document.createElement("img");
  imgTsEl.setAttribute('class','shirrt')
  imgTsEl.setAttribute("src", "images/tshirt/"+tsColor[ColorIndex]);
  imgContainerEl.appendChild(imgTsEl);
  tsColorInLlocal = JSON.stringify(tsColor[ColorIndex]);
  localStorage.setItem("tsColor", tsColorInLlocal);

  placeIcon();
}
}

changeColorContainerGirl.addEventListener("click", changeColorGirl);

function changeColorGirl (event){
  if (event.target.id !=='changeColorGirl' && event.target.id !==''){
  let ColorIndex = event.target.id ;
  imgContainerEl.textContent='';
  imgTsEl = document.createElement("img");
  imgTsEl.setAttribute('class','shirrt')
  imgTsEl.setAttribute("src", "images/GirlsTshirt/"+tsColorGirl[ColorIndex]);
  imgContainerEl.appendChild(imgTsEl);
  tsColorInLlocal = JSON.stringify(tsColorGirl[ColorIndex]);
  localStorage.setItem("tsColor", tsColorInLlocal);

  placeIcon();
}
}


iconsContenierEl.addEventListener("click",  changIcon);
function changIcon(event){
  event.preventDefault();
  if (event.target.id !=='icons'){
  let clickedicon= JSON.stringify(icons[event.target.id]);
  localStorage.setItem("clickedicon", clickedicon);
 
  newIcon.remove();
  placeIcon();
  }
}

// *****************************************************************************************



const Tshirt = function(design) {
  this.design = design;
};

let tshirt = new Tshirt([]);
 tshirt.design = JSON.parse(localStorage.getItem('t-shirtInCart')) || [];

 
Tshirt.prototype.addTshirt = function(tsColor,icon, quantity) {

  const newTshirt= new NewTshirtItem(tsColor,icon, quantity);
  tshirt.design.push(newTshirt );

};

const NewTshirtItem = function(tsColor,icon, quantity) {
  this.tsColor = tsColor;
  this.icon = icon;
  this.quantity=quantity;
};



// **********************************************************************

let numOfItemInCart = JSON.parse(localStorage.getItem('numOfItemInCart')) || [''];
let cartNavEl = document.getElementById("ss");
cartNavEl.textContent=`${numOfItemInCart}`;

function addToCounter() {

  numOfItemInCart[0]++;

  let numOfItemInCartInLocal = JSON.stringify(numOfItemInCart);
  localStorage.setItem('numOfItemInCart', numOfItemInCartInLocal);

  cartNavEl.textContent=`${numOfItemInCart}`;
}

// **********************************************************************
let formEl=document.getElementById('catalog');
formEl.addEventListener('submit',  addTshirtToCart);

function addTshirtToCart (event){
event.preventDefault();
let quantity=event.target.quantity.value ;
tsColorInLlocal = JSON.parse(localStorage.getItem('tsColor')) || [];
tshirt.addTshirt(tsColorInLlocal,iconImg,quantity);
addToCounter();
saveToLocalStorage();

}

function saveToLocalStorage() {

  let tShirtInCart = JSON.stringify(tshirt.design);
  localStorage.setItem('t-shirtInCart',tShirtInCart);
};










