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

output:

```
undefined
Javascript
[ 'tamil', 'english' ]
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

Output:

```
PS F:\Yavar\evaluation-3> node 2.permutationofstring.js
let
lte
elt
etl
tle
tel
```

## 3. What is the difference between when classic and arrow functions are used as event callbacks?

```Javascript
let callback = () => {
  console.log(this); // it gives the window object.
};

document.addEventListener("click", callback);

function callBack() {
  console.log("Hi I am in Normal function");
}

document.addEventListener("onresize", callBack);
```

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

Output:

```
PS F:\Yavar\evaluation-3> node 4.settime.js
1
2
3
4
5
6
7
8
9
```

## 5. Explain the Class instance method and static method with an example?

```Javascript
// Class instance method
class Detail {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  classMethod() {
    console.log(`Hi ${this.name} your age is ${this.age}`);
  }
}

const obj = new Detail("Pradeep", 23);
obj.classMethod(); // class instance methhod can be accessed by the class instance (Object)

//Static method

class Person {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }

  static staticMethod(name, address) {
    console.log(`${name} from ${address}`);
  }
}

let person = new Person("Pradeep", "Aruppukottai");
console.log(person);
Person.staticMethod("Pradeep", "Aruppukottai"); // And the static method can be only accessed by the class name.
```

Output:

```
PS F:\Yavar\evaluation-3> node 5.classandstatic.js
Hi Pradeep your age is 23
Person { name: 'Pradeep', address: 'Aruppukottai' }
Pradeep from Aruppukottai
```

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

Output:

```
PS F:\Yavar\evaluation-3> node 6.thisinside.js
Ford 2014
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

```Javascript
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
```

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

Output:

```
PS F:\Yavar\evaluation-3> node 8.eventloop.js
Start
End
Hello World!
```

## 9. Create a custom event listener and explain?

```Javascript
<html>
  <head>
    <title>Custom Events in JavaScript</title>
  </head>

  <body>
    <h2 id="number">Hello</h2>

    <script type="text/javascript">
      const headerTage = document.getElementById("number");
      console.log(headerTage);

      headerTage.addEventListener("numberChanged", function (e) {
        headerTage.textContent = e.detail.number;
        headerTage.style.color = e.detail.textColor;
      });

      function changeNumber(n, c) {
        const event = new CustomEvent("numberChanged", {
          detail: {
            number: n,
            textColor: c,
          },
        });
        headerTage.dispatchEvent(event);
      }
    </script>
  </body>
</html>
```

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

Output:

```
PS F:\Yavar\evaluation-3> node 10.superandconstructor.js
I am Pradeep, from Aruppukottai, and I am 23.
```
