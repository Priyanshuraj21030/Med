import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage.tsx';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import './styles/App.css';

const App = () => {
  const handleNavigation = (path: string) => {
    window.location.href = path;
  };

  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route 
            path="/breast-cancer" 
            element={
              <div onLoad={() => handleNavigation('http://127.0.0.1:5000')} />
            } 
          />
          <Route 
            path="/diabetes" 
            element={
              <div onLoad={() => handleNavigation('http://127.0.0.1:5001')} />
            } 
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App; 