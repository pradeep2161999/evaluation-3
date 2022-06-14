# Evaluation -3

## 1.What is the scope of 'this' inside the arrow function Explain with an example?

```Javascript
"use strict";
const channel = {
  title: "Javascript",
  languages: ["tamil", "english"],
  subscribe: () => {
    console.log(this.title); //arrow function doesnot bind 'this'
  },
  Showvideos() {
    let sub = () => {
      console.log(this.title);
    };
    sub();
    console.log(this.languages);
  },
};
channel.subscribe();
channel.Showvideos();
```

## 2.How would you create all permutations of a string?

```Javascript
let str = "let";
let permutation = (str, result) => {
  if (str.length == 0) {
    console.log(result);
  }
  for (let i = 0; i < str.length; i++) {
    let rest = str.substring(0, i) + str.substring(i + 1);
    permutation(rest, result + str[i]);
  }
};
permutation(str, "");
```

## 3. What is the difference between when classic and arrow functions are used as event callbacks?

## 4. Look at the code below, you have a for loop if you have setTimeout inside it. If log the loop counter inside setTimeout, what will be logged?

### for(var i = 0; i < 10; i++) {

### setTimeout(function() {

### console.log(i);

### }, 10);

### }

```Javascript
for (let i = 1; i < 10; i++) {
  let k = i;
  setTimeout(function () {
    console.log(k);
  }, 1000 * (k + 1));
}
```

## 5. Explain the Class instance method and static method with an example?

## 6. How does “this” works inside the Class method with an example?

```Javascript
"use strict";
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}
const myCar = new Car("Ford", 2014);
console.log(myCar.name + " " + myCar.year);
```

## 7. What is the execution order of the following block of code?

### const ex1 = () => console.log(ex1)

### const ex2 = () => console.log(ex2)

### const ex = () => {

### console.log(ex)

### setTimeout(ex1, 1000)

### ex2()

### }

### ex()

## 8. Explain the event loop with an example?

```Javascript
function eventLoop() {
  console.log("Start");
  setTimeout(function () {
    console.log("Hello World!");
  }, 2000);

  console.log("End");
}

eventLoop();
```

## 9. Create a custom event listener and explain?

## 10. Explain the ‘super’ and ‘constructor’ keywords inside the Class with an example?

```Javascript
"use strict";
class Detail {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }

  method() {
    return `I am ${this.name}, from ${this.address}`;
  }
}

class Person extends Detail {
  constructor(name, address, age) {
    super(name, address); // These two class have some same property, through the super keyword we can access the name and address, without create another name and address.
    this.age = age;
  }
  method() {
    console.log(`${super.method()}, and I am ${this.age}.`);
  }
}

let person1 = new Person("Pradeep", "Aruppukottai", 23);

person1.method();
```
