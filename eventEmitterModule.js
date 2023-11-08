const EventEmitter = require('events');

class CustomEmitter extends EventEmitter {}

const customEmitterInstance = new CustomEmitter();

module.exports = customEmitterInstance;
