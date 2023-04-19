// Question 2

// import : Used to read code exported from another module

// export : Used to provide code to other modules



// Question 3

// default exports and named exports. But you can use one or both of them in the same file. A file can have not more than one default export, but it can have as many named exports as you like

// Export Statements:
// export default function Button() {} // default export
// export function Button() {} // named export

// Import Statements:
// import Button from './button.js'; // default export
// import { Button } from './button.js'; // Named export


// Question 4

class Car {
  name;
  model;
  constructor(carName, carModel) {
    this.name = carName;
    this.model = carModel;
  }
  
  getModel() {
    return this.model;
  }
  
  setModel(model) {
    this.model = model;
  }
}


const myCar = new Car('Toyota', 'Camry');

console.log(myCar.name);      
console.log(myCar.getModel());

myCar.setModel('Corolla');
console.log(myCar.getModel());