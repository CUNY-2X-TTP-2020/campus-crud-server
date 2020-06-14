/**
 * Here, we can set up the routes for campuses
 */

var express = require("express");
var router = express.Router();

const { Campus, Student } = require("../database/models");

/**
 * GET all campuses
 * /api/campuses
 */
router.get("/", async (req, res, next) =>
{
    // Try to get campuses object from database
    try
    {
        // Campuses will be the result of the Campus.findAll promise
        const campuses = await Campus.findAll({ include: Student });

        // If campuses is valid, it will be sent as a json response
        res.status(200).json(campuses);
    }
    catch(err)
    {
        // If there is an error, it will be passed via the next parameter to the 
        // error handler middleware
        next(err);
    }
});

/**
 * GET a single campus based on its id
 * /api/campuses/:id
 * /api/campuses/10 would respond with a campus with id 10
 */
router.get("/:id", async (req, res, next) =>
{
    // Get the id from params
    const { id } = req.params;

    // Query the database for a campus with matching id
    try
    {
        // If successful
        const campus = await Campus.findByPk(id, { include: Student });

        // Send back the campus as a response
        res.status(200).json(campus);
    }
    catch(err)
    {
        next(err);
    }
});

/**
 * POST (add) a single campus
 * /api/campuses/
 */
router.post("/", async (req, res, next) =>
{
    // Take the form data from the request body
    const { name, address, description, imageUrl } = req.body;

    // Create a campus object
    const campusObj =
    {
        name: name,
        address: address,
        description: description,
        imageUrl: imageUrl
    };

    try
    {
        // Create a new campus on the database
        const newCampus = await Campus.create(campusObj);
        
        // The database should return a campus
        // Send that campus as a json to the client
        res.status(201).send(newCampus);
    }
    catch(err)
    {
        next(err);
    }
});

module.exports = router;