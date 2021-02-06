//This is a big issue caused by coding with complex nested callbacks. 
//Here, each and every callback takes an argument that is a result of the previous callbacks. 
//In this manner, The code structure looks like a pyramid, making it difficult to read and maintain. 
//Also, if there is an error in one function, then all other functions get affected

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest

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
    console.log(data)
    toDo('jsons/todos2.json' ,(err, data)=>{
   
        console.log(" callback fired ");      
        console.log(data)
        toDo('jsons/todos.json' ,(err, data)=>{ // this is a call back function inside callback  level one
   
            console.log(" callback fired ");      // this is a call back function inside callback level two
            console.log(data)
});
    });

});


