import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './NotFound.css';

const NotFound = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <div className="not-found-icon">🔍</div>
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you're looking for doesn't exist or has been moved.</p>
        <Link 
          to={isAuthenticated ? '/' : '/signin'} 
          className="home-button"
        >
          {isAuthenticated ? 'Go to Menu' : 'Go to Sign In'}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
