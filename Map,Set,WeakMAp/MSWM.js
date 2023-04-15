// Set
/// [1,3,4,2,7,5,6,8,10,9]


function getRandom(){
    return Math.round(Math.random(10)*10);
}
const mySet = new Set();

while(mySet.size < 10){
    mySet.add(getRandom())
}
console.log([mySet])


// Map
const calculator = {
    add: (a,b) => a + b,
    minus: (a,b) => a - b
}

const myMap = new Map()
myMap.set(calculator.add, "This is a add function")
myMap.set(calculator.minus, "This is a minus function")

function getDescription(_funName){ 
    return myMap.get(_funName)
}
console.log(getDescription(calculator.add))

// WeakSet

const myWeakSet = new WeakSet()

let myObj = {a: 1}
myWeakSet.add(myObj)
console.log(myWeakSet)

setTimeout(() => console.log(myWeakSet))

// WeakMap


