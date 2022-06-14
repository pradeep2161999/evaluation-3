const ex1 = () => console.log(ex1);
const ex2 = () => console.log(ex2);
const ex = () => {
  console.log(ex);
  setTimeout(ex1, 1000);
  ex2();
};
ex();

// step 1: First the ex() is called then the JavaScript interpreter goes into the function ex

// step 2: And then it prints the ex function.

// step 3: Now the setTime out executed.

// step 4: While the setTimeout takes one second, The call stack executes the next statement(ex2()).

// step 5: After setTimeout took one second, the callback function goes to callBack queue.

// step 6: Then the statement (ex1()) is pushed to callstack, Finally the ex1 is executed.
