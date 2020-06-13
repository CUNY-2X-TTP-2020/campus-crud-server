/**
 * Here, we can seed the database to fill it with initial values
 */

const { Campus, Student } = require("../database/models");

const seedDatabase = async () =>
{
    await Promise.all([
        Campus.create(
        {
            name: "Brooklyn College",
            address: "Brooklyn",
            imageUrl: "",
            description: "A college in Brooklyn",
        }),
        Campus.create(
        {
            name: "College of Staten Island",
            address: "Staten Island",
            description: "A college in Staten Island",
        }),
        Campus.create(
        {
            name: "John Jay College",
            address: "Manhattan",
            description: "A college in Manhattan",
        }),

        Student.create(
        { 
            firstName: "John",
            lastName: "Doe",
            email: "johndoe@unknown.com",
            gpa: 3.82,
            campusId: 1
        }),
        Student.create(
        { 
            firstName: "Jane",
            lastName: "Doe",
            email: "janedoe@unknown.edu",
            gpa: 3.35,
            campusId: 2
        }),
    ]);
};

module.exports = seedDatabase;