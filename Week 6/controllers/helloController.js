
const express = require('express');
const router = express.Router();
const helloService = require('../services/helloService');

exports.getHello = (req, res) => {
    const items = helloService.getHello();
    res.json({ data: items });
};