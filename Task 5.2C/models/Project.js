// models/Project.js
const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: String,
    image: String,
    link: String,
    description: String,
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;