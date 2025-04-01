import numpy as np
import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import LabelEncoder, StandardScaler
from sklearn.metrics import accuracy_score
from time import time
import os

def random_forest_train():
	try:
		# Try multiple possible dataset locations
		possible_paths = [
			'Breast Cancer Data.csv',  # Current directory
			os.path.join('breast', 'dataset', 'Breast Cancer Data.csv'),  # breast/dataset directory
			os.path.join('dataset', 'Breast Cancer Data.csv'),  # dataset directory
		]

		dataset = None
		for path in possible_paths:
			if os.path.exists(path):
				print(f"Found dataset at: {path}")
				dataset = pd.read_csv(path)
				break
		
		if dataset is None:
			raise FileNotFoundError("Could not find the dataset file in any expected location")

		X = dataset.iloc[:, 2:32].values
		y = dataset.iloc[:, 1].values

		# Encoding categorical data
		labelencoder_X_1 = LabelEncoder()
		y = labelencoder_X_1.fit_transform(y)

		# Splitting the dataset
		global X_test, y_test
		from sklearn.model_selection import train_test_split
		X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=0)

		# Feature Scaling
		global sc
		sc = StandardScaler()
		X_train = sc.fit_transform(X_train)
		X_test = sc.transform(X_test)

		clf = RandomForestClassifier(n_estimators=100)
		clf.fit(X_train, y_train)

		return clf

	except Exception as e:
		print(f"Error in random_forest_train: {str(e)}")
		raise

def randorm_forest_test(clf):
	t = time()
	output = clf.predict(X_test)
	acc = accuracy_score(y_test, output) 
	print("The accuracy of testing data: ", acc)
	print("The running time: ", time()-t)

def random_forest_predict(clf, inp):
	t = time()
	inp = sc.transform(inp)
	output = clf.predict(inp)
	acc = clf.predict_proba(inp)
	processing_time = time()-t
	print("The running time: ", processing_time)

	return output, acc, processing_time