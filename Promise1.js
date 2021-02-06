// Real example of promise 

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest

const getS = (resourse) => {

    return new Promise((resolve , reject) =>{


        

                            const request = new XMLHttpRequest(); 

                        request.addEventListener('readystatechange' , () => {
                                
                                    if (request.readyState === 4 && request.status === 200){ 

                                        const data = JSON.parse(request.responseText);  // this method takes a json string and convert into a js object
                                        resolve(data);       // when no error occur
                                        
                                    }
                                    else if(request.readyState === 4){
                                        // console.log(request);
                                        reject("no data");        
                                    }
                                    }); 
                        request.open('GET' , resourse);  
                        request.send();
                                });
                    }

getS('jsons/todos3.json').then (data => {
        console.log('promise resolve: ', data);
}).catch( err =>{
        console.log('promise rejected', err);
});