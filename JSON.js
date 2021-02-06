// JSON stands for javascript object notation

const { XMLHttpRequest }= require("xmlhttprequest")

// More of call back function; 


const toDo = (callback) =>{

    const request = new XMLHttpRequest(); 

request.addEventListener('readystatechange' , () => {
          console.log(request.readyState, request)
            if (request.readyState === 4 && request.status === 200){ 

                const data = JSON.parse(request.responseText);  // this method takes a json string and convert into a js object
                callback(undefined , data);         // form here we call the call back function
                
            }
            else if(request.readyState === 4){
                console.log(request.status);
                 callback("could not fetch data");        
            }
              }); 
request.open('GET' , '../todos.json');  
request.send();
}


toDo( (err, data)=>{
   
    console.log(" callback fired ");      // this is a call back function
    if(err){
        console.log(err);
    }
    else 
    console.log(data)
});

