'use strict';

const users = require('./users/users.service.js');

const orders = require('./orders/orders.service.js');

module.exports = function() {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(users);
  app.configure(orders);
};
