import { Link } from 'react-router-dom';
import { SERVICES } from '../utils/constants.ts';
import '../styles/Navbar.css';

const Navbar = () => {
  const navigateToService = (url: string) => {
    try {
      window.location.href = url;
    } catch (error) {
      console.error('Navigation error:', error);
      alert('Unable to access the service. Please make sure it is running.');
    }
  };

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">
        MedPred
      </Link>
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <span 
          className="nav-link" 
          onClick={() => navigateToService(SERVICES.BREAST_CANCER)}
          style={{ cursor: 'pointer' }}
        >
          Breast Cancer
        </span>
        <span 
          className="nav-link" 
          onClick={() => navigateToService(SERVICES.DIABETES)}
          style={{ cursor: 'pointer' }}
        >
          Diabetes
        </span>
      </div>
    </nav>
  );
};

export default Navbar; 