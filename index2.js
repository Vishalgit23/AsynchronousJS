var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest
const request = new XMLHttpRequest(); 


request.addEventListener('readystatechange' , () => {
          //  console.log(request, request.readyState) // whenever request state change i.e from (0...4) ; this will call 
            if (request.readyState === 4) //  4 means request is done and we have response
                console.log(request.responseText) // request.responseTextis a property that contail response data
                console.log(request.status);// this will return status code 
                // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

              });

// https://developer.mozilla.org/en-US/docs/Web/AP  I/XMLHttpRequest/readyState

request.open('GET' , "https://jsonplaceholder.typicode.com/todoss/1");

// The XMLHttpRequest method open() initializes a newly-created request, or re-initializes an existing one.

request.send();