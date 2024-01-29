import React from "react";
import { MEALS } from "../data/mock/meals.data";
import AddMealComponent from "./AddMealComponent";

const DayViewComponent = () => {
  return (
    <div className="day-view-container">
      <div className="meals-column">
        {MEALS.map((meal, index) => (
          <div key={index} className="meal">
            <h3>{meal.name} ({meal.type})</h3>
            <ul>
              {meal.ingredients.map((ingredient, idx) => (
                <li key={idx}>{ingredient.name}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="add-meal-column">
        <AddMealComponent />
      </div>
    </div>
  );
};
export default DayViewComponent;
