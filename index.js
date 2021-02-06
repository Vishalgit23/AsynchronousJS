var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest
const request = new XMLHttpRequest(); // we have a request object now  use to send request from a browser

// XMLHttpRequest (XHR) objects are used to interact with servers.
// You can retrieve data from a URL without having to do a full page refresh. 
// This enables a Web page to update just part of a page without disrupting what the user is doing.
// Despite its name, XMLHttpRequest can be used to retrieve any type of data, not just XML

request.addEventListener('readystatechange' , () => {
            console.log(request, request.readyState) // whenever request state change i.e from (0...4) ; this will call 

});

//addEventListener() sets up a function that will be called whenever the specified event is delivered to the target.
// Common targets are Element, Document, and Window, but the target may be any object that supports events (such as XMLHttpRequest).
// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState

request.open('GET' , "https://jsonplaceholder.typicode.com/todos/1");

// The XMLHttpRequest method open() initializes a newly-created request, or re-initializes an existing one.

request.send();