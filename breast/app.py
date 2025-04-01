from flask import Flask, render_template, request
import numpy as np
import pandas as pd
from implementation import randorm_forest_test, random_forest_train, random_forest_predict
from time import time
import os

app = Flask(__name__, 
	template_folder='templates',
	static_folder='static'
)
app.url_map.strict_slashes = False

# Load dataset for reference values
try:
	possible_paths = [
		'Breast Cancer Data.csv',
		os.path.join('breast', 'dataset', 'Breast Cancer Data.csv'),
		os.path.join('dataset', 'Breast Cancer Data.csv'),
	]

	df = None
	for path in possible_paths:
		if os.path.exists(path):
			print(f"Found dataset at: {path}")
			df = pd.read_csv(path)
			break
	
	if df is None:
		raise FileNotFoundError("Could not find the dataset file")

	# Extract feature names and ranges
	feature_columns = df.columns[2:32]  # Columns 2-31 are features
	feature_ranges = {}
	for i, col in enumerate(feature_columns, 1):
		feature_ranges[f'value{i}'] = {
			'name': col,
			'min': df[col].min(),
			'max': df[col].max(),
			'mean': df[col].mean()
		}
except Exception as e:
	print(f"Error loading dataset: {e}")
	df = None
	feature_ranges = {}

@app.route('/')
def index():
	return render_template('home.html', ranges=feature_ranges)

@app.route('/predict', methods=['POST']) 
def predict():
	try:
		# Collect input values
		data_points = []
		for i in range(1, 31):
			value = float(request.form[f'value{i}'])
			data_points.append(value)
		
		# Convert to numpy array
		data_np = np.array(data_points, dtype=float).reshape(1, -1)
		
		# Make prediction
		start_time = time()
		out, acc, t = random_forest_predict(clf, data_np)
		end_time = time()

		# Format output
		output = 'Malignant' if out == 1 else 'Benign'
		
		# Calculate accuracy and time
		accuracy_val = acc[0][0] if acc[0][0] > acc[0][1] else acc[0][1]
		processing_time = end_time - start_time

		return render_template('result.html', 
							 output=output,
							 accuracy=accuracy_val * 100,
							 time=processing_time)

	except Exception as e:
		return render_template('result.html', error=f"Error during analysis: {str(e)}")

if __name__=='__main__':
	global clf 
	clf = random_forest_train()
	randorm_forest_test(clf)
	app.run(debug=True, port=5000)  # Explicitly set port to 5000

