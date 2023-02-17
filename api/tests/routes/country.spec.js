/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Recipe, conn } = require('../../src/db.js');

const agent = session(app);
const recipe = {
  name: 'Milanea a la napolitana',
};

describe('Recipe routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Recipe.sync({ force: true })
    .then(() => Recipe.create(recipe)));
  describe('GET /recipes', () => {
    it('should get 200', () =>
      agent.get('/recipes').expect(200)
    );
  });

  describe('GET /recipes/{idReceta}', () => {
    it('should get 200', () =>
        agent.get('/recipes/715391').expect(200)
    );
    it('should get a response with the recipe properties: name, dishtypes, image, diets, summary, healthscore, instructions', ()=>{
      agent.get('/recipes/715415').then((res)=>{
        expect(res.body).to.equal({"id": 715415,
          "vegetarian": false,
          "lowFodmap": false,
          "image": "https://spoonacular.com/recipeImages/715415-556x370.jpg",
          "name": "Red Lentil Soup with Chicken and Turnips",
          "dishTypes": [
            "lunch",
            "soup",
            "main course",
            "main dish",
            "dinner"
          ],
          "diets": "gluten free, dairy free",
          "summary": "Red Lentil Soup with Chicken and Turnips might be a good recipe to expand your main course repertoire. This recipe serves 8 and costs $3.0 per serving. One serving contains <b>477 calories</b>, <b>27g of protein</b>, and <b>20g of fat</b>. It is brought to you by Pink When. 1866 people have tried and liked this recipe. It can be enjoyed any time, but it is especially good for <b>Autumn</b>. From preparation to the plate, this recipe takes approximately <b>55 minutes</b>. It is a good option if you're following a <b>gluten free and dairy free</b> diet. Head to the store and pick up salt and pepper, canned tomatoes, flat leaf parsley, and a few other things to make it today. Overall, this recipe earns a <b>spectacular spoonacular score of 99%</b>. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/red-lentil-and-chicken-soup-682185\">Red Lentil and Chicken Soup</a>, <a href=\"https://spoonacular.com/recipes/red-lentil-and-chicken-soup-1058971\">Red Lentil and Chicken Soup</a>, and <a href=\"https://spoonacular.com/recipes/red-lentil-soup-34121\">Red-Lentil Soup</a>.",
          "healthScore": 100,
          "instructions": [
            {
              "number": 1,
              "step": "To a large dutch oven or soup pot, heat the olive oil over medium heat."
            },
            {
              "number": 2,
              "step": "Add the onion, carrots and celery and cook for 8-10 minutes or until tender, stirring occasionally."
            },
            {
              "number": 3,
              "step": "Add the garlic and cook for an additional 2 minutes, or until fragrant. Season conservatively with a pinch of salt and black pepper.To the pot, add the tomatoes, turnip and red lentils. Stir to combine. Stir in the vegetable stock and increase the heat on the stove to high. Bring the soup to a boil and then reduce to a simmer. Simmer for 20 minutes or until the turnips are tender and the lentils are cooked through."
            },
            {
              "number": 4,
              "step": "Add the chicken breast and parsley. Cook for an additional 5 minutes. Adjust seasoning to taste."
            },
            {
              "number": 5,
              "step": "Serve the soup immediately garnished with fresh parsley and any additional toppings. Enjoy!"
            }
          ]})
      })
    });
  });
});
