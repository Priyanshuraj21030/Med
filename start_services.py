import subprocess
import time
import os
import requests
from concurrent.futures import ThreadPoolExecutor

def wait_for_service(url, name, timeout=60):
    start_time = time.time()
    while time.time() - start_time < timeout:
        try:
            response = requests.get(url)
            if response.status_code == 200:
                print(f"{name} is up and running at {url}")
                return True
            else:
                print(f"{name} returned status code {response.status_code}")
        except requests.exceptions.ConnectionError:
            print(f"Waiting for {name} to start...")
            time.sleep(1)
    print(f"Timeout waiting for {name} to start")
    return False

def start_services():
    processes = []
    
    try:
        # Start Breast Cancer detection service
        print("Starting Breast Cancer detection service...")
        breast_cancer = subprocess.Popen(['python', 'breast/app.py'], cwd='.')
        processes.append(('Breast Cancer', breast_cancer))
        
        # Start Diabetes detection service
        print("Starting Diabetes detection service...")
        diabetes = subprocess.Popen(['python', 'Diabetes-Detection/app.py'], cwd='.')
        processes.append(('Diabetes', diabetes))

        # Wait for services to be ready
        with ThreadPoolExecutor() as executor:
            services = [
                ('http://127.0.0.1:5000', 'Breast Cancer Service'),
                ('http://127.0.0.1:5001/diabetes', 'Diabetes Service')
            ]
            results = list(executor.map(lambda x: wait_for_service(*x), services))

        if all(results):
            # Start React frontend
            print("Starting React frontend...")
            frontend = subprocess.Popen(['npm', 'run', 'dev'], cwd='.')
            processes.append(('Frontend', frontend))
            
            while True:
                time.sleep(1)
                
    except KeyboardInterrupt:
        print("\nShutting down services...")
        for name, process in processes:
            print(f"Terminating {name}...")
            process.terminate()
            process.wait()
        print("All services stopped")

if __name__ == "__main__":
    start_services() 