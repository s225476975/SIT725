// services/projectService.js
const Project = require('../models/Project');

async function getAllProjects() {
    const projects = await Project.find({});
    return projects;
}

module.exports = {
    getAllProjects
};
