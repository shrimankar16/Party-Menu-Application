import { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { filterMenuItems } from '../data/menuData';
import FoodCard from '../components/FoodCard';
import './Menu.css';

const Menu = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  
  const [category, setCategory] = useState('all');
  const [diet, setDiet] = useState('all');
  const [searchName, setSearchName] = useState('');
  const [searchInput, setSearchInput] = useState('');

  // Load saved recipes from localStorage
  const savedRecipesFromStorage = localStorage.getItem('party_menu_saved_recipes');
  const [savedRecipes] = useState(savedRecipesFromStorage ? JSON.parse(savedRecipesFromStorage) : []);

  // Filter items whenever filters change using useMemo
  const filteredItems = useMemo(() => {
    return filterMenuItems({ category, diet, name: searchName });
  }, [category, diet, searchName]);

  const handleLogout = () => {
    logout();
    navigate('/signin');
  };

  const handleSearch = () => {
    setSearchName(searchInput);
  };

  const handleSearchKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="menu-page">
      <header className="menu-header">
        <div className="header-left">
          <h1>🎉 Party Menu</h1>
          <p className="welcome-text">Welcome, {user?.name || 'Guest'}!</p>
        </div>
        <div className="header-right">
          <Link to="/saved-recipes" className="saved-recipes-link">
            Saved Recipes
            {savedRecipes.length > 0 && (
              <span className="badge">{savedRecipes.length}</span>
            )}
          </Link>
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        </div>
      </header>

      <div className="filters-section">
        <div className="filter-group">
          <label className="filter-label">Category</label>
          <div className="chip-group">
            <button
              className={`chip ${category === 'all' ? 'active' : ''}`}
              onClick={() => setCategory('all')}
            >
              All
            </button>
            <button
              className={`chip ${category === 'starter' ? 'active' : ''}`}
              onClick={() => setCategory('starter')}
            >
              Starter
            </button>
            <button
              className={`chip ${category === 'main' ? 'active' : ''}`}
              onClick={() => setCategory('main')}
            >
              Main
            </button>
            <button
              className={`chip ${category === 'sides' ? 'active' : ''}`}
              onClick={() => setCategory('sides')}
            >
              Sides
            </button>
            <button
              className={`chip ${category === 'desert' ? 'active' : ''}`}
              onClick={() => setCategory('desert')}
            >
              Desert
            </button>
          </div>
        </div>

        <div className="filter-group">
          <label className="filter-label">Diet</label>
          <div className="chip-group">
            <button
              className={`chip ${diet === 'all' ? 'active' : ''}`}
              onClick={() => setDiet('all')}
            >
              All
            </button>
            <button
              className={`chip ${diet === 'veg' ? 'active' : ''}`}
              onClick={() => setDiet('veg')}
            >
              Veg
            </button>
            <button
              className={`chip ${diet === 'nonveg' ? 'active' : ''}`}
              onClick={() => setDiet('nonveg')}
            >
              Non-Veg
            </button>
          </div>
        </div>

        <div className="search-group">
          <label className="filter-label">Search</label>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search dishes by name..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyPress={handleSearchKeyPress}
            />
            <button onClick={handleSearch} className="search-button">
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="menu-content">
        <div className="items-count">
          {filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'} found
        </div>

        {filteredItems.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">🔍</div>
            <h2>No dishes found</h2>
            <p>Try different filters or search terms</p>
          </div>
        ) : (
          <div className="menu-grid">
            {filteredItems.map((item) => (
              <FoodCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
