'use strict';
let imgContainerEl = document.getElementById("closet");
let changeColorContainer =document.getElementById('changeColor');
// let iconPlace = document.getElementById("shirrt");
let iconsContenierEl=document.getElementById("icons")
let icons=["ballon.png", "bekind.png", "pizza.png", "ltcu.jpg", 'grunge.png', 'Etcher.png','logo.jpg','a123 .png','facebook-like.png','pizza-slices.png','taco.png','cat.png']; 
let  iconImg;
let  newIcon;
let tsColorInLlocal ;

let abd= ['Black.png'];
tsColorInLlocal = JSON.stringify(abd[0]);
  localStorage.setItem("tsColor", tsColorInLlocal);

function placeIcon() {
 iconImg = JSON.parse(localStorage.getItem('clickedicon')) || [];
     newIcon = document.createElement("img");
    newIcon.setAttribute("src", "images/icon/" + iconImg);
    newIcon.setAttribute("class", "icon");

    imgContainerEl.appendChild(newIcon);
  }
  
placeIcon();
let imgs=[];
let tsColor=['Black.png','Gray.png','Blue.png','Orange.png','Yellow.png','Megenta.png','Sea-Green.png','Mid-Night-Blue.png','Sonar-Green.png','white.png','Fever-Red.png','Rioja-Red.png','Mint-Green.png'];
for (let i = 2; i < 15; i++) {
  imgs.push(`${i}a.jpg`);
}
// console.log(tsColor);
let imgEl2;

function render(lengTh,imgFile,contenerName,changeClass,imgPath) {
  for (let i = 0; i < lengTh; i++) {
    // liEl = document.createElement("li");
    imgEl2 = document.createElement("img");
    imgEl2.setAttribute("src", imgPath + imgFile[i]);
    imgEl2.setAttribute("class",changeClass );
    imgEl2.setAttribute("width", "40px");
    imgEl2.setAttribute("id", i);
    // liEl.appendChild(imgEl);
    contenerName.appendChild(imgEl2);
    
  }
}

render(imgs.length,imgs,changeColorContainer,'circle',"images/ManColor/");/* color box*/
render(icons.length,icons,iconsContenierEl,'icons',"images/icon/");/*man's tshirt */
// render(imgs.length,imgs,changeColorContainer,'circle');/* color box*/

let  imgTsEl;
changeColorContainer.addEventListener("click", changeColor);

function changeColor (event){
  
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

iconsContenierEl.addEventListener("click",  changIcon);

function changIcon(event){
  let clickedicon= JSON.stringify(icons[event.target.id]);
  localStorage.setItem("clickedicon", clickedicon);
  newIcon.remove();
  placeIcon();
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

let formEl=document.getElementById('catalog');
formEl.addEventListener('submit',  addTshirtToCart);

  
function addTshirtToCart (event){
event.preventDefault();
let quantity=event.target.quantity.value ;
tsColorInLlocal = JSON.parse(localStorage.getItem('tsColor')) || [];
tshirt.addTshirt(tsColorInLlocal,iconImg,quantity);
saveToLocalStorage();

}

function saveToLocalStorage() {

  let tShirtInCart = JSON.stringify(tshirt.design);
  localStorage.setItem('t-shirtInCart',tShirtInCart);
};










