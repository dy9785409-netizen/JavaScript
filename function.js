
//different type of function declared when which function need you can do called it 
// function hello(){
//     console.log("hello world");
// }
// function printName(){
//     console.log("Dinesh kumar");
//     console.log("learning from apna college");
// }
// function print1to5(){
//     for(let i=1;i<=5;i++){
//         console.log(i);
//     }
// }
// function isAdult(){
//     let age=prompt("enter a age ");
//     if(age>=18){
//         console.log("you are eligible for vote");
//     }
//     else{
//         console.log("you can wait some time");
//     }

//}
// hello();
// printName();
// print1to5();
//isAdult();


// function using with arguments
// function printInfo(name,age){////in function order very important in java script not know values string or number  
//     console.log(`${name}' age is ${age}`);
// }
// printInfo("dinesh",23);
// printInfo("ram singh",21);
// printInfo("jay singh",16);


///parameterised function
// function multiplication(num){
// for(let i=1;i<=10;i++){
//     let value=num*i;
//     console.log(value);
// }
// }
// let number=prompt("enter a number");
// multiplication(number);


// // return type function
// function sum(a,b){
//     return a+b;
// }
// console.log(sum(10,20));



//create a function return sum 1 to n number
// let sum=0;
// function getsum(num){
//     for(let i=1;i<=num;i++){
//         sum=sum+i;
//     }
//     // console.log(sum);
// }
// let num=prompt("enter a number");
// getsum(num);
// console.log(sum);


//function scope 
let sum=0;           //globelscope of function due to declared outside of function
function Issum(num){
    for(let i=0;i<=num;i++){
        sum=sum+i;
    }
    return sum;
}
let num=prompt("enter any number");
result=Issum(num);
console.log(result);



// //lexical function
// function outer(){
//     let x=10;         //lexical scope due to declared in side of function and acces valued because of its nested function 
//     let y=20;
//     function inner(){
//         console.log(x);
//     }
//     inner();
// }
// outer();

