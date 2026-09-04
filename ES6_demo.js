//ES6 concept:
//`` --- Template literal `${}`
//old method

var name = "Prathyu"
console.log("Hello",+name)
//with ES6
const name1="Saranya";
console.log(`Hello${name1}`)
//let vs var 
var name="Jagruthi"
var name="Jaithri"
var name="Dhatrhi"
console.log(name)
//var redeclares the variable
//which can lead to bugs
//let: when the value
//needs to be changed

let age = 22;
age=33;
console.log(age)
//Const:don't want to change value
const pi = 3.14;
//pi = 3.15
//const pi = 3.17;// can't redeclare
//objects with const
//values can be modified
const student={
    name:"Avi",
};
student.name = "Bhargavi"
console.log(student)

//Arrow functions:
//function greet(){
//    return "hello"+name
//};
//calling 
//greet("prathyu")
//New school
const greet =(name)=>{
    return "hello"+name
};
console.log(greet("prathyu"));
//single line short funct
const greet1 =name =>`hello${name}`;
//console.log(greet1("Prathyu"))

//Addition
const addition =(a,b)=>{
    return a+b
}
console.log(addition(3,5))

//Task:Create an arrow func
//to calculate simple interest
//why arrow function is react

//const App = () =>{

//    return <h1>Hello</h1>
//}
//Expression:
let a = 20;
let b = 30;
console.log(`sum is ${a+b}`)

//multiline strings:
let message=`
hello i am a good student
also a good girl
      
`;
console.log(message)

//default parameters
function greet3(name="guest"){
    console.log(`hello ${name}`)
};
greet3();
//arrow func
const greet4=(name="srilatha")=>{
    console.log("hello"+name)
};
greet4()


//Desrtucturing:allows exctracting
//values from arrays
//or objects into variables

let colors = ["Red","Blue","green","voilet"]
let first = colors[0];
console.log(first)
let second = colors[1];
console.log(second)

//Destructering:
let [first1,second1] = colors;
console.log(first1)
console.log(second1)
 
let numbers = [10,20,30,40,50]
let p = 10
let q = 30
//skips the value
let [x,,z] = numbers;
console.log(x);
console.log(z)

//Rest operator with destructering
let [first2,...remaining] = numbers;
console.log(first2)
console.log(remaining)

//Object Destructering:
let faculty ={
    name8 : "Suresh",
    branch2 : "DS",
    f_id : 16
};
//let name5 = faculty.name;
//let branch = faculty.branch;

//des:
let {name8,branch2} = faculty;
console.log(name8);
console.log(branch2);

//renaming the variables
let {name8:FacultyName} = faculty;
console.log(FacultyName)
console.log(faculty)

//Default values
let {name8:FacultyName1,city="Hyd"} = faculty
console.log(city)

//Nested objects Destructering
let Student = {
    first_name:"Lilly",
    address:{
        city1:"Hyderabad",
        state:"TS"
    }
};
let {address:{city1}}=Student;
console.log(city1)
//Advanced Es6 concepts

//spread operator(...):
//Expand the array or object into individual
//elements or properties
//used for :
//1.copy arrays
//2.Merge arrays
//3.copy objects
//4.Merge objects
//5.pass array elements 
//as function arguments

//syntax :...array,...object
//Example:
nums = [10,20,30,40]
//spread expands array into individual 
//values
console.log(...nums)

//Example2:
let arr1 = [10,20,30,40]
let arr2 = [...arr1];
arr2.push(50);
console.log(...arr1);
console.log(...arr2);


//Example3:
let frontend = ["HTML","CSS"]
let backend = ["Node","Express"]
let fullstack = [...frontend,...backend]
console.log(fullstack)

//Spread objects:
let frnds ={
    f_name:"Lilly",
    age: 21
};
let copy ={
    ...frnds
};
console.log(copy)

//Merging the objects
let personal ={
    first_name:"Nani",
};
let address = {
    current_city:"Guntur"
};
let merged ={
    ...personal,
    ...address
}
console.log(merged)

//Rest parameters:(...)
//spread --> expand the values
//rest -->collects the value

//syntax:
//function demo(...values){}

function sum_demo(...numbers){
    let total=0
    for(let num of numbers){
        total +=num;
    }
    return total
};  
console.log(sum_demo(10,20,30))
console.log(sum_demo(20,40,50))

function student2_marks(name,...marks){
    console.log(name);
    console.log(marks);
};
student2_marks("Rahul",80,40)

//Enhanced object literals
//object will be shorter
let f_name = "Prathyu"
let l_name = "sha"
//self.name = name
let Employee = {
    f_name:f_name,
    l_name:l_name
};
console.log(Employee)

//with ES6
let company={
    f_name,
    l_name
};
console.log(company)  



