// create a stack 
let Stack = function(){
    this.count = 0;
    this.storage = {}
}
// Adds a value onto the end of the stack
this.push = function(value){
    this.storage[this.count] = value;
    this.count++;
}

// Removes and returns the value at the end of the stack
this.pop = function(){
    if (this.count === 0){
        return undefined;
    }

    this.count--;
    let result = this.storage[this.count]
    delete this.storage[this.count]
    return result;
}

console.log(tack)
//Returns the value ate the end of the stack
