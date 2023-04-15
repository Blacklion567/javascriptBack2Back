// DOM Manipulation

const tittle = document.querySelector('#main-heading')

tittle.style.background = "black"
tittle.style.color = "white"


const listItem = document.querySelectorAll(".list-item");



for( i = 0; i < listItem.length; i++){

    listItem[i].style.fontSize = "3rem"      //Css = font-size: 2rem; But in Javascript is fontSize

    listItem[i].style.listStyle = "none" //Css = list-Style: 2rem; But in Javascript is listStyle
}

 console.log(listItem);
