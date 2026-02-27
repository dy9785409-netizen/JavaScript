const max=prompt("enter the maximum number");
const random=Math.floor(Math.random()*max)+1;
console.log(random);
let guess=prompt("guess the number");
while(true){
    if(guess=="quit"){
        console.log("user  quit");
        break;
    }
    if(guess==random){
        console.log("you are right! congrats", random);
        break;
    }
    else if(guesss<random){
        guess=prompt("your guess was too small.please try agains");
    }
    else{
        guess=prompt("your number was large  please try again");
    }
}