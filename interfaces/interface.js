"use strict";
// 1) створити інтерфейс на основі цього объекта:
//     Зверніть увагу там де масиви... в них може бути багато однотипних обїектів
exports.__esModule = true;
var user = {
    name: 'Max',
    age: 18,
    gender: 'male'
};
function sum(a, b) {
    return a + b;
}
//----------------------------------------
// function showSum(a,b){
//     console.log(a + b);
// }
function showSum(a, b) {
    console.log(a + b);
}
//----------------------------------------
// function incAge(someUser, inc){
//     someUser.age+=inc
//     return someUser
// }
function incAge(someUser, inc) {
    someUser.age += inc;
    return someUser;
}
console.log(sum(1, 2));
showSum(2, 3);
console.log(incAge(user, 2));
