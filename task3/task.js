// Question 4//
const number = 10;
for (i = 0; i < number; i++) {
  console.log(i);
}
// Question 5//
let number1 = 10;
let number2 = 20;
let sum = number1 + number2;

while (sum <= 50) {
  number1 += 1;
  number2 += 2;
  sum = number1 + number2;
  console.log(sum);
}
// Question 6//
const obj = {
  label: "Box",
  dimension: "22x33x22",
};

for (const key in obj) {
  obj[key];
  console.log(key, ":", obj[key]);
}
// Question 6//
const arr = [10, 20, 30];

for (const[index,value] of arr.entries(arr)) {
  console.log("index",index,":","value",value);
}
