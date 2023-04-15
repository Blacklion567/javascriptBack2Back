//  DOM Manipulation


//  #getElementById()
const tittle = document.getElementById("main-heading")  //Select The (id="Name")

console.log(tittle)

/// #getElementByClassName()

const listItem = document.getElementsByClassName("list=item")   //  Select The (class="Name")


const title = document.getElementsByClassName("title")

console.log(Array.isArray(title))
console.log(Array.isArray(Array.from(title)))

Array.from(title).forEach(function(item){
    console.log(item)
})


//  #getElementByTagName()
const itemList = document.getElementsByTagName("li") //Select The Element of HTML like h1-h6, p, ul, li, ol, div, etc...

console.log(itemList);

//  #querySelector() 

const container = document.querySelector("div")

console.log(container)

//  #querySelectorAll()

const containers = document.querySelectorAll("div")

console.log(container) 

//StylingElement


const titles = document.querySelector('#main-heading')

titles.style.background = "black"
titles.style.color = "white"


const navList = document.querySelectorAll(".list-item");



for( i = 0; i < navList.length; i++){

    navList[i].style.fontSize = "2rem"

    navList[i].style.listStyle = "none"
}

 console.log(navList);





//  Creating Alements

const ul = document.querySelector("ul")
const li = document.createElement("li")

//  Adding Elements

ul.append(li)


//Modifying the text

li.innerText = "X-men"


//  Modifying Attributes & Classes

li.classList.add("list-items")

console.log(li.classList.contains("list-item"));


// Remove Elements

li.remove()









