// RecipesPage.js
import React, { useState, useEffect } from 'react';
import './Recipes.css';

const RecipesPage = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('hamburger'); // Default search query

  useEffect(() => {
    const fetchRecipes = async () => {
      // Replace 'YOUR_APP_ID' and 'YOUR_APP_KEY' with your actual Edamam API credentials
      const appId = '763acadd';
      const appKey = 'b26769f94ff8ade2318e5cbe824f1529';

      try {
        const response = await fetch(
          `https://api.edamam.com/search?q=${searchQuery}&app_id=${appId}&app_key=${appKey}`
        );
        const data = await response.json();

        if (data.hits) {
          setRecipes(data.hits);
        }
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  }, [searchQuery]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Trigger the API call with the new search query
  };

  return (
    <div className="recipes-page">
      <h1>Recipes</h1>

      {/* Search Bar */}
      <form onSubmit={handleSearchSubmit}>
        <label htmlFor="search">Search for recipes: </label>
        <input
          type="text"
          id="search"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button type="submit">Search</button>
      </form>

      {recipes.map(({ recipe }) => (
        <div key={recipe.uri} className="recipe">
          <h2>{recipe.label}</h2>
          {recipe.image && <img src={recipe.image} alt={recipe.label} />}
          <h3>Ingredients:</h3>
          <ul>
            {recipe.ingredientLines.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      ))}
      <a href="/" className="link-back">Back to Home</a>
    </div>
  );
};

export default RecipesPage;
