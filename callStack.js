let h1=document.querySelector("h1");

// function changeColor(color){
//     h1.style.color=color;
// }
// setTimeout(()=>{
//     h1.style.color="red";
// },1000);
// setTimeout(()=>{
//     h1.style.color="green";
// },2000);
// setTimeout(()=>{
//     h1.style.color="yellow";
// },3000);

//using funtion change the color
function changeColor(color,delay,nextchangeColor){
    setTimeout(()=>{
    h1.style.color=color;
    if(nextchamgeColor) nextchangeColor();
},delay);
}
//calling the function
changeColor("red",1000);
changeColor("orange",2000);
changeColor("green",3000);

