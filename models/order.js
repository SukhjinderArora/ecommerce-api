const { DataTypes } = require('sequelize');

const sequelize = require('../utils/database');

const User = require('./user');
const ShippingAddress = require('./shippingAddress');

const Order = sequelize.define('order', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id',
    },
    allowNull: false,
  },
  shippingaddressId: {
    type: DataTypes.INTEGER,
    references: {
      model: ShippingAddress,
      key: 'id',
    },
    allowNull: false,
  },
});

module.exports = Order;