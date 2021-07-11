'use strict';

// ***********************************************************************************************************
// let iconImgs = [];

// function Img(name) {
//   this.imgName = name.split(".")[0];
//   this.filePath = name;
//   iconImgs.push(this);
// }

// for (let i = 0; i < imgFile.length; i++) {
//   // object maker
//   new Img(imgFile[i]);
// 
// ************************************************************************************************************
let imgContainer = document.getElementById("ob");
let imgFile = ["ballon.png", "bekind.png", "pizza.png", "ltcu.jpg", 'grunge.png', 'Etcher.png','logo.jpg','logo2.jpeg','a123 .png'];
let imgEl;
function render() {
  for (let i = 0; i < imgFile.length; i++) {
    let imgEl = document.createElement("img");
    imgEl.setAttribute("src", "images/" + imgFile[i]);
    imgEl.setAttribute("class", "item");
    imgEl.setAttribute("width", "100px");
    imgEl.setAttribute("id", i);

    imgContainer.appendChild(imgEl);
  }
  
}
render();

imgContainer.addEventListener("click", goToCstmPage);

let clickedicon='grunge.png';
localStorage.setItem("clickedicon", clickedicon);

function goToCstmPage(event) {
  console.log(event.target.id);
  let imgIndex = event.target.id
   clickedicon= JSON.stringify(imgFile[imgIndex]);
  localStorage.setItem("clickedicon", clickedicon);

  location.href = "shirt.html";
  
}
let btnEl= document.getElementById('btn');
btnEl.addEventListener("click",goto);
function goto (){
  let imgIndex =2;
  clickedicon= JSON.stringify(imgFile[imgIndex]);
 localStorage.setItem("clickedicon", clickedicon);
location.href = "shirt.html";

}

// ********************************************************************************************************************



