//  Error creating an Instance problem
class Animal {
  constructor(_name) {
    this.name = _name;
  }
}

class Rabbit extends Animal {
  constructor(_name) {
    // this.name = _name; Changed
    super(_name);
    this.create = Date.now();
  }
}

var rabbit = new Rabbit("White Rabbit")
console.log(rabbit.name);