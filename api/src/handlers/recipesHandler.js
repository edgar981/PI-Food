
const {DataTypes} = require("sequelize");
const {getRecipeById, createRecipe, searchRecipesByName, getAllRecipes} = require("../controllers/recipeControllers");

const createRecipeHandler = async (req, res) => {
    const { name, summary, healthScore, instructions, dietName} = req.body;

    try {
        const newRecipe = await createRecipe(name, summary, healthScore, instructions, dietName);
        res.status(200).json(newRecipe);
    } catch (error){
        res.status(400).json({error: error.message});
    }
}

const getRecipeHandler = async (req, res) => {
    const {idReceta} = req.params;

    const source = isNaN(idReceta) ? "bdd" : "api";

    try {
        const recipe = await getRecipeById(idReceta, source);
        res.status(200).json(recipe);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const getRecipesHandler = async (req, res) => {
    const { name } = req.query;

    // const results = name ? await searchRecipesByName(name)
    //     : await getAllRecipes();
    // const results = name ? await searchRecipesByName(name)
    //     : res.status(400).json("No se encontraron recetas");

    if (name){
        const results = await searchRecipesByName(name);
        if (results.length){
            res.status(200).json(results);
        } else{
            res.status(400).send("Recipe not found");
        }
    } else{
        const respuesta = await getAllRecipes();
        res.status(200).json(respuesta);
    }

}


module.exports = {
    createRecipeHandler,
    getRecipeHandler,
    getRecipesHandler
}

