for (let i = 1; i < 10; i++) {
  let k = i;
  setTimeout(function () {
    console.log(k);
  }, 1000 * (k + 1));
}
