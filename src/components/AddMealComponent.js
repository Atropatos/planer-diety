import React, {useState, useEffect} from "react";
//import { Meal } from "../data/models/meal";

export default function AddMealComponent() {
    const [meal, setMeal] = useState({
        name: "",
        type: "",
        ingredients: []
    });

    const [mealsList, setMealsList] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMeal((prevMeal) => ({
            ...prevMeal,
            [name]: value
        }));
    };

    const handleIngredientChange = (index, value) => {
        const updatedIngredients = [...meal.ingredients];
        updatedIngredients[index] = value;

        setMeal((prevMeal) => ({
            ...prevMeal,
            ingredients: updatedIngredients
        }));
    };

    const addIngredientField = () => {
        setMeal((prevMeal) => ({
            ...prevMeal,
            ingredients: [...prevMeal.ingredients, ""]
        }));
    };

    const removeIngredientField = (index) => {
        const updatedIngredients = [...meal.ingredients];
        updatedIngredients.splice(index, 1);

        setMeal((prevMeal) => ({
            ...prevMeal,
            ingredients: updatedIngredients
        }));
    };

    const addMeal = () => {
        setMealsList((prevMealsList) => [...prevMealsList, meal]);
        setMeal({
            name: "",
            type: "",
            ingredients: [""]
        });
    };

    useEffect(() => {
        if (meal.ingredients.length === 0) {
            setMeal((prevMeal) => ({
                ...prevMeal,
                ingredients: [""]
            }));
        }
    }, [meal.ingredients]);

    return(
        <div id="newMeal">
            <h4>Dodaj nowy posiłek</h4>
            <label>
                Nazwa:
                <input
                    type="text"
                    name="name"
                    value={meal.name}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Typ:
                <input
                    type="text"
                    name="type"
                    value={meal.type}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Składniki:
                {meal.ingredients.map((ingredient, index) => (
                    <div key={index}>
                        <input
                            type="text"
                            value={ingredient}
                            onChange={(e) => handleIngredientChange(index, e.target.value)}/>
                        <button id="small" onClick={() => removeIngredientField(index)}>
                            Remove
                        </button>
                    </div>
                ))}
                <button id="small" onClick={addIngredientField}>Add Ingredient</button>
            </label>
            <br />
            <button onClick={addMeal}>dodaj posiłek</button>

            <div>
                <h4>Dodane posiłki:</h4>
                <ul>
                    {mealsList.map((addedMeal, index) => (
                        <li key={index}>
                            {addedMeal.name} ({addedMeal.type})
                            <ul>
                                {addedMeal.ingredients.map((ingredient, idx) => (
                                    <li key={idx}>{ingredient}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}