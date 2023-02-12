import Card from '../Card/Card';
import {useSelector} from "react-redux";
import "./Cards.css"
import React, {useMemo, useState} from "react";
import Pagination from "../Pagination/Pagination";
//
// let PageSize = 9;

export default function Cards() {
    const recipes = useSelector(state => state.recipes);
    // const recipes = [
    //     {
    //         "id": 715415,
    //         "image": "https://spoonacular.com/recipeImages/715415-312x231.jpg",
    //         "name": "Red Lentil Soup with Chicken and Turnips",
    //         "dishTypes": [
    //             "lunch",
    //             "soup",
    //             "main course",
    //             "main dish",
    //             "dinner"
    //         ],
    //         "diets": [
    //             "gluten free",
    //             "dairy free"
    //         ],
    //         "summary": "Red Lentil Soup with Chicken and Turnips might be a good recipe to expand your main course repertoire. This recipe serves 8 and costs $3.0 per serving. One serving contains <b>477 calories</b>, <b>27g of protein</b>, and <b>20g of fat</b>. It is brought to you by Pink When. 1866 people have tried and liked this recipe. It can be enjoyed any time, but it is especially good for <b>Autumn</b>. From preparation to the plate, this recipe takes approximately <b>55 minutes</b>. It is a good option if you're following a <b>gluten free and dairy free</b> diet. Head to the store and pick up salt and pepper, canned tomatoes, flat leaf parsley, and a few other things to make it today. Overall, this recipe earns a <b>spectacular spoonacular score of 99%</b>. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/red-lentil-and-chicken-soup-682185\">Red Lentil and Chicken Soup</a>, <a href=\"https://spoonacular.com/recipes/red-lentil-and-chicken-soup-1058971\">Red Lentil and Chicken Soup</a>, and <a href=\"https://spoonacular.com/recipes/red-lentil-soup-34121\">Red-Lentil Soup</a>.",
    //         "healthScore": 100,
    //         "instructions": [
    //             {
    //                 "number": 1,
    //                 "step": "To a large dutch oven or soup pot, heat the olive oil over medium heat."
    //             },
    //             {
    //                 "number": 2,
    //                 "step": "Add the onion, carrots and celery and cook for 8-10 minutes or until tender, stirring occasionally."
    //             },
    //             {
    //                 "number": 3,
    //                 "step": "Add the garlic and cook for an additional 2 minutes, or until fragrant. Season conservatively with a pinch of salt and black pepper.To the pot, add the tomatoes, turnip and red lentils. Stir to combine. Stir in the vegetable stock and increase the heat on the stove to high. Bring the soup to a boil and then reduce to a simmer. Simmer for 20 minutes or until the turnips are tender and the lentils are cooked through."
    //             },
    //             {
    //                 "number": 4,
    //                 "step": "Add the chicken breast and parsley. Cook for an additional 5 minutes. Adjust seasoning to taste."
    //             },
    //             {
    //                 "number": 5,
    //                 "step": "Serve the soup immediately garnished with fresh parsley and any additional toppings. Enjoy!"
    //             }
    //         ]
    //     },
    //     {
    //         "id": 663559,
    //         "image": "https://spoonacular.com/recipeImages/663559-312x231.jpg",
    //         "name": "Tomato and lentil soup",
    //         "dishTypes": [
    //             "lunch",
    //             "soup",
    //             "main course",
    //             "main dish",
    //             "dinner"
    //         ],
    //         "diets": [
    //             "gluten free",
    //             "dairy free",
    //             "lacto ovo vegetarian",
    //             "vegan"
    //         ],
    //         "summary": "Tomato and lentil soup might be a good recipe to expand your main course recipe box. This recipe makes 4 servings with <b>340 calories</b>, <b>18g of protein</b>, and <b>8g of fat</b> each. For <b>$1.16 per serving</b>, this recipe <b>covers 34%</b> of your daily requirements of vitamins and minerals. It is perfect for <b>Autumn</b>. This recipe from Foodista requires bay leaf, onion, garlic, and carrots. 11 person were glad they tried this recipe. From preparation to the plate, this recipe takes about <b>45 minutes</b>. It is a good option if you're following a <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> diet. With a spoonacular <b>score of 96%</b>, this dish is great. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/tomato-and-lentil-soup-482854\">Tomato and Lentil Soup</a>, <a href=\"https://spoonacular.com/recipes/lentil-tomato-soup-398380\">Lentil-Tomato Soup</a>, and <a href=\"https://spoonacular.com/recipes/lentil-tomato-soup-108370\">Lentil & Tomato Soup</a>.",
    //         "healthScore": 100,
    //         "instructions": [
    //             {
    //                 "number": 1,
    //                 "step": "Saut onion and garlic in olive oil for 5 minutes."
    //             },
    //             {
    //                 "number": 2,
    //                 "step": "Add the carrot, saut for another 2 minutes."
    //             },
    //             {
    //                 "number": 3,
    //                 "step": "Add tomatoes, bay leaf and water, stir and bring to the boil."
    //             },
    //             {
    //                 "number": 4,
    //                 "step": "Stir in lentils, season with salt and cook for 5 minutes."
    //             },
    //             {
    //                 "number": 5,
    //                 "step": "Before serving sprinkle with chopped parsley."
    //             }
    //         ]
    //     },
    //     {
    //         "id": 652417,
    //         "image": "https://spoonacular.com/recipeImages/652417-312x231.jpg",
    //         "name": "Moroccan chickpea and lentil stew",
    //         "dishTypes": [
    //             "lunch",
    //             "soup",
    //             "main course",
    //             "main dish",
    //             "dinner"
    //         ],
    //         "diets": [
    //             "dairy free",
    //             "lacto ovo vegetarian",
    //             "vegan"
    //         ],
    //         "summary": "The recipe Moroccan chickpean and lentil stew can be made <b>in roughly 30 minutes</b>. This dairy free, lacto ovo vegetarian, and vegan recipe serves 3 and costs <b>$1.26 per serving</b>. This main course has <b>466 calories</b>, <b>20g of protein</b>, and <b>7g of fat</b> per serving. This recipe is liked by 11 foodies and cooks. It can be enjoyed any time, but it is especially good for <b>Autumn</b>. It is brought to you by Foodista. If you have olive oil, salt and pepper, tomato paste, and a few other ingredients on hand, you can make it. All things considered, we decided this recipe <b>deserves a spoonacular score of 97%</b>. This score is outstanding. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/moroccan-chickpea-and-lentil-stew-1376773\">Moroccan chickpean and lentil stew</a>, <a href=\"https://spoonacular.com/recipes/butternut-squash-chickpea-lentil-moroccan-stew-523871\">Butternut Squash, Chickpea & Lentil Moroccan Stew</a>, and <a href=\"https://spoonacular.com/recipes/butternut-squash-chickpea-lentil-moroccan-stew-1379167\">Butternut Squash, Chickpea & Lentil Moroccan Stew</a>.",
    //         "healthScore": 96,
    //         "instructions": [
    //             {
    //                 "number": 1,
    //                 "step": "Heat oil in large saucepan over medium-high heat, add onion and cook for about 3 minutes."
    //             },
    //             {
    //                 "number": 2,
    //                 "step": "Add celery, carrot and broccoli to pan and saut for about 5 minutes."
    //             },
    //             {
    //                 "number": 3,
    //                 "step": "Add in all seasonings and cook additional 1 minute."
    //             },
    //             {
    //                 "number": 4,
    //                 "step": "Add water, tomato paste, chickpeas and lentils, bring to a boil. Cover, reduce heat to low and simmer for 20 minutes.Meanwhile, cook couscous in separate pan according to package directions."
    //             },
    //             {
    //                 "number": 5,
    //                 "step": "Add cilantro and lemon juice to stew and serve over warm couscous."
    //             }
    //         ]
    //     },
    //     {
    //         "id": 649931,
    //         "image": "https://spoonacular.com/recipeImages/649931-312x231.jpg",
    //         "name": "Lentil Salad With Vegetables",
    //         "dishTypes": [
    //             "side dish"
    //         ],
    //         "diets": [
    //             "gluten free",
    //             "dairy free",
    //             "lacto ovo vegetarian",
    //             "vegan"
    //         ],
    //         "summary": "Lentil Salad With Vegetables might be a good recipe to expand your side dish repertoire. This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe serves 4 and costs <b>$1.2 per serving</b>. One serving contains <b>320 calories</b>, <b>15g of protein</b>, and <b>12g of fat</b>. Head to the store and pick up tomatoes, rosemary, red wine vinegar, and a few other things to make it today. This recipe from Foodista has 7 fans. From preparation to the plate, this recipe takes around <b>45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 97%</b>, which is awesome. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/lentil-salad-with-vegetables-1400649\">Lentil Salad With Vegetables</a>, <a href=\"https://spoonacular.com/recipes/lentil-salad-with-summer-vegetables-1019650\">Lentil Salad with Summer Vegetables</a>, and <a href=\"https://spoonacular.com/recipes/puy-lentil-salad-with-caramelized-vegetables-33731\">Puy Lentil Salad With Caramelized Vegetables</a>.",
    //         "healthScore": 100,
    //         "instructions": [
    //             {
    //                 "number": 1,
    //                 "step": "Heat olive oil in a saucepan over medium high heat and add onion. Cook until just translucent and then add lentils."
    //             },
    //             {
    //                 "number": 2,
    //                 "step": "Add water and cook according to package directions."
    //             },
    //             {
    //                 "number": 3,
    //                 "step": "Drain and cool."
    //             },
    //             {
    //                 "number": 4,
    //                 "step": "Combine lentils with tomatoes, pepper, onions, rosemary, olive oil, and vinegars. Season with salt and pepper to taste and adjust oil or vinegar as desired."
    //             },
    //             {
    //                 "number": 5,
    //                 "step": "Serve cold or at room temperature."
    //             }
    //         ]
    //     },
    //     {
    //         "id": 649944,
    //         "image": "https://spoonacular.com/recipeImages/649944-312x231.jpg",
    //         "name": "Lentil Mango Salad",
    //         "dishTypes": [
    //             "side dish",
    //             "lunch",
    //             "main course",
    //             "salad",
    //             "main dish",
    //             "dinner"
    //         ],
    //         "diets": [
    //             "gluten free",
    //             "dairy free",
    //             "lacto ovo vegetarian",
    //             "vegan"
    //         ],
    //         "summary": "Lentil Mango Salad is a main course that serves 4. One serving contains <b>253 calories</b>, <b>12g of protein</b>, and <b>6g of fat</b>. For <b>$1.59 per serving</b>, this recipe <b>covers 25%</b> of your daily requirements of vitamins and minerals. It is brought to you by Foodista. 3 people found this recipe to be tasty and satisfying. From preparation to the plate, this recipe takes around <b>45 minutes</b>. It is a good option if you're following a <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> diet. Head to the store and pick up cilantro, white wine vinegar, onion, and a few other things to make it today. Taking all factors into account, this recipe <b>earns a spoonacular score of 94%</b>, which is amazing. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/lentil-burger-with-mango-salsa-509088\">LENTIL BURGER with Mango Salsa</a>, <a href=\"https://spoonacular.com/recipes/plumcot-orange-lentil-salad-fave-five-friday-lovely-lentil-dishes-529696\">Plumcot, Orange & Lentil Salad… & Fave Five Friday: Lovely Lentil Dishes</a>, and <a href=\"https://spoonacular.com/recipes/simple-coconut-quinoa-and-lentil-curry-with-lime-mango-705061\">Simple Coconut Quinoan and Lentil Curry with Lime Mango</a>.",
    //         "healthScore": 100,
    //         "instructions": [
    //             {
    //                 "number": 1,
    //                 "step": "Clean and chop the onion, red pepper, garlic, Cilantro"
    //             },
    //             {
    //                 "number": 2,
    //                 "step": "Peel and chop mango"
    //             },
    //             {
    //                 "number": 3,
    //                 "step": "Place all salad ingredients in a bowl, add the oil, vinegar, season with salt and pepper"
    //             },
    //             {
    //                 "number": 4,
    //                 "step": "Mix well and leave in the refrigerator for 1 / 2 hour"
    //             },
    //             {
    //                 "number": 5,
    //                 "step": "This salad is left to eat alone or to accompany meat and poultry dishes, enjoy ..."
    //             }
    //         ]
    //     },
    //     {
    //         "id": 652393,
    //         "image": "https://spoonacular.com/recipeImages/652393-312x231.jpg",
    //         "name": "Moosewood Lentil Soup",
    //         "dishTypes": [
    //             "lunch",
    //             "soup",
    //             "main course",
    //             "main dish",
    //             "dinner"
    //         ],
    //         "diets": [
    //             "gluten free",
    //             "dairy free",
    //             "lacto ovo vegetarian",
    //             "vegan"
    //         ],
    //         "summary": "Moosewood Lentil Soup might be a good recipe to expand your main course recipe box. This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe serves 6 and costs <b>74 cents per serving</b>. One portion of this dish contains roughly <b>26g of protein</b>, <b>4g of fat</b>, and a total of <b>396 calories</b>. A mixture of pepper, lentils, salt, and a handful of other ingredients are all it takes to make this recipe so yummy. 2 people found this recipe to be flavorful and satisfying. It is perfect for <b>Autumn</b>. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. It is brought to you by Foodista. All things considered, we decided this recipe <b>deserves a spoonacular score of 95%</b>. This score is spectacular. Similar recipes are <a href=\"https://spoonacular.com/recipes/moosewood-lentil-soup-1319699\">Moosewood Lentil Soup</a>, <a href=\"https://spoonacular.com/recipes/moosewood-mushroom-barley-soup-143909\">Moosewood Mushroom Barley Soup!</a>, and <a href=\"https://spoonacular.com/recipes/hungarian-mushroom-soup-from-the-moosewood-cookbook-143242\">Hungarian Mushroom Soup, from the Moosewood Cookbook</a>.",
    //         "healthScore": 100,
    //         "instructions": [
    //             {
    //                 "number": 1,
    //                 "step": "Place lentils and water in a soup pot or Dutch oven.Bring to a boil, lower heat to a simmer, and let cook until lentils are mushy (about 45 minutes)."
    //             },
    //             {
    //                 "number": 2,
    //                 "step": "Add more water as needed, until the soup is your favorite consistency."
    //             },
    //             {
    //                 "number": 3,
    //                 "step": "Heat oil or melt butter in a medium-sized skillet."
    //             },
    //             {
    //                 "number": 4,
    //                 "step": "Add onion, celery, and carrots, and saut over medium heat for about 10 minutes."
    //             },
    //             {
    //                 "number": 5,
    //                 "step": "Add garlic, salt, pepper, and herbs of your choice, and saut about 5 minutes longer."
    //             },
    //             {
    //                 "number": 6,
    //                 "step": "Transfer to lentils.Stir in wine, if desired, lemon juice and molasses or brown sugar.Taste to correct seasonings, then simmer for"
    //             },
    //             {
    //                 "number": 7,
    //                 "step": "At least 15 minutes longer."
    //             },
    //             {
    //                 "number": 8,
    //                 "step": "Serve hot, with a little vinegar drizzled onto each serving, and a sprinkling of minced"
    //             },
    //             {
    //                 "number": 9,
    //                 "step": "Scallions or parsley on top, if desired."
    //             }
    //         ]
    //     },
    //     {
    //         "id": 649886,
    //         "image": "https://spoonacular.com/recipeImages/649886-312x231.jpg",
    //         "name": "Lemony Greek Lentil Soup",
    //         "dishTypes": [
    //             "lunch",
    //             "soup",
    //             "main course",
    //             "main dish",
    //             "dinner"
    //         ],
    //         "diets": [
    //             "gluten free",
    //             "dairy free",
    //             "lacto ovo vegetarian",
    //             "vegan"
    //         ],
    //         "summary": "Lemony Greek Lentil Soup is a Mediterranean main course. One serving contains <b>368 calories</b>, <b>23g of protein</b>, and <b>4g of fat</b>. For <b>88 cents per serving</b>, this recipe <b>covers 36%</b> of your daily requirements of vitamins and minerals. This recipe serves 6. It is perfect for <b>Autumn</b>. 2 people were impressed by this recipe. A mixture of brown lentils, , pepper, and a handful of other ingredients are all it takes to make this recipe so flavorful. From preparation to the plate, this recipe takes about <b>45 minutes</b>. It is brought to you by Foodista. It is a good option if you're following a <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> diet. All things considered, we decided this recipe <b>deserves a spoonacular score of 86%</b>. This score is spectacular. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/lemony-greek-lentil-soup-1218953\">Lemony Greek Lentil Soup</a>, <a href=\"https://spoonacular.com/recipes/lemony-lentil-soup-1335677\">Lemony Lentil Soup</a>, and <a href=\"https://spoonacular.com/recipes/lemony-lentil-soup-961948\">Lemony Lentil Soup</a>.",
    //         "healthScore": 100,
    //         "instructions": [
    //             {
    //                 "number": 1,
    //                 "step": "Put the lentils, water, carrot and 1 teaspoon dried thyme into an 8-quart stockpot, cover and set over medium heat."
    //             },
    //             {
    //                 "number": 2,
    //                 "step": "After 15 minutes, lower the heat somewhat and gently bring the water to a simmer, which should take another half an hour or so."
    //             },
    //             {
    //                 "number": 3,
    //                 "step": "Once the lentils have reached the boiling point, turn off the burner and let them sit for 1 hour."
    //             },
    //             {
    //                 "number": 4,
    //                 "step": "After the hour, bring the soup back to a simmer and add the lemon juice, dry basil, fresh thyme, oregano, pepper and salt and simmer for 1 hour."
    //             },
    //             {
    //                 "number": 5,
    //                 "step": "Now, slowly saut the onion and garlic in the olive oil until the onion is tender."
    //             },
    //             {
    //                 "number": 6,
    //                 "step": "Coarsely chop the tomatoes (I do this with kitchen scissors right in the can), and add them and the onion mixture to the soup. Adjust the salt to taste."
    //             },
    //             {
    //                 "number": 7,
    //                 "step": "Bring everything back to the boiling point and simmer for another hour.  After this point, you can turn your burner to its lowest setting, and this soup will happily sit steaming with its lid cocked for several hours until you are ready to enjoy it."
    //             },
    //             {
    //                 "number": 8,
    //                 "step": "Add more water if necessary."
    //             },
    //             {
    //                 "number": 9,
    //                 "step": "Serve with crusty bread and a soft cheese like St. Andre or Cambazola"
    //             }
    //         ]
    //     }
    // ]
    //Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [recipesPerPage, setRecipesPerPage] = useState(9);

    //page
    const lastPostIndex = currentPage * recipesPerPage;
    const firstPostIndex = lastPostIndex - recipesPerPage;
    const currentRecipes = recipes.slice(firstPostIndex, lastPostIndex);

    // const currentRecipes = useMemo(() => {
    //     const firstPageIndex = (currentPage - 1) * PageSize;
    //     const lastPageIndex = firstPageIndex + PageSize;
    //     return recipes.slice(firstPageIndex, lastPageIndex);
    // }, [currentPage]);

    return (
        <div className="cards">
            {
                currentRecipes.map((r, index)=>{
                    return (
                        <Card
                            id={r.id}
                            key={index}
                            name={r.name}
                            image={r.image}
                            diets={r.diets}
                            dietName={r.dietName}
                        />
                    )
                })
            }
            <Pagination allRecipes={recipes.length} recipesPerPage={recipesPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
        </div>
    );
}