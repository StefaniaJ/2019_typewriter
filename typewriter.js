"use strict";

let pos = 0;
let speed = 180;
let typewriter = document.querySelector(".typewritten").textContent;

//console.log(typewriter);

// empty the typewriter id from html
document.querySelector(".typewritten").textContent = "";

//function type
function type() {
  if (pos < typewriter.length) {
    document.querySelector(".typewritten").textContent += typewriter.charAt(
      pos
    );
    pos++;
    setTimeout(type, speed); // call this again to type all letters
  } else {
    pos = 1;
    document.querySelector(".typewritten").textContent = "";
    setTimeout(type, speed);
  }
}

setTimeout(type, speed);
