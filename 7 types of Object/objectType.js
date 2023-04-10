// 7 Different Ways To Create Objects In Javascript.

// 1.Object Literal or Object Initializer
// let o1 = {}
// let o2 = {
//     names: "Proline" 
// }
// let o3 = {
//     firsthand: "JAde ivan",
//     show : function(){
//         return this.show;
//     }
// }
// console.log(o1)
// console.log(o2.names)
// console.log(o3.show())


// 2.Object.create() method

// var car = {
//     model: "BMW",
//     color: "red"
// }

// var ElectricCar = Object.create(car)

// console.log(ElectricCar.model)

// 3.Object Constructor
//let o1 = new Object();

// 4.Function Constructor
// function employee (name, age){
//     this.name = name
//     this.age = age
// }
// let o1 = new employee("Proline", "19")
// console.log(o1.name)

// 5. Functions COnstruction With Prototype
// function Person(){}
// Person.prototype.name = "Proline"

// let o1 = new Person();
// console.log(o1.name)

// 6.ES^ Class Syntax
// class Person{
//     constructor(name){
//         this.name = name
//     }
//     show = () => {
//         return this.name
//     }
// }

// let o1 = new Person("Proline");
//console.log(o1.name)
// console.log(o1.show)

// 7. Singleton Pattern 
// let o1 = new function(){
//     this.name = "Proline"
// }
// console.log(o1.name)
// let jade = {
//     names: "Proline",
//     LastName: "Basmayor"
// }
// jade.names = "Bandev</>"


// console.log(jade.names,jade.LastName)