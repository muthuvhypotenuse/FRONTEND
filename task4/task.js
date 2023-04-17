let count = 0
while(true){
count++
console.log(count)
if(count==10){
  break;
}
}


let city = [ 
"Andhra Pradesh",
"Assam",
"Bihar",
"Kerala",
"Goa",
"Tamil Nadu",
"Gujarat",
"Karnataka",
"Rajasthan",
"Sikkim",
]

city.push("Puducherry")
console.log("a)	Add a city in the end",city)

city.unshift("Delhi")
console.log("b)	Add a city in the start",city)

const first5 = city.slice(0,5);
console.log("c)	Get only the first 5 cities without modifying the array",first5)


const dscOrder = city.sort((a,b) =>b.localeCompare(a));
console.log("d)	Sort in descending order",dscOrder)

const filterCity = city.filter(city => city.length < 5);
console.log("e)	Filter city with name less than 5 characters and display the array length",filterCity)