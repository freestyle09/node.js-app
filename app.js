// const EventEmitter = require('events');
// const emitter = new EventEmitter();
//
// emitter.on('logging', (arg) => {
//     console.log(arg);
// });
//
// emitter.emit('logging', {data: 'message'})

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/courses", (req, res) => {
  res.send([1, 2, 3]);
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}...`));
