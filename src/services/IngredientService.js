import React, { useState, useEffect } from 'react';

const baseUrl = 'http://localhost:5000/documented_api'; // Adjust as needed

// Fetch a single ingredient's details
export const useIngredientDetails = (ingredientName) => {
  const [ingredient, setIngredient] = useState(null);

  useEffect(() => {
    const encodedName = encodeURIComponent(ingredientName);
    const url = `${baseUrl}/ingredient/${encodedName}`;

    const fetchIngredient = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setIngredient(data);
    };

    fetchIngredient();
  }, [ingredientName]);

  return ingredient;
};

// Fetch all ingredients
export const useIngredients = () => {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const fetchIngredients = async () => {
      const response = await fetch(`${baseUrl}/ingredient`);
      const data = await response.json();
      setIngredients(data);
    };

    fetchIngredients();
  }, []);

  return ingredients;
};
