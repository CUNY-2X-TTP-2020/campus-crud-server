/**
 * Create a campus model with attributes and constraints
 */

const Sequelize = require("sequelize");
const db = require("../db");

const Campus = db.define("campus",
{
    name: 
    { 
        type: Sequelize.STRING, 
        allowNull: false 
    },
    imageUrl:
    {
        type: Sequelize.STRING,
        defaultValue: "https://via.placeholder.com/150"
    },
    address:
    {
        type: Sequelize.STRING,
        allowNull: false
    },
    description:
    {
        type: Sequelize.TEXT,
        defaultValue: "",
        allowNull: false
    }
});

module.exports = Campus;