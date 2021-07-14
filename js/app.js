'use strict';

let imgContainer = document.getElementById("ob");
let imgFile = ['cat.png', 'pizza-slices.png','batman.png','Bee.png','believe-in-you.png','bird2.png','blah-blah-blah.png','brain.png','Cob.png','creativity.png','Destroyed.png','Earth.png','Planets.png','Sun-Umbrella.png','superman.png','Flower.png','Flower-circle.png','Ladybug.png','light-bulb.png','Meteorite.png',"no-way.png" ,'money-bag.png','accident.png',"dolphin.png",'ostrich.png','penguin.png','cheetah.png','butterfly.png',"ballon.png", "bekind.png", "pizza.png", 'grunge.png', 'Etcher.png',  'a123 .png','hamster.png','bird.png','mushroom.png','Red-Mushroom.png','jordan.png','palestine.png','syria.png','sun.png','dahlia.png','sunflower.png','motorcycle.png',"nope.png",'sword.png',"wounded.png","wreath.png",'bunny.png','pikachu.png','splash.png','surprised.png'];


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
  if (event.target.id !=='ob'){
  let imgIndex = event.target.id
  let clickedicon = JSON.stringify(imgFile[imgIndex]);
  localStorage.setItem("clickedicon", clickedicon);

  location.href = "shirt.html";
  }
}

let imgIndex = 0;
let clickedicon = JSON.stringify(imgFile[imgIndex]);
localStorage.setItem("clickedicon", clickedicon);

let btnEl = document.getElementById('btn');
btnEl.addEventListener("click", gotoShirtPage);
function gotoShirtPage() {
  location.href = "shirt.html";

}

// ********************************************************************************************************************
let numOfItemInCart = JSON.parse(localStorage.getItem('numOfItemInCart')) || [];
let cartNavEl = document.getElementById("ss");
cartNavEl.textContent=`${numOfItemInCart}`;

// function addToCounter() {

//   numOfItemInCart[0]++

//   let numOfItemInCartInLocal = JSON.stringify(numOfItemInCart);
//   localStorage.setItem('numOfItemInCart', numOfItemInCartInLocal);

//   cartNavEl.textContent=`${numOfItemInCart}`;
// }
// *************************************************************************************************************

const observer = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('L1-anime');
    }
  });
});

observer.observe(document.querySelector('.anowrap'));


const observer1 = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('L2-anime');
    }
  });
});

observer1.observe(document.querySelector('.modwrap'));


const observer2 = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('L3-anime');
    }
  });
});

observer2.observe(document.querySelector('.decwrap'));