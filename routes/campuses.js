/**
 * Here, we can set up the routes for campuses
 */

var express = require("express");
var router = express.Router();

const { Campus } = require("../database/models");

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
        const campuses = await Campus.findAll();

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

module.exports = router;