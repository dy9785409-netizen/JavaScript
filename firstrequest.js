// let url="https://catfact.ninja/fact";
// fetch(url);
// fetch(url)
// .then((response)=>{
//     return(res);
// })
// .then((response)=>{
//     console.log(response);
//     return fetch(res);
// })
// .then((response)=>{
//     console.log(response);
// })

// .catch((err)=>{
//     console.log("ERROR-",err);
// })

// let url="https://catfact.ninja/fact";
// async function getFun(){
//     try{
//         let res= await fetch(url);
//         let data= await res.json();
//         console.log("data.fact");
//     }catch(err){
//         console.log("error-",err);
//     }
// }



//using axios = Axios is a popular JavaScript library used to send requests from your app to a server and get data back.



// let btn=document.querySelector("button");
// btn.addEventListener("click", async()=>{
//     let fact =await getFact();
//     console.log(fact);
//     let p=document.querySelector("result");
//     p.innerText=fact;

//     // console.log("button was clicked");
// });
// let url="https://catfact.ninja/fact";
// async function getFun(){
//     try{
//         let res= await axious.get(url);
//         //let data= await res.json();
//         console.log(res.data.fact);
//     }
//     catch(err){
//         console.log("error-",err);
//         return "No fact found";
        
//     }
//}


let btn=document.querySelector("button");
let url2="https://dog.ceo/api/breeds/image/random";


btn.addEventListener("click",async()=>{


    let link =await getImage();
    let img=document.querySelector("#fact");
    img.setAttribute("src",link);
    console.log(link);
    // let fact=await getFact();
    // let p=document.querySelector("#fact");
    // p.innerText=fact;
});
// let url="https://catfact.ninja/fact";
async function getImage(){
    try{
        let res=await axios.get(url2);
        return res.data.message;
        // return res.data.fact;
    }
    catch(err){
    console.log("error-",err);
    return "//No fact found";
    }
}
