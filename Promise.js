// what is promise ?
//A promise is an object that may produce a single value some time in the future:
// either a resolved value, or a reason that it’s not resolved (e.g., a network error occurred). 
//A promise may be in one of 3 possible states: fulfilled, rejected, or pending.
// Promise users can attach callbacks to handle the fulfilled value or the reason for rejection.
const getSomething = () => {

        return new Promise((resolve , reject) =>{

               resolve("some data");
                //  reject("some error");

        });

};


// 1. way of doing this 

// getSomething().then(data =>{

//     console.log(data);
// },err => {
//     console.log(err);

// });

// 2. way of doing this

getSomething().then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
});