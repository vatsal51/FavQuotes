// FavoriteQuotes.js
import React, { useState } from 'react';

function FavoriteQuotes({ user,favorites }){

  console.log("fav in fav",favorites)
  const addToFavorites = () => {
    // Add quote to favorites
  };

  const removeFromFavorites = () => {
    // Remove quote from favorites
  };

  return (
    <div>
    <h2>Favorite Quotes</h2>
    {favorites.length === 0 ? (
      <p>No favorite quotes yet.</p>
    ) : (
      favorites.map((quote, index) => (
        <div key={index}>
          <p>{quote}</p>
          <button onClick={() => removeFromFavorites(quote)}>
            Remove from Favorites
          </button>
        </div>
      ))
    )}
  </div>
  );
};

export default FavoriteQuotes;
