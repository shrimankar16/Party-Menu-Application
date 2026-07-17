import { useNavigate } from 'react-router-dom';
import './FoodCard.css';

const FoodCard = ({ item, showRemoveButton = false, onRemove }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/menu/${item.id}`);
  };

  const handleRemoveClick = (e) => {
    e.stopPropagation();
    if (onRemove) {
      onRemove(item.id);
    }
  };

  return (
    <div className="food-card" onClick={handleCardClick}>
      <div className="food-card-image-container">
        <img src={item.image} alt={item.name} className="food-card-image" />
        <div className={`diet-badge ${item.isVeg ? 'veg' : 'non-veg'}`}>
          {item.isVeg ? '🟢 Veg' : '🔴 Non-Veg'}
        </div>
      </div>
      <div className="food-card-content">
        <div className="category-label">{item.category.toUpperCase()}</div>
        <h3 className="food-card-title">{item.name}</h3>
        <p className="food-card-description">{item.description}</p>
        <div className="food-card-footer">
          <span className="servings">{item.servings}</span>
          {showRemoveButton && (
            <button 
              className="remove-button"
              onClick={handleRemoveClick}
            >
              Remove
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
