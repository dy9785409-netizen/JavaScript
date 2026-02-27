// using java script and DOM 1Q. <p> with red text that says "Hey i'm red;
// let para=document.createElement("p");
// para.innerText="Hey i am red";
// document.querySelector("body").append(para);
// para.classList.add("red");


//2Q an <h3> with blue text that says I am a blue h3;
// let h3=document.createElement("h3");
// h3.innerText="I am a blue";
// document.querySelector("body").append(h3);
// h3.classList.add("h3");

//3Q a <div> with a black border and pink background color with the following elements inside of it
//.another <h1> that says "i am a div"
//a <p> that says "ME TOO"

let div=document.createElement("div");
let h1=document.createElement("h1");
let p=document.createElement("p");
h1.innerText="I am a div";
p.innerText="ME TOO";
div.append(h1);
div.append(p);
div.classList.add("box");
document.querySelector("body").append(div);