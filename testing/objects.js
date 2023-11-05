// singleton
// objects.create

// objects literals

const mysym = Symbol("key1")

const jsUser = {
    name: "yasir Zaman",
    "full name": "yasir zaman",
    [mysym]: "mykey1",
    age:21,
    location: "Jaipur",
    email: "yasir man7575@gmail.com",
    isloggedIn: false,
    lastloginDay: ["Monday", "Tuesday"]
}
// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full name"])
// console.log(jsUser[mysym])

jsUser.email = "Yasir@chatgpt.com"
// Object.freeze(jsUser)
jsUser.email = "yasir@microsoft.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello Js user");
}
console.log(jsUser.greeting());

jsUser.greetingTwo = function(){
    console.log(`hello Js user, ${this.name}`);
}

console.log(jsUser.greetingTwo());