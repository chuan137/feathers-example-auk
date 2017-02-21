'use strict';

// Initializes the `menuitems` service on path `/menuitems`
const createService = require('feathers-sequelize');
const createModel = require('../../models/menuitems.model');
const hooks = require('./menuitems.hooks');
const filters = require('./menuitems.filters');

module.exports = function() {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'menuitems',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/menuitems', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('menuitems');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
