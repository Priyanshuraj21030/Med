from flask import Flask, render_template, request, session, redirect, url_for, jsonify
from flask_babel import Babel, get_locale
import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestClassifier
import os

app = Flask(__name__)
app.secret_key = 'your-secret-key-here'  # Required for session management

# Load and prepare the model
def load_model():
    try:
        # Get the absolute path to the data directory
        base_dir = os.path.dirname(os.path.abspath(__file__))
        data_path = os.path.join(base_dir, 'data', 'Diabetes-dataset_FS.csv')
        
        print(f"Trying to load dataset from: {data_path}")
        
        if not os.path.exists(data_path):
            raise FileNotFoundError(f"Dataset not found at {data_path}")
        
        data = pd.read_csv(data_path)
        print(f"Successfully loaded dataset from: {data_path}")
        
        print("Dataset columns:", data.columns.tolist())  # Debug print
        
        # Prepare features - using the columns from your _FS (Feature Selected) dataset
        feature_columns = ['Glucose', 'BloodPressure', 'Insulin', 'BMI']
        X = data[feature_columns]
        y = data['Outcome']
        
        # Split and scale data
        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
        scaler = StandardScaler()
        X_train_scaled = scaler.fit_transform(X_train)
        
        # Train model
        model = RandomForestClassifier(n_estimators=100, random_state=42)
        model.fit(X_train_scaled, y_train)
        
        return model, scaler
    except Exception as e:
        print(f"Error loading model: {str(e)}")
        print(f"Current working directory: {os.getcwd()}")
        raise

# Initialize model and scaler
try:
    model, scaler = load_model()
except Exception as e:
    print(f"Failed to initialize model: {str(e)}")
    # You might want to exit here or handle the error appropriately
    raise

# Supported languages
LANGUAGES = {
    'en': 'English',
    'hi': 'हिंदी',
    'es': 'Español'
}

def get_locale():
    if 'language' in session:
        return session['language']
    return request.accept_languages.best_match(LANGUAGES.keys())

# Initialize Babel with the locale selector
babel = Babel(app, locale_selector=get_locale)

# Make get_locale available to templates
@app.context_processor
def utility_processor():
    return {
        'get_locale': get_locale,
        'LANGUAGES': LANGUAGES
    }

@app.route('/')
@app.route('/diabetes')
def home():
    return render_template('index.html')

@app.route('/set-language/<language>')
def set_language(language):
    if language in LANGUAGES:
        session['language'] = language
    return redirect(url_for('home'))

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get form data
        features = np.array([
            float(request.form['glucose']),
            float(request.form['bloodPressure']),
            float(request.form['insulin']),
            float(request.form['bmi'])
        ]).reshape(1, -1)
        
        # Scale features
        features_scaled = scaler.transform(features)
        
        # Make prediction
        prediction = model.predict(features_scaled)
        probability = model.predict_proba(features_scaled)
        
        # Format response
        prediction_text = "High Risk" if prediction[0] == 1 else "Low Risk"
        prob_percentage = probability[0][1] * 100
        
        result = f"{prediction_text} of Diabetes (Confidence: {prob_percentage:.1f}%)"
        
        return jsonify({
            'success': True,
            'prediction': result
        })
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 400

if __name__ == '__main__':
    app.run(debug=True, port=5001, host='127.0.0.1') 