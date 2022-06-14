let callback = () => {
  console.log(this); // it gives the window object.
};

document.addEventListener("click", callback);

function callBack() {
  console.log("Hi I am in Normal function");
}

document.addEventListener("onresize", callBack);
