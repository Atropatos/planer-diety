import React from "react";
import { IngredientService, useIngredientDetails } from "../services/IngredientService";
import { AuthService } from '../services/AuthService';
import { INGREDIENTS } from "../data/mock/ingredient.data.js";
const ListComponent = () => {
    return (
      <div>
        {INGREDIENTS.map((ingredient, index) => (
          <div key={index}>
            <h2>{ingredient.name}</h2>
            <ul>
              {ingredient.nutritionals.map((nutritional, i) => (
                <li key={i}>{nutritional.type}: {nutritional.value}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };

  export default ListComponent;