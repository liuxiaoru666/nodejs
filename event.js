//
var EventEmitter = require('events').EventEmitter; 
var event = new EventEmitter(); 

//事件轮询，监听
event.on('some_event', function() { 
    console.log('some_event 事件触发'); 
});
//触发事件
setTimeout(function() { 
    event.emit('some_event'); 
}, 1000); 