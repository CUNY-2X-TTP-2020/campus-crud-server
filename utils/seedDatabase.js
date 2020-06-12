/**
 * Here, we can seed the database to fill it with initial values
 */

const { Campus } = require("../database/models");

const seedDatabase = async () =>
{
    await Promise.all([
        Campus.create({
            name: "Brooklyn College",
            address: "Brooklyn",
            imageUrl: "",
            description: "A college in Brooklyn",
        }),
        Campus.create({
            name: "College of Staten Island",
            description: "A college in Staten Island",
        }),
        Campus.create({
            name: "John Jay College",
        }),
    ]);
};

module.exports = seedDatabase;