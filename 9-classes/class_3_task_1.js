class Object {
  constructor(_name) {
    this.name = _name;
  }
}

class Rabbit extends Object {
  constructor(_name) {
    super(_name)
    // this.age = 22;
  }
}

let rabbit = new Rabbit("Rab");

console.log(rabbit.hasOwnProperty("name"));
