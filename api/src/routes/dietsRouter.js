const { Router } = require("express");
const {Recipe, Diet} = require("../db");
const axios = require("axios");
const {API_KEY} = process.env;

const dietsRouter = Router();
const dietsTypes = ['gluten free', 'ketogenic', 'vegetarian', 'lacto vegetarian','ovo vegetarian', 'lacto ovo vegetarian', 'vegan', 'pescatarian', 'paleolithic', 'primal', 'low fodmap', 'whole 30', 'dairy free'];
/*
Hay problemas con: Low Fodmap, pescetarian, vegetarian
 */

dietsRouter.get("/", async (req, res)=>{
    const apiRecipesRaw = (await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)).data.results;

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

