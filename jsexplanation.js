//conditional statements
//1.If statement
let age=20;
if (age>=18){
    console.log("Eligible")
}
//2.If-else 
if(age>=18){
    console.log("Eligible")
    document.write("Eligible")
}
else{
    console.log("Not Eligible")
}
//Else-if ladder:
let marks=89;
if(marks>90){
    console.log("Grade A")
}
else if(marks>=80){
    console.log("Grade B")
}
else if(marks>45){
    console.log("Grade C")
}
else{
    console.log("Fail")
}
//4.Switch Statement
let day = 2
switch(day){
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("wednesday") 
        break;
    default:
        console.log("Invalid day")      
}
//For loop :
for (let i = 0; i<=5; i++){
    console.log(i)
}
//Multiplication table of 7
//use template literals
// Multiplication table of 7 using template literals and for loop

for (let i = 1; i <= 10; i++) 
    {
    console.log(`7 x ${i} = ${7 * i}`);
}
// 2.Do sum of all odd numbers
//from 5 to 50
let sum =0;
for (let i=1; i<=50;i++)
{
    if(i%2!=0){
        sum+=i;
    }
}
console.log("sum=",sum);

// find the fact of 6
let fact=1
for(let i =6; i>=1;i--){
    fact*=i;
}
console.log(fact);
//While loop:
let i=1
while(i<=5){
    console.log(i)
    i++;
}
//do while loop:
let password;
do{
    pssword = prompt("Enter the password")
}
while(password!=1234);{
   console.log("Login success")
}
//continue:skips the current iteration
for(let i = 1;i<=10;i++){
    if(i==5){
        continue;
    }
    console.log(i);
}

// sum of first n numbers
let n = Number(prompt("Enter the number:"))
let total = 0
for (let i = 1; i<=n;i++){
    total = total+i
}

