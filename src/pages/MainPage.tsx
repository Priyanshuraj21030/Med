import { SERVICES } from '../utils/constants.ts';
import '../styles/MainPage.css';

const MainPage = () => {
  const navigateToService = (url: string) => {
    try {
      window.location.href = url;
    } catch (error) {
      console.error('Navigation error:', error);
      alert('Unable to access the service. Please make sure it is running.');
    }
  };

  return (
    <div className="main-page">
      <h1>Welcome to MedPred</h1>
      <div className="services">
        <div className="service-card">
          <h2>Breast Cancer Prediction</h2>
          <p>Predict breast cancer using machine learning models</p>
          <button 
            className="service-link"
            onClick={() => navigateToService(SERVICES.BREAST_CANCER)}
          >
            Try Now
          </button>
        </div>
        <div className="service-card">
          <h2>Diabetes Prediction</h2>
          <p>Check diabetes risk using advanced algorithms</p>
          <button 
            className="service-link"
            onClick={() => navigateToService(SERVICES.DIABETES)}
          >
            Try Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainPage; 