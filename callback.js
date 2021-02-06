var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest

// basic understanding of callBack 


const toDo = (callback) =>{

    const request = new XMLHttpRequest(); 

request.addEventListener('readystatechange' , () => {
          
            if (request.readyState === 4 && request.status === 200){ 
                callback();
                
            }
            else if(request.readyState === 4){
                console.log("could not fetch the data");
            }
              }); 
request.open('GET' , "https://jsonplaceholder.typicode.com/todos/1"); 
request.send();
}

toDo( ()=>{

    console.log("callback fired ");
});
