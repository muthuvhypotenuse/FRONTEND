
const number = 15;
const number2= 11;
if (number % 3 === 0) {
  console.log("Foo");
}
else if (number % 5 === 0) {
  console.log("Bar");
}
else if (number % 3 === 0 && number % 5 === 0) {
    console.log("Foo & Bar");
  }
else if (number2 % 3 !== 0 && number2 % 5 !== 0){
  console.log("Neither Foo nor Bar");
}

const result = (number > number2) ? (number + number2) : (number - number2);
console.log(result);
const result2 = (number < number2) ? (number + number2) : (number - number2);
console.log(result2);