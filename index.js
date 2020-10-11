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
