// const tinderuser = new object()

const tinderUser = {}

tinderUser.id = "12abc"
tinderUser.name = "yasir"
tinderUser.isloggedIn = false
// console.log(tinderUser);

const regularUser = {
 email: "yasir55@gmail.com",
 fullname:{
    userfullname:{
        firstname: "yasir",
        lastname: "Zaman"
    }
 }

}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {5: "a", 7: "b"}
const obj4 = {6: "a", 9: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)
const obj3 ={...obj1, ...obj2}
// console.log(obj3);

const user = [
    {
        id: 1,
        email:"yaiisiis@.com"
    },
    {
        id: 1,
        email:"yaiisiis@.com"
    },
    {
        id: 1,
        email:"yaiisiis@.com"
    },
]

// user [1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(Object.hasOwnProperty('isloggedIn'));



// +++++++++++++++++++++++++ De-structure++++++++++++++++++++++++++++++++++++++++

const course ={
    coursename: "js in urdu",
    price: "999",
    courseInstructor: "Yasir"
}
// course.courseInstructor
const {courseInstructor: instructor} = course
// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "yasir"
//     "coursename": "js in urdu"
//     "price": "free"
// }
