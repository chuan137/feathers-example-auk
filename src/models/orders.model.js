'use strict';

// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');

module.exports = function(app) {
  const sequelizeClient = app.get('sequelizeClient');
  const items = sequelizeClient.define('orderitems', {
    quantity: Sequelize.INTEGER,
    note: {
      type: Sequelize.STRING,
      allowNull: true
    },
    option: {
      type: Sequelize.ENUM('0', '1', '2'),
      defaultValue: '0'
    }
  }, {
    classMethods: {
      associate (models) {
        items.belongsTo(models.menuitems)
      }
    }
  });
  const orders = sequelizeClient.define('orders', {
    text: {
      type: Sequelize.STRING,
      allowNull: false
    }
  }, {
    classMethods: {
      associate (models) {
      	// Define associations here
        // See http://docs.sequelizejs.com/en/latest/docs/associations/
        orders.hasMany(items)
      }
    }
  });

  return orders;
};
