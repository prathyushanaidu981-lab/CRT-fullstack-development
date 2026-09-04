console.log("start")
console.log("Learning JS")
console.log("end")

//Asynchronous
console.log("Start");
setTimeout(() => {
    console.log("Hello")

},2000);//2sec
console.log("End");

//setTimeout():execute a function "Once" a 
//specified delay

`
syntax:
setTimeout(function()){
  //code
  },delay);

`
//Example:
setTimeout(function(){
    console.log("Hello Students")
},3000);
//Example:
console.log("Program Started")
//store time in timer
let timer = setTimeout(() => {
    console.log("Loading complete")
}, 50000);
console.log(timer)
console.log("Program finished");

//clearTimeout():stops a time before executing
clearTimeout(timer);
let timer1 = setTimeout(() => {
    alert("session expired")
},10000);
//cancel timeout
//clearTimeout(timer1)

//setInterval():
//repeatedly executes a function
//after a specified interval 

`
setInterval(function(){
     //code
},delay);
`

//Example:
setInterval(function(){
    console.log("hello")
},2000);

//counter Example:
let count = 1
let counter = setInterval(()=>{
    console.log(count);
    count++;
    if(count == 10){
        clearInterval(counter)
    }
},1000);

setInterval(()=>{
    let time = new Date();
    console.log(time.toLocaleTimeString)
},1000);
//OTP expiry
//SPlash screen
//Auto logout
//delay notification
//Loading screen
let colors=["red","green","blue","pink"];
let index = 0;
setInterval(() => {
    document.body.style.backgroundColor = colors[index];
    index++;
    if(index==colors.length){
        index=0;
    }
},2000);
//Calllbacks:helps you executes task
//after another task finishes

//callback Functions:passed as argument 
//to another function
//callback function
function greet(name){
    console.log("hello"+name);
}
//higher orderfunction
function process(Callback){
    Callback("Prathysha");
}
process(greet);
//Note : setTimeout():uses callback funct
//setTimeout(function(){
//})

//Asyn callbacks
setTimeout(function(){
    alert("hello")
})

//Multiple asyn tasks:
`
login
  |
get orders
  |
payments
  |
Logout

setTimeout()--callbacks
problem:callbacks leads to nested code

Callback hell:occurs when multiple callbacks
nested inside one another
1.read
2.debug
3.maintain
`
login(function(){
    getprofile(function(){
        getorders(function(){
            makepayment(function(){
                logout(function(){
                    console.log("done")
                });
            });
        });
    });
});

//to solve the above problem
//Promises:

let promise = new Promise((resove,reject)=>{
    console.log(resolve("Success"));
});

console.log(promise)
//resolve is called:op is successful

//Handle the success
promise.then((result)=>{
    console.log(result)
});

//reject():called when op fails
let promise1 = new
Promise((resolve,reject)=>{
    reject("Network Error");
});
 promise1.catch((error)=>{
     console.log(error)
 });

//then():successful execution
//catch():used to handle the errors

function login(){
    return new
    Promise((resolve,reject)=>{
        let sucess = true;
        if(sucess){
            resolve("Login successfull")
        }
        else{
            reject("Login Failed")
        }
    })
}
//callbackhell:        
login(function(){
    profiler(function(){
        orders(function(){
            console.log("changing process")
        });
    });
});
//promises
// login()
// .then(getprofile)
// .then(getorders)
// .catch(error)

//Fake API call
function fetchDate(){
    return new
    Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("data received")
        },3000);
    });
}
console.log("loading...")
fetchDate()
.then((data)=>{
    console.log(data)
})
console.log("please wait...")

`
Promise Flow:

create a promise
      |
      Pending -->reject()->.catch
      |      No
      Success?
      |yes 
      resolve()
      |
      .then()

`

//drawback on promises:
//It works well but when multiple asynchronous are invloved
//the code becomes deficult to read
//Javascript "Async/Await" 
//makes async code look like 
//synchronous code

//what is async await:
//syntatic sugar built on top of promises
//It makes async code:
`
1.easier to read
2.easier to write
3.easier to debug
4.easier to maintain

`
//Promise example
login()
.then(getprofile)
.then(getorder)
.then(makepayment)
.then(handleeror)

//Async/Await
async function app(){
    const user = await login();
    const profile = await getprofile();
    const orders = await getorders();
}
//async-->keyword used before function
//it will automatically makes the function
// returns a promise
//async function function_name()

async function greet(){
    //returned value automatically ecomes
    //promise.resolve(...)
    return "Welcome to Collage"
}
//calling
greet().then((message)=>{
    console.log(message)
})

//return numbers 
async function add(){
    return 100;
}
add().then((result)=>{
    console.log(result);
})

//Example:
function fetchData(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resoved("data loaded")
        },3000);
    });
}
async function display(){
    let data = await fetchData();
    console.log(data)
}
display();
//Tak:Login promise-create
//use asyn await to finish the above promise
// function fetchData(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("login successful")
//         },1000);
//    });
// }

function login(){
    return new
    Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Login Successful");
        },2000);
    });
}
function login2(){
   return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("login successfully")
       },2000);
    });
}
async function userlogin() {
    console.log("loading..")
    let result=await login();
    console.log(result);
    let result2=await login2();
    console.log(result2);
}
userlogin();

//Error Handling:
`
try{
    risky code
}
catch(error){
    //handle
}    
`
try{
    console.log(a)
}
catch(error){
    //this block will be executed
    //instead of crashing
    console.log("Variable does not exit")
}

//Try-catch with async await
function payment(){
    return new
    Promise((resolve,reject)=>{
        let success = false;
        if (success){
            resolve("Payment Succesful")
        }
        else{
            reject("Payment failed")
        }
    });
}
async function makepayment(){
    try{
        let result = await payment();
        console.log(result)
    }
    catch(error){
        console.log(error);
    }
    finally{
        console.log("Transaction completed")
    }
}
makepayment();

   