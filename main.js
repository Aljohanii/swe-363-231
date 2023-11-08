const customEmitter = require('./eventEmitterModule');

// Event handlers
customEmitter.on('userLoggedIn', (userID) => {
    console.log(`${new Date().toISOString()}: USER_${userID} logged in`);
});

customEmitter.on('userLoggedOut', (userID) => {
    console.log(`${new Date().toISOString()}: USER_${userID} logged out`);
});

// Simulating users logging in
let userID = 1;

setInterval(() => {
    customEmitter.emit('userLoggedIn', userID++);
   
}, Math.random() * 1900 + 100);  // Random time between 0.1 to 2 seconds
setInterval(() => {
    customEmitter.emit('userLoggedOut', userID++);
   
}, Math.random() * 1900 + 100);  // Random time between 0.1 to 2 seconds
