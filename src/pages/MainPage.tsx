import { Link } from 'react-router-dom';
import '../styles/MainPage.css';

const MainPage = () => {
  return (
    <div className="main-page">
      <h1>Welcome to MedPred</h1>
      <div className="services">
        <div className="service-card">
          <h2>Breast Cancer Prediction</h2>
          <p>Predict breast cancer using machine learning models</p>
          <Link to="/breast-cancer" className="service-link">Try Now</Link>
        </div>
        <div className="service-card">
          <h2>Diabetes Prediction</h2>
          <p>Check diabetes risk using advanced algorithms</p>
          <Link to="/diabetes" className="service-link">Try Now</Link>
        </div>
      </div>
    </div>
  );
};

export default MainPage; 