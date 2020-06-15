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

/**
 * POST (add) a single student
 * /api/students/
 */
router.post("/", async (req, res, next) =>
{
    Object.keys(req.body).forEach((key) => (req.body[key] === "") ? delete req.body[key] : req.body[key]);

    try
    {
        // Create a new student on the database
        const newStudent = await Student.create(req.body);

        // The database should return a student
        // Send that student as a json to the client
        res.status(201).send(newStudent);
    }
    catch(err)
    {
        next(err);
    }
});

/**
 * DELETE a single student
 * /api/students/:id
 * /api/students/10 would delete a student with id 10
 */
router.delete("/:id", async (req, res, next) =>
{
    const { id } = req.params;

    // Get an id for the student to delete
    try
    {
        // Pass the id to the database to find student to be deleted
        // Database would either respond success or failure
        const student = await Student.findByPk(id);

        // Invoke the .destroy() method on the returned student
        await student.destroy();

        // Send a success message to the client
        res.sendStatus(204);
    }
    catch(err)
    {
        next(err);
    }
});

module.exports = router;