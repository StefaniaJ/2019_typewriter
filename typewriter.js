"use strict";

let pos = 0;
let speed = 180;
let typewriter = document.querySelector("#typewriter").textContent;
//console.log(typewriter);

// empty the typewriter id from html
document.querySelector("#typewriter").textContent = "";

//function type
function type() {
  if (pos < typewriter.length) {
    document.querySelector("#typewriter").textContent += typewriter.charAt(pos);
    pos++;
    setTimeout(type, speed); // call this again to type all letters
  } else {
    pos = 1;
    document.querySelector("#typewriter").textContent = "";
    setTimeout(type, speed);
  }
}

setTimeout(type, speed);
