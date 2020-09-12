/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//Observe: no return type, no type on parameters

// JavaScript functions
// https://docs.google.com/document/d/1g4NPayMnNV8UUNdoTLZdcf4BehCip14QDuRwa4V7uFU/edit#

// 1)
function add(n1, n2){
   return n1 + n2;
}

var sub = function(n1, n2){
  return n1 - n2;
}

var cb = function(n1, n2, callback){
  return "Result from the two numbers: " + n1 + " + " + n2 + " = " + callback(n1, n2);
}

// 2)
console.log(add(1,2));          // 3
console.log(add);               // "Function:add"
console.log(add(1,2,3));        // 3 fordi add kun tager de første to parametre
console.log(add(1));            // No result?
console.log(cb(3,3,add));       // Result .... 3 + 3 = 6
console.log(cb(4,3,sub));       // Result .... 4 - 3 = 1
// console.log(cb(3,3,add()));  // Runtime error?
console.log(cb(3,"hh",add));    // Result .... 3 + hh = 3hh

// 3)
/*
 * typeof n1 === "number";
typeof callback === "function";

var cb1 = function (n1, n2, callback){
    try{
        if((typeof callback === "function") && (typeof n1 === "number") && (typeof n2 === "number")){
            return "Result from the two numbers: " + n1 + " + " + n2 + " = " + callback(n1, n2);
        } else {
            throw new Error('Whoops!');
        } catch (e) {
             console.error(e.name + ': ' + e.message);
        }
    }
}

function mul (n1, n2){
    return n1 + n2;
}

function sub
 * 
 */
