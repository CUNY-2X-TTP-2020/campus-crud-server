/**
 * Here, we can set up the routes for students
 */

var express = require("express");
var router = express.Router();

const { Student, Campus } = require("../database/models");

/**
 * GET all students
 * /api/students
 */
router.get("/", async (req, res, next) =>
{
    // Try to get students object from database
    try
    {
        // Students will be the result of Student.findAll promise
        const students = await Student.findAll({ include: Campus });

        // If students is valid, it will be sent as a json response
        res.status(200).json(students);
    }
    catch(err)
    {
        // If there is an error, it will be passed via the next parameter to the 
        // error handler middleware
        next(err);
    }
});

/**
 * GET a single student based on their id
 * /api/students/:id
 * /api/students/10 would respond with a student with id 10
 */
router.get("/:id", async (req, res, next) =>
{
    // Get the id from params
    const { id } = req.params;

    // Query the database for a student with matching id
    try
    {
        // If successful
        const student = await Student.findByPk(id, { include: Campus });

        // Send back the student as a response
        res.status(200).json(student);
    }
    catch(err)
    {
        next(err);
    }
});

module.exports = router;