// routes/project.js
const express = require('express');
const router = express.Router();
const { fetchProjects } = require('../controllers/projectController');

router.get('/projects', fetchProjects);

module.exports = router;
