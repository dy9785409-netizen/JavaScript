let todo=[];
let req=prompt("please enter your reqest");
while(true){
    if(req=="quit"){
        console.log("Quitting the app");
        break;
    }
    if(req=="list"){
        console.log("...............");
        for(task of todo){
            console.log(task);
        }
        console.log("...............");
    }
    else if(req=="add"){
    let task=prompt("please enter your request");
    //todo.replace.push(task);
    todo.push(task);
    console.log("task added");
    }
    req=prompt("please enter your reqest");
}