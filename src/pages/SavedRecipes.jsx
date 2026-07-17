import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FoodCard from '../components/FoodCard';
import './SavedRecipes.css';

const SavedRecipes = () => {
  const [savedRecipes, setSavedRecipes] = useState([]);

  const loadSavedRecipes = () => {
    const saved = localStorage.getItem('party_menu_saved_recipes');
    if (saved) {
      setSavedRecipes(JSON.parse(saved));
    }
  };

  useEffect(() => {
    loadSavedRecipes();
  }, []);

  const handleRemove = (id) => {
    const updated = savedRecipes.filter(recipe => recipe.id !== id);
    setSavedRecipes(updated);
    localStorage.setItem('party_menu_saved_recipes', JSON.stringify(updated));
  };

  return (
    <div className="saved-recipes-page">
      <div className="saved-recipes-nav">
        <Link to="/" className="back-to-menu-link">
          ← Back to Menu
        </Link>
      </div>

      <div className="saved-recipes-container">
        <div className="saved-recipes-header">
          <h1>Saved Recipes</h1>
          <p className="saved-count">
            {savedRecipes.length} {savedRecipes.length === 1 ? 'recipe' : 'recipes'} saved
          </p>
        </div>

        {savedRecipes.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">📋</div>
            <h2>No saved recipes yet</h2>
            <p>Start exploring our menu and save your favorite dishes!</p>
            <Link to="/" className="browse-menu-button">
              Browse Menu
            </Link>
          </div>
        ) : (
          <div className="saved-recipes-grid">
            {savedRecipes.map((item) => (
              <FoodCard 
                key={item.id} 
                item={item} 
                showRemoveButton={true}
                onRemove={handleRemove}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SavedRecipes;
