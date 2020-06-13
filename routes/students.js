/**
 * Here, we can set up the routes for students
 */

var express = require("express");
var router = express.Router();

const { Student } = require("../database/models");

/**
 * GET all students
 * /api/students
 */
router.get("/", async (req, res, next) =>
{
    // Try to get campuses object from database
    try
    {
        // Students will be the result of Student.findAll promise
        const students = await Student.findAll();

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

module.exports = router;