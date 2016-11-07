'use strict';

const service = require('feathers-mongoose');
const piggy = require('./piggy-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: piggy,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/piggies', service(options));

  // Get our initialize service to that we can bind hooks
  const piggyService = app.service('/piggies');

  // Set up our before hooks
  piggyService.before(hooks.before);

  // Set up our after hooks
  piggyService.after(hooks.after);
};
