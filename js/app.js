'use strict';

let imgContainer = document.getElementById("ob");
let imgFile = ['cat.png', 'pizza-slices.png', 'money-bag.png','accident.png',"dolphin.png",'ostrich.png','penguin.png','cheetah.png','butterfly.png',"ballon.png", "bekind.png", "pizza.png", 'grunge.png', 'Etcher.png',  'a123 .png','hamster.png','bird.png','mushroom.png','Red-Mushroom.png','jordan.png','palestine.png','syria.png','sun.png','dahlia.png','sunflower.png','motorcycle.png',"nope.png",'sword.png',"wounded.png","wreath.png"];


let imgEl;
function render() {
  for (let i = 0; i < imgFile.length; i++) {
    let imgEl = document.createElement("img");
    imgEl.setAttribute("src", "images/icon/" + imgFile[i]);
    imgEl.setAttribute("class", "item");
    imgEl.setAttribute("width", "100px");
    imgEl.setAttribute("id", i);

    imgContainer.appendChild(imgEl);
  }
}
render();

imgContainer.addEventListener("click", goToCstmPage);

function goToCstmPage(event) {
  console.log(event.target.id);
  let imgIndex = event.target.id
  let clickedicon = JSON.stringify(imgFile[imgIndex]);
  localStorage.setItem("clickedicon", clickedicon);

  location.href = "shirt.html";
}


let btnEl = document.getElementById('btn');
btnEl.addEventListener("click", gotoShirtPage);

function gotoShirtPage() {
  let imgIndex = 0;
  let clickedicon = JSON.stringify(imgFile[imgIndex]);
  localStorage.setItem("clickedicon", clickedicon);
  location.href = "shirt.html";

}

// ********************************************************************************************************************



