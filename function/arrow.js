const user = {
username : "yasir",
price: 999,
welcomeMessage: function(){
    console.log(`${this.username}, welcome to website`);
      console.log(this);
     }
}
// user.welcomeMessage()
// user.username = "zaman"
// user.welcomeMessage()
// console.log(this);

// function chai(){
//     let username = "yasir"
//     console.log(this.username);
// }
// chai()

// const chai = function (){
//     let username = "yasir"
//  console.log(this.username);
// }
// chai()

const chai =  () => {
    let username = "yasir"
 console.log(this.username);
}
// chai()

// const addTwo = (num1, num2) => {
//       return num1 + num2
// }
const addTwo = (num1, num2) =>  num1 + num2
console.log(addTwo(4 ,5))

const addtwo = (num1, num2,) =>  (num1 + num2)
console.log(addtwo(4 ,5,))

// const mynewArray = [2,3,4,5,]
// myArray.forEach()