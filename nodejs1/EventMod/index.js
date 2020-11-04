//Events Moduel


const EventEmitter = require('events');//class

const event = new EventEmitter();//obeject
/* event.on('sayMyName',()=>{
    console.log('Your Name Is Rijon');
})
event.on('sayMyName',()=>{
    console.log('Your Name Is Hasan');
}) */
event.on('checkPage',(sc,msg)=>{
    console.log(`status code is ${sc} and the page is ${msg}`);

});

event.emit('checkPage',200,'ok');//event creation

