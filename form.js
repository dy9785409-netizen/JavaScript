let form=document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault();
    let inp=document.querySelector("input");
    let pass=document.querySelector("password");
    console.dir(pass);
    console.dir(inp);
    // alert("form sunmitted");
    console.log(inp.value);
    console.log(pass.value);
}); 