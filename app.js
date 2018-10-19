const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('logging', (arg) => {
    console.log(arg);
});

emitter.emit('logging', {data: 'message'})