function sayMyName(){
    console.log("Y");
    console.log("A");
    console.log("S");
    console.log("I");
    console.log("R");
    console.log("Z");
}
// sayMyName()
function addTwoNumbers(num1, num2){
    // let result = num1 + num2
    // return result
    return num1 + num2
}
const result = addTwoNumbers(4 ,5)
// console.log("Result", result);
function lodinUserMessage(username = "yasir"){
    if(!username){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(lodinUserMessage("yasir"))
console.log(lodinUserMessage("zaman"));

function calculateCartPrice (...number1){
return number1
}
// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
username: "yasir",
price: 12233
}
function handleObjects(anyobject){
    console.log(`username is ${anyobject.username}and price is ${anyobject.price}`);

}
// handleObjects(user)
handleObjects({
    username: "yasir",
    price: 777
})

const mynewArray = [200,500,666,8888]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(mynewArray));

console.log(returnSecondValue( [200,500,666,8888]));

