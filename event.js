let btn=document.querySelector("button");// this is used for single button select on html
console.dir(btn);

// btn.onclick=function(){
//     alert("button was clicked");
// };


// second method create a function


// function sayHello(){
//     alert("hello");
// }
// btn.onclick=sayHello;



let btns=document.querySelectorAll("button");
for(btn of btns){
    btn.onclick=sayHello;
    btn.onmouseenter=function(){
        console.log("you entered button");
    };
}
function sayHello(){
    alert("hello");
}