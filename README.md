# MedPred - Medical Prediction System

MedPred is an integrated medical prediction system that combines breast cancer detection and diabetes risk assessment tools using machine learning algorithms.

## Features

- **Breast Cancer Detection**: Early detection system using machine learning algorithms to analyze medical data and predict breast cancer risk
- **Diabetes Detection**: Advanced diabetes risk assessment tool using AI to analyze health parameters
- **User-Friendly Interface**: Clean and intuitive interface for both tools
- **Real-Time Analysis**: Instant predictions with accuracy metrics
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Tech Stack

### Frontend
- React
- TypeScript
- React Router
- Bootstrap
- Font Awesome

### Backend
- Python
- Flask
- Scikit-learn
- Pandas
- NumPy


## Setup and Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/MedPred.git
cd MedPred
```

2. Install dependencies:

```bash
npm install
```
3. Install Python dependencies:

```bash
pip install -r requirements.txt
```


This will start:
- React frontend on port 3000
- Breast Cancer Detection service on port 5000
- Diabetes Detection service on port 5001

## Development

To run services individually:

1. Frontend:

```bash
cd ..
npm start
```

2. Breast Cancer Detection:

```bash
cd breast
python app.py
```

3. Diabetes Detection:

```bash
cd ..
cd Diabetes-Detection
python app.py


## Environment Requirements

- Node.js >= 14.0.0
- Python >= 3.8
- npm or yarn

