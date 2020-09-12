/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// https://docs.google.com/document/d/1eEJbwvOn19fy9MoasclKURqpk3rRVSHZ4S0hGsQUG3s/edit
// a)
console.log("\nOpgave a:");
let boys = ["Peter", "lars", "Ole"];
let girls = ["Janne", "hanne", "Sanne"];
console.log(boys);

// b)
console.log("\nOpgave b:");
let all = boys.concat(girls);
console.log(all);

// c)
console.log("\nOpgave c:");
console.log(all.join());
console.log(all.join('-'));

// d)
console.log("\nOpgave d:");
girls.push("Lone", "Gitte");
console.log(girls);

// e)
console.log("\nOpgave e:");
boys.unshift("Hans", "Kurt");
console.log(boys);

// f)
console.log("\nOpgave f:");
boys.shift();
console.log(boys);

// g)
console.log("\nOpgave g:");
girls.pop();
console.log(girls);

// h)
console.log("\nOpgave h:");
all = boys.concat(girls);
console.log(all.join());
all.splice(3,2);
console.log(all.join());

// i)
console.log("\nOpgave i:");
console.log("everyone: ", all.join());
all.reverse();
console.log("reversed: ", all.join());

// j)
console.log("\nOpgave j:");
console.log("unsorted: ", all.join());
all.sort();
console.log("sorted: ", all.join());

// k)


// l)


// m)


// n)


// opgave 1 array...
// https://docs.google.com/document/d/1eEJbwvOn19fy9MoasclKURqpk3rRVSHZ4S0hGsQUG3s/edit