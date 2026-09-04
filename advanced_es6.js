//Before ES6
let student = {
    greet:function(){
        console.log("Hello");
    }
};
student.greet()
// with ES6
let student1 ={
    greet(){
        console.log("Hello");
    }
};
student1.greet()

//computed property names
let key = "course";
let student2 ={
    [key]:"MERN"
};
console.log(student2)

//Optional chaining(?.)
//OC safely access nested properties
//withot oc
let faculty1 = {
    name:"Naresh"
};
//Prevents the errors when property is not available
console.log(faculty1.address?.city);

//Nested Example:
let Employee = {
    personal:{
        name:"Rahul"
    }
}
console.log(Employee.personal?.location)
//optional chaining with arrays
let colors = ["red","green"];
console.log(colors[0])
console.log(colors?.[6])

//OPCwith functions
let student3={
    greet(){
        console.log("Hello")
    }
};
student3.greet?.()

//Nullish Coalescing(??)
//Provides a default value "Only"
//when the left value is either Null or Undefined
//Syntax: value??defaultvalue

//Example:
let username = "prathyu";
console.log(username??"Guest")

let city;
console.log(city??"somewhere on the earth")

//      //
let age = 0;
console.log(age ?? 18)

let score = null;
let result = score??36;
console.log(result);

//React Example:
const employee1={
    id:101,
    name:"seema"
};
console.log(employee1.address?.city??"Not Available ")

let array=[10,20,30,40]
for(i=0;i<array.length;i++){
    console.log(array[i]);
}
//New method
array.forEach((num)=>{
    console.log(num);
});

//Callback function:
//is a function passed as an argument to another function
//callback function
function greet(name){
    console.log("Hello"+name)
};
//Higher order function
function process(Callback){
    //calling callback
    Callback("Prathyusha")
}
process(greet)

//callback using Arrow function 
function process(callback){
    callback()
};
process(()=> {
    console.log("Welcome students")
})

//Higher oreder function 
// It accepts another function as an argument
             // (or)
// returns another function
//Higer oreder function
function calculate(operation,a,b){
    return operation(a,b)
}
function add(a,b){
    return a+b;
}
console.log(calculate(add,10,20))
function sub(a,b){
    return a-b;
}
console.log(calculate(sub,20,10))
function mul(a,b){
    return a*b;
}
console.log(calculate(mul,5,8))
function div(a,b){
    return a/b;
}
console.log(calculate(div,16,4))

//For each-->used for iterations
//syntax:array.forEach(function(element){
//});
let numbers = [10,20,30,40]
numbers.forEach(function(num){
    console.log(num)
});

//Arrow function:
numbers.forEach((num,index)=>{
      console.log(index,num)
})

//Map():map(function,iterable)->python
//creates new array
//Original array remains unchanged
let nums = [10,20,30];
let doubled = nums.map((num)=>{
    return num*2;
})
console.log(doubled)

//let names=["Rahul","Priya","vishnu"]
//use map to make all the names to uppercase

let names = ["Rahul","Priya","vishnu"]
let Upper = names.map(name=>name.toUpperCase());
console.log(Upper)

//Filter:returns elements satisfying the condition

let number = [10,20,30,40,50]
let even = number.filter(num=> num%2==0);
console.log(even)

//reduce():reduces array into a single unit

let nums1 = [10,20,30];
let sum = nums1.reduce((total,num)=>{
    return total+num;
},0)
console.log(sum)

//Find():returns first matching element 
let value = nums1.find(num=>num>25);
console.log(value);

let Students = [
    {id:1,name:"Rahul"},
    {id:2,name:"Teju"}
]
let student5 = Students.find(s=>s.id==2);
console.log(student5)

//some(): returns true if any element satisfy
console.log(nums1.some(num =>num>25))

//every():returns true if all elements satisfy the condition

console.log(nums1.every(num =>num>5))

//variable scope:
function teacher(){
    var hello = 10;
    let age1 = 33;
    console.log(age1)
    console.log(hello)
}
teacher()
//console.log(age1)
//console.log(hello)

//Block scope
//Anythng inside the curly{} braces is block scope
if(true){
    let city = "Hyd";//can't accessed &have block scope
    var country = "India"//var can be accessed //function scope only
    const frnd = "Avi"//can't accessed & have block scope
}
console.log(city)
console.log(country)
//console.log(frnd)

if(true){
    var a = 10;
    let b = 20;
    const c = 30;
}
console.log(a)
//console.log(b)
//console.log(c)

//closures:
//inner function remebers variables
//from its outer function even after
//outer function completes execution

function outer(){
    let count = 0;
    function inner(){
        count++;
        console.log(count);
    }
    return inner;
}
const counter = outer();
counter()
counter()
counter()

//Lexical environment:
//is created when ever a function is created
//stores :variables , functions
//  it stores the reference to the parent scopes

//let x = 10;
//function outer(){
  //  let y = 20;
    //function inner(){
      //  console.log(x);
        //console.log(y);
    //}
    //inner()
//}
//outer();

//Every function knows where it is created
//That is called Lexical environment


//How javascript executes the code

      `                      
      Javascript File\
            |
       exection context created(an environment where js code executes)
            |
      code  Executes
            |
       functions added to call stack
            |
       stack becomes empty
            |
       Program will be ended
      

    -->Every program has a global execution context

    Every Function call creates

    Function Execution  context

let a = 10;
function greet(){
console.log("Hello)
};

greet()

                      Global execution context
                                |
                              greet()
                                |
                      function execution context
                                |
                             Removed

     1st Phase:Memory creation Phase
         Js allocate memory
                var a;
                  |
           function greet(){}
                   |
           2nd pahse: Execution phase
            values are assigned
            and functions are executed
                    |
           # call stack:keeps a track of functions
           LIFO:Last In First Out


           `
