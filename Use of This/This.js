const video = {
    number: "1,2,3,4,5,",
    names: ["jade ivan", "Proline","Basmayor","Bringcola"],
    add(){
        this.names.forEach(function(names){
            console.log(names)
        })
    }
    
}
video.add()

const addvideo = {
    number: "12345",
    names: ["jade ivan", "Proline","Basmayor","Bringcola"],
    add(){
        this.names.forEach(function(names){
            console.log(this.number, names);
        },this)
    }
    
}
addvideo.add()

class car{

    constructor (make,model,year,color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    }  

    drive(){
        console.log("You drive the", this.model)
    }
    brake(){
        console.log("You step on the",this.model, "break!")
    }

}

let car1 = new car ("BMX", "Supra", 2023 ,"red")
let car2 = new car ("lambo", "bugati", 2022 ,"white")

car1.drive()