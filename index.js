// In synchronous system the tasks are executed in sequence i.e.after
// one task other task will be executed
// In Async, if one task has started executing, in mean time other task
// can get executed
// Thus Asyn is better than Sync

// In Asynchronous system we always use call back function.
// A call back function is called after the execution of the task
// It also takes arguement error which is used to tell the error in the execution of task

//Asynchronous file system

//const fs = require('fs');
//fs(file system) is a inbuilt Node module which is used in file system.

//1. Insert / Write the file:
//Syntax: fs.writeFile("file-name","Content of the file",call back function);
// fs.writeFile("NewFile.txt","New Content", (err) => {
//     console.log("The file has been created");
//     console.log(error);
// });

// 2. Append / Update file:
// fs.appendFile("NewFile.txt","Concatenated Content",(err) => {
//     console.log("File Updated");
// })

// 3. Read file:
// fs.readFile("NewFile.txt", "UFT-8", (err) => {..});
//By default Read function sends the buffer value, so to avoid buffer value
// and to show the content of the file we use UFT-8, It encodes the content

// 4. Rename file:
// //Syntax: fs.rename("Old file name"," New file name",call back function)
// fs.rename("NewFile.txt","NewNewfile.txt",()=>{..})

//////////////////////////////////////////////////////////////////////

//To create and export the module
//Suppose we have a file named Demo.js
//In this file we have:
// const add = (a,b) => {
//     return a + b;
// }

// const sub = (a, b) => {
//     return a - b;
// }

// module.exports = { add, sub };

//const op = require("./demo");

//console.log(op.add(5, 6));

/////////////////////////////////////////////////////////////
//The use of npm--Node pakage manager
//Firstly write npm init in the terminal

//Then to install any package we write in the terminal: npm install package_name
// const validator = require("validator");

// let dec = validator.isEmail("Yathaarth@2000.com");
// console.log(dec);

//We can also install the modules globally over the system
//It means that it will work in folder or drive
//Its for throughout the system
//To install:--> npm install package_name -g
//-g for global

///////////////////////////////////////////////////////////

//In node JS everyfile is said to be module and by default the
//variables and member functions are private becasue of the IEFIE function.(Module Wrappr function)
//so every module gets run inside this function and this is done on the backend.

//////////////////////////////////////////////////////////
//to create a simple Node server
//Server: It handles all the HTTPS requests for the web Application
//For eg Apache is the web server for Php and Java applications
//Node Js provides capabalities to create our own web server which will handle the requests asynchronously
//Although we can use Apache or any other server but it is recommended to make our own Node Js server.

//We will create a server by HTTP module(inbuilt)
//the Http.createServer() method is used to create the server which includes the request and response
//arguements provided by Node JS.

//The request object can be used to depict the information such as Url,data ,Http request etc.
//The response object is used to send the response from the server to the web application back.

// const http = require("http");
// const server = http.createServer((req, res) => {
//to know the URL details of the url type we use:
//req.url-->This is used to tell the URL that user has typed
// console.log(req.url);

//   if (req.url == "/") {
//     res.end("Hello from the Home page");
//   } else if (req.url == "/Contacts") {
//     res.end("Welcome to the Contacts Page");
//   } else if (req.url == "/About") {
//     res.end("Welcome to About Page");
//   } else {
//     res.writeHead(404); //It means that if the page is not present than in developer options
//     //it shows 404 //i.e. The error exists
//     res.end("Error Page:404");
//   }

//   //res.end("Hello from the server again"); //so we are sending the response back to the web page
// });

//BUt we have not sent the request till now . so we should also send the request
//To listen the request , we have listen fun
// server.listen(8000, "127.0.0.1", () => {
//   console.log("The server has started again");
// });

/////////////////////////////////////////////////////////////////////
//JSON IN NODE JS:
//JSON--> Javascript Object Notation
//JSON is light weight format for storing and transporting the data
//JSON is often used when sending the data from the server to the web page

// const data = {
//   name: "Yathaarth",
//   age: 20,
//   interest: "backend development",
// };
//now we have created an object named data

//now to convert this object into JSON-->we use Stringify()
//to convert JSON to object --> we use Parse()

//so first converting the object into JSON
//const jsondata = JSON.stringify(data);
//jsondata is JSON now

//const objdata = JSON.parse(jsondata);
//now objdata is again an object

//SO now we have to make this JS object into JSON
//then transfer this JSON object to a new file
//Then read the JSON data from that file
//and finally convert it into new file
// const fs = require("fs");

// const jsondata = JSON.stringify(data);
// fs.writeFile("file.json", jsondata, (err) => {
//   console.log("File has been created");
// });

//now we have to read the json file
// fs.readFile("file.json", "utf-8", (err, data) => {
//   const objdata = JSON.parse(data);
//   console.log(objdata);
// });

/////////////////////////////////////////////////////////////
//CREATING A SIMPLE API:
//API:--> APPLICATION PROGRAMMING INTERFACE
//It is a software intermediary that allows two applications to talk to
//each other Eg: Cheaking wether in the app
//In this we request for the data
//we create API in the JSON format

//////////////////////////////////////////////////////////
//EVENTS IN NODE JS:
//Node js has inbuilt module called "Events"
//where you can create , fire and listen for your events:

const EventEmitter = require("events"); //we have declared a class
//EventEmitter is different i.e its class
const event = new EventEmitter(); //now we are creating an object

//this is when the particular event took place
event.on("Clicked", () => {
  console.log("Event took place");
});
event.emit("Clicked"); //like a function call so this event happens

//event definition should be declared previous than emit

//to do multiple call back, we can declare more than one call back fun
// event.on("Clicked", () => {
//   console.log("Event took place");   //1st task
// });

// event.on("Clicked", () => {
//   console.log("Event took place");  //2nd task
// });

// event.on("Clicked", () => {
//   console.log("Event took place"); //3rd task
// });

//we can create our own event and even with one event we can
//call back many functions
