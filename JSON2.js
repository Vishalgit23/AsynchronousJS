// JSON stands for javascript object notation

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest

// More of call back function; 


const toDo = (resourse , callback) =>{

    const request = new XMLHttpRequest(); 

request.addEventListener('readystatechange' , () => {
          
            if (request.readyState === 4 && request.status === 200){ 

                const data = JSON.parse(request.responseText);  // this method takes a json string and convert into a js object
                callback(undefined , data);         // form here we call the call back function
                
            }
            else if(request.readyState === 4){
                // console.log(request);
                 callback(request.status);        
            }
              }); 
request.open('GET' , resourse);  
request.send();
}


toDo('jsons/todos3.json' ,(err, data)=>{
   
    console.log(" callback fired ");      // this is a call back function
    if(err){
        console.log(err);
    }
    else 
    console.log(data)
});

