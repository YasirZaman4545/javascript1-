var c = 300
let a = 300
if (true){
    let a = 10
    const b = 20
    // console.log("INNER:", a);
}
// console.log(a);
// console.log(b);
// console.log(c);

if (true){
    const username = "yasir"
    if (username === "yasir"){
       const website = "youtube"
       console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

// =========================interesting=====================

console.log(addone(6))

function addone(num){
return num + 1
}



const addTwo = function(num){
return num + 2
}
console.log(addTwo(5));