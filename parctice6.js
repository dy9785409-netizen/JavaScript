// let arr=[10,20,30,50,40,2,8];
// function large(arr){
//     let min=arr[0];
//     for(let i=1;i<arr.length;i++){
//     //     if(arr[i]>max){ find out the maximum array element 
//     //         max=arr[i];
//     //     }
//     // }
//     // return max;

//     //find out the minimum array element 
//     if(arr[i]<min){
//         min=arr[i];
//     }
// }
// return min;
// }
// console.log(large(arr));



// find out unique character form string
let str="abcdefghijklrdejh";
let ans="";
function string(str){
    for(let i=0;i<str.length;i++){
        if(!ans.includes(str[i])){
            ans+=str[i];
            }
        }
        return ans;
    }
    console.log(string(str));
