import React from 'react';

const FindRecipe = ( {recipe}) => {
const {idMeal, strMeal, strCategory, strMealThumb } = recipe;

  return (
    <div className= "card">
      <img 
      src={strMealThumb}
      alt={strMeal}
      className="card-image"
      />
      <div className="card-body">
        <span className="category">{strCategory}</span>
        <h3>{strMeal}</h3>
        <a href={"https://www.themealdb.com/api/json/v1/1/filter.php?i=" + idMeal} target="_blank">Ingredients</a>
      </div>
    </div>
  );
};

export default FindRecipe