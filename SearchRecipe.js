import React from 'react';
import "../App.css";

const SearchRecipe = ({
  value,
  isLoading,
  handleSubmit,
  onChange
}) => {

  return (
    <form onSubmit={handleSubmit}>
      <input
      value={value}
      disabled={isLoading}
      onChange={onChange}
      placeholder="Search Recipes"
      className="form-control"
      />
      <input
      disabled={ isLoading || !value}
      type="submit"
      className="btn"
      value="Search"
      />
    </form>
  );
};

export default SearchRecipe