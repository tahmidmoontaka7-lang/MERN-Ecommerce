const Order = require("../models/Order");

// CREATE ORDER
const createOrder = async (req, res) => {
  try {
    const {
      user,
      products,
      totalPrice,
      address,
    } = req.body;

    const order = await Order.create({
      user,
      products,
      totalPrice,
      address,
    });

    res.status(201).json(order);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// GET ALL ORDERS
const getOrders = async (req, res) => {
  try {
    const orders = await Order.find();

    res.json(orders);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createOrder,
  getOrders,
};