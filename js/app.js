'use strict';

let imgContainer = document.getElementById("ob");
let imgFile = ["ballon.png", "bekind.png", "pizza.png", 'grunge.png', 'Etcher.png',  'a123 .png', 'pizza-slices.png', 'cat.png','money-bag.png','accident.png'];


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
  let imgIndex = 7;
  let clickedicon = JSON.stringify(imgFile[imgIndex]);
  localStorage.setItem("clickedicon", clickedicon);
  location.href = "shirt.html";

}

// ********************************************************************************************************************



