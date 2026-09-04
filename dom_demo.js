//selecting the elements
let heading = document.getElementById("title")
console.log(heading)
//2nd method
//Query selector():
//Return the first matching element
//id,class,tag
let heading1 = document.querySelector("#title")
console.log(heading1)

let Bio = document.querySelector(".bio")
console.log(Bio)

//selecting by tagname
let heading2 = document.querySelector("h2")
console.log(heading2)

//selecting all same tags
let paragraphs = document.querySelectorAll("p")
console.log(paragraphs)

//Loop through the elements
paragraphs.forEach((item)=>{
    console.log(item.innerText);
});

//Manipulation:change the text
heading.innerText="Welcome to Chalapathi";

//Reading the element:
console.log(
    document.getElementById("title").innerText
)

//Reading the html
console.log(
    document.getElementById("title").innerHTML
)

document.getElementById("course").innerHTML="JavaScript"

//changing the multiple elements
let paragraph = document.querySelectorAll("p")
paragraph.forEach((para)=>{
    para.innerText = "all";
});
//JS can change css also
function changeStyle(){
    let heading3 = document.getElementById("title")
    heading3.style.backgroundColor="yellow";
    heading3.style.fontSize = "40px";
    //Boredr 
    heading.style.border = "2px solid black"
    heading.style.width = "200px"
};
//Task : Theme switcher -- black an white
//changing heading text

