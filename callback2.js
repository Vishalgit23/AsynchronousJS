var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest

// More of call back function; 


const toDo = (callback) =>{

    const request = new XMLHttpRequest(); 

request.addEventListener('readystatechange' , () => {
          
            if (request.readyState === 4 && request.status === 200){ 
                callback(undefined , request.responseText);         // form here we call the call back function
                
            }
            else if(request.readyState === 4){
                callback("could not fetch data");        
            }
              }); 
request.open('GET' , "https://jsonplaceholder.typicode.com/todos/1"); 
request.send();
}

console.log("1"); // this is just to check asynchronous
console.log("2");

toDo( (err, data)=>{
   
    console.log(" callback fired ");      // this is a call back function
    if(err){
        console.log(err);
    }
    else 
    console.log(data)
});

console.log("3");  // this is just to check asynchronous
console.log("4");
