# Diabetes Detection System

A modern web application that provides accurate diabetes risk predictions using machine learning algorithms while maintaining a user-friendly, dark-themed interface.

![Diabetes Prediction](/diabetes_home.png)

## Features

- Real-time diabetes risk assessment
- Analysis based on key health parameters:
  - Glucose Level
  - Blood Pressure
  - Insulin Level
  - BMI (Body Mass Index)
- Instant results with confidence scores
- Modern dark-themed UI with smooth animations
- Mobile-responsive design

## Technology Stack

### Frontend
- HTML5
- CSS3
- JavaScript
- Bootstrap 5.3
- Font Awesome Icons
- Google Fonts (Poppins)

### Backend
- Python
- Flask
- NumPy
- Pandas
- Scikit-learn (Random Forest Classifier)

## Installation & Setup

1. **Clone the Repository**
```bash
git clone https://github.com/yourusername/Diabetes-Detection.git
cd Diabetes-Detection
```

2. **Install Dependencies**
```bash
pip install -r requirements.txt
```

3. **Run the Application**
```bash
python app.py
```

4. **Access the Application**
Open your web browser and navigate to:
```
http://localhost:5000
```

## Project Structure
```
Diabetes-Detection/
├── data/
│   └── Diabetes-dataset_FS.csv    # Feature-selected dataset
├── static/
│   └── css/
│       └── style.css              # Custom styling
├── templates/
│   ├── base.html                  # Base template
│   └── index.html                 # Main page
├── app.py                         # Flask application
└── requirements.txt               # Dependencies
```

## How to Use

1. Fill in the required health metrics:
   - Glucose Level
   - Blood Pressure
   - Insulin Level
   - BMI (Body Mass Index)
2. Click the "Predict" button
3. View your results with confidence score
4. Get instant risk assessment

## Model Information

- Algorithm: Random Forest Classifier
- Features: 4 key health metrics
- Training Data: National Institute of Diabetes and Digestive and Kidney Diseases dataset
- Preprocessing: Standard scaling of input features

## Dependencies

Core requirements:
- Flask
- NumPy
- Pandas
- Scikit-learn
- Werkzeug
- Jinja2

## Support

For support or bug reports, please open an issue in the repository.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Dataset provided by the National Institute of Diabetes and Digestive and Kidney Diseases
- UI Design inspired by modern healthcare applications
- Special thanks to all contributors

---
