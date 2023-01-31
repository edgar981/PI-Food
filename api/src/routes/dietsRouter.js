const { Router } = require("express");
const {Recipe, Diet} = require("../db");

const dietsRouter = Router();
const dietsTypes = ["Gluten Free", "Ketogenic", "Vegetarian", "Lacto-Vegetarian", "Ovo-Vegetarian", "Vegan", "Pescetarian", "Paleo", "Primal", "Low FODMAP", "Whole30"];

dietsRouter.get("/", async (req, res)=>{

    try {
         dietsTypes.forEach(d => {
              Diet.findOrCreate({
                where: {name : d}
            })
        });

        const databaseDiets = await Diet.findAll();
        res.status(200).json(databaseDiets);
    }
    catch (error) {
        res.status(400).json({error: error.message});
    }

});

module.exports = dietsRouter;

