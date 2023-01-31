
const {DataTypes} = require("sequelize");
const {getRecipeById, createRecipe, searchRecipesByName} = require("../controllers/recipeControllers");

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

    const results = name ? await searchRecipesByName(name)
        : res.send("No se encontraron recetas con ese nombre");

    res.status(200).json(results);
}


module.exports = {
    createRecipeHandler,
    getRecipeHandler,
    getRecipesHandler
}

// id:{
//     type:DataTypes.UUID,
//         primaryKey: true,
//         defaultValue: DataTypes.UUIDV4,
//         allowNull: false,
// },
// name: {
//     type: DataTypes.STRING,
//         allowNull: false,
// },
// summary: {
//     type: DataTypes.STRING,
//         allowNull: false,
// },
// healthScore: {
//     type: DataTypes.REAL,
// },
// instructions: {
//     type: DataTypes.TEXT,
// }
// }

