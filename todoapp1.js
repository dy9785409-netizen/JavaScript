let inp=document.querySelector("input");
let btn=document.querySelector("button");
let ul=document.querySelector("ul");

btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=inp.value;

    let del=document.createElement("button");
    del.innerText="delete";
    del.classList.add("delete");
    item.appendChild(del);
    ul.appendChild(item);
    inp.value="";
});

let delbtn=document.querySelectorAll(".delete");
for(del of belbtn){
    del.addEventListener("click",function(){
    let para=this.parentElement;
    console.log("para");
    para.remove();
    });
}