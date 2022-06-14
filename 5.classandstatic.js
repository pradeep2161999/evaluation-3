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
