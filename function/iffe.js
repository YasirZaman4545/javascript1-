// Immediately Invoked Function Expression (IFEE)

(function chai (){
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('yasir')




