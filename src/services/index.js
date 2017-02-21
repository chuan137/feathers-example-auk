'use strict';

const users = require('./users/users.service.js');

const orders = require('./orders/orders.service.js');

const menuitems = require('./menuitems/menuitems.service.js');

module.exports = function() {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(users);
  app.configure(orders);
  app.configure(menuitems);
};
