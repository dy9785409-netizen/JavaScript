//promises means the promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value

// function savetoDb(data){
//     let internetspeed=Math.floor(Math.random()*10+1);
//     if(internetspeed>4){
//         console.log("your data was saved",data);
//     }else{
//         console.log("weak connection data not saved");
//     } 
// }
// savetoDb("hello world");


// function savetoDb(data){
//     return new Promise((success,failure)=>{
//         let internetSpeed=Math.floor(Math.random()*10)+1;
//         if(internetSpeed>4){
//             success("success:data was saved");
//         }
//         else{
//             failure("failure:data was not saved");
//         }
    
//     });
// }
// savetoDb("Dinesh kumar")///using then amd catch method
// .then((result) => {
//         console.log(result);
//         console.log("result was promise: ",result);
//     })
// savetoDb("apna college")
// .then((result)=>{
//         console.log("data2 saved");
//         console.log("result was promise: ",result);
//     })
//     .catch((error) => {
//         console.log(error);
//         console.log("result was promise: ",error);
//     });


// async function using 

// let h1=document.querySelector("h1");
//     function changeColor(color,delay){
//         return new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                 h1.style.color=color;
//                 resolve("color changed!");

//             },delay)

//         });
//     }
//     changeColor("red",1000)
//     .then(()=>{
//         console.log("red color was completed");
//         return changeColor("green",1000);
//     })
//     changeColor("red",1000)
//     .then(()=>{
//         console.log("green  color was completed");
//         return changeColor("blue",1000);
//     })
// .then(()=>{
//         console.log("green  color was completed");
//         return changeColor("blue",1000);
//     });


///async function used 
// async function greet() {
//     return new Promise((resolve, reject) => {
//         resolve("Hello");
//     });
// }

// greet()
//     .then((result)=>{
//     console.log("Promise was resolved");
//     console.log("Promise was resolved",result);
//     })
//     .catch((err)=>{
//     console.log("Promise was resolved with error",err);

//     })
//     greet();

//Await keyword means===pauses the execution of its surrounding async function until the promise is stilled (resolved or rejected)

function getNum(){
    return new Promise((resolve, reject) => {
        let num=Math.floor(Math.random()*10)+1;
        console.log(num);
        resolve();
    },1000);
}
async function demo(){
    await getNum();      //await keyword used only inside of async function 
    await getNum();
    await getNum();
}