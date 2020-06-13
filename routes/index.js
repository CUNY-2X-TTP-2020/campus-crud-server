/**
 * Here, we can mount our subrouters to the main router, and export that to be used 
 * by our main app
 */

var express = require("express");
var router = express.Router();

// Subrouters:
const campusesRouter = require("./campuses");
const studentsRouter = require("./students");

// Mount our subrouters to assemble our API router
router.use("/campuses", campusesRouter);
router.use("/students", studentsRouter);

// Error handling middleware
router.use((req, res, next) =>
{
    const error = new Error("Not found, please check URL!");
    error.status = 404;
    next(error);
});

// Export our API router, so that it can be used by our main app in app.js
module.exports = router;