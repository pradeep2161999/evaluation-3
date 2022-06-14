"use strict";
function eventLoop() {
  console.log("Start");
  setTimeout(function () {
    console.log("Hello World!");
  }, 2000);

  console.log("End");
}

eventLoop();
