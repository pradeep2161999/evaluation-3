//10. Explain the ‘super’ and ‘constructor’ keywords inside the Class with an example?
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
