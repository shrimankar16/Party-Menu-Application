import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getMenuItemById } from '../data/menuData';
import './FoodDetail.css';

const FoodDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isSaved, setIsSaved] = useState(false);

  // Get menu item and check if saved
  const menuItem = getMenuItemById(id);
  const [item] = useState(menuItem);

  useEffect(() => {
    if (!menuItem) {
      navigate('/404');
      return;
    }
    
    // Check if item is saved
    const savedRecipes = JSON.parse(localStorage.getItem('party_menu_saved_recipes') || '[]');
    setIsSaved(savedRecipes.some(recipe => recipe.id === menuItem.id));
  }, [id, navigate, menuItem]);

  const toggleSave = () => {
    const savedRecipes = JSON.parse(localStorage.getItem('party_menu_saved_recipes') || '[]');
    
    if (isSaved) {
      // Remove from saved
      const updated = savedRecipes.filter(recipe => recipe.id !== item.id);
      localStorage.setItem('party_menu_saved_recipes', JSON.stringify(updated));
      setIsSaved(false);
    } else {
      // Add to saved
      savedRecipes.push(item);
      localStorage.setItem('party_menu_saved_recipes', JSON.stringify(savedRecipes));
      setIsSaved(true);
    }
  };

  if (!item) {
    return (
      <div className="loading-container">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="food-detail-page">
      <div className="food-detail-nav">
        <button onClick={() => navigate('/')} className="back-button">
          ← Back to Menu
        </button>
        <Link to="/saved-recipes" className="saved-link">
          Saved Recipes
        </Link>
      </div>

      <div className="food-detail-container">
        <div className="food-detail-hero">
          <img src={item.image} alt={item.name} className="hero-image" />
          <div className="hero-badges">
            <span className="category-badge">{item.category.toUpperCase()}</span>
            <span className={`diet-badge ${item.isVeg ? 'veg' : 'non-veg'}`}>
              {item.isVeg ? '🟢 Veg' : '🔴 Non-Veg'}
            </span>
          </div>
        </div>

        <div className="food-detail-content">
          <div className="detail-header">
            <div>
              <h1 className="detail-title">{item.name}</h1>
              <p className="detail-servings">{item.servings}</p>
            </div>
            <button 
              onClick={toggleSave} 
              className={`save-button ${isSaved ? 'saved' : ''}`}
            >
              {isSaved ? '✓ Saved' : '+ Save Recipe'}
            </button>
          </div>

          <div className="detail-description">
            <h2>Description</h2>
            <p>{item.fullDescription}</p>
          </div>

          <div className="detail-ingredients">
            <h2>Ingredients</h2>
            <ul className="ingredients-list">
              {item.ingredients.map((ingredient, index) => (
                <li key={index}>
                  <span className="ingredient-name">{ingredient.name}</span>
                  <span className="ingredient-quantity">{ingredient.quantity}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetail;
