////////////////////////////////////////////////////////////////////////
//NODE STREAMS
//STREAMS are objects that let you read data from a source or write data to a
//destination in continuous fashion.
//Streaming means listening to music or watching video in real time instead of
//downloading a file to your computer and watch it later
//In Node JS there are four types of streams:
//1. Readable: it is used for read operation
//2. Writable: it is used for write operation
//3. Duplex: Stream which can be used for both write and read operatin
//4. Transform:A type of duplex stream where output is computed based on input

//So basically streams are continous process which takes place
//Each type of stream is an instance of EventEmitter and throws several events
//at different instances of time
//Some common events are fired:
//1. data: This event is fired when there is data available to read
//2. end: This event is fired when there is no more data to read
//3. error: This event is fired when there is any error recieving or writing data
//4. finish: This event is fired when all the data has been flushed to underlying system

const fs = require("fs"); //file system module
const http = require("http"); //http module used to create the server

//first we need to create a server
const server = http.createServer();

// server.on("request", (req, res) => {
//   fs.readFile("input.txt", (err, data) => {
//     if (err) {
//       res.end(console.log(err));
//     }
//     res.end(data.toString());
//   });
// });

//so we have to send the request to the server
//so we are listening to the server

// server.listen(3000, "127.0.0.1", () => {
//   console.log("Server got started and now listening");
// });

//so the above method was to read the data in one go
//so now will make stream to read the data chunk by chunk
server.on("request", (req, res) => {
  const rstream = fs.createReadStream("input.txt");

  rstream.on("data", (chunk) => {
    console.log("Data transmission started");
    res.write(chunk);
  });
  rstream.on("end", () => {
    res.end();
    console.log("Data transmission ended");
  });
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Server started listening");
});
