// Question 4

if (new Array()) console.log("Message displayed");
// The condition new Array() will evaluate to true

if ("false") console.log("Message displayed");
// The condition "false" will evaluate to true

if ("") console.log("Message displayed");
// The condition "" will evaluate to false

if ({}) console.log("Message displayed");
// The condition {} will evaluate to true

const name = "muthu";
const age = 29;

function getNameAge(name, age) {
  return `name:${name} & age:${age}`;
}

console.log(getNameAge(name, age));


// Question 5

// Example object to copy
const obj = {
  name: "muthu",
  age: 29,
  hobbies: ["reading", "playing"]
};

// Shallow copy
// In Shallow copy, a copy of the original object is stored and only the reference address is finally copied.

const shallowCopy = Object.assign({}, obj);
console.log(shallowCopy)

// Deep copy
// In Deep copy, the copy of the original object and the repetitive copies both are stored.

const deepCopy = JSON.parse(JSON.stringify(obj));
console.log(deepCopy)
