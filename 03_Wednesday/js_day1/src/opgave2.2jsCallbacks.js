/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// https://docs.google.com/document/d/1g4NPayMnNV8UUNdoTLZdcf4BehCip14QDuRwa4V7uFU/edit#heading=h.wf9m4t7jjio0

// 1)
console.log("\nOpgave 1)");
let names = ["Lars", "Jan", "Peter", "Bo", "Frederik"];
const result = names.filter(name => name.length <= 3);

console.log("\nAlle navne: ");
names.forEach(function (name) {
    console.log(name);
});
console.log("\nNavne med højst 3 bogstaver: ");
result.forEach(function (result){
    console.log(result);
});

// 2)
console.log("\nOpgave 2)");
let upperCase = names.map(names => names.toUpperCase());
console.log(upperCase);

// 3)
console.log("\nOpgave 3)");
let list = names.map(function (name){
    return "<li>" + name + "</li>";
});
let listString = "<ul>" + list.join("") + "</ul>";
console.log(listString);

// 4)
console.log("\nOpgave 4)");
var cars = [
  { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
  { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
  { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
  { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
  { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];

// Cars newer than 1999
console.log("Cars newer than 1999: ");
var newerCars = cars.filter(car => car.year > 1999);
console.log(newerCars);

// All Volvos
console.log("All Volvos: ");
var allVolvos = cars.filter(car => car.make === "Volvo");
console.log(allVolvos);

// All cars with a price below 5000
console.log("All cars with a price below 5000: ");
var cheapCars = cars.filter(car => car.price < 5000);
console.log(cheapCars);

// Asynchronous callbacks
// 1)
console.log("\nAsynchronous callbacks: ");
console.log("Opgave 1) ");
console.log("I rækkefølgen: aaa, ddd, fff, eee, bbb.");
console.log("Grund: Der er meget delay på bbb og lidt mindre på eee, men intet på de andre, som printes ud lige efter hinanden.");