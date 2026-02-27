// console.dir(document.querySelector("h1"));  //element Selector
// console.dir(document.querySelect("#Description"));   //id selector
// console.dir(document.querySelector(".oldImage"));   //class selector
// console.dir(document.querySelector("div a")); //div in side select anchor tags
// console.dir(document.querySelectorAll("div a"));//all anchor tag selected in side div




//using propeties and method
// console.log(para);
// console.log(para.innerText); //shows the visible contained in a node 
// console.log(para.innerHTML);//show the full markup
// console.log(para.tagName); //show the tag name 
// console.log(para.textContent); //shows the full markup
// console.log(para,innerText="abc"); //update the value
// let heading=document.querySelector('h1');
// console.log(heading); //select the headinh tags


//manupulating style: using classList Synatx obj.classList
let heading=document.querySelector('h1');
console.log(heading.classList.add("abc"));
