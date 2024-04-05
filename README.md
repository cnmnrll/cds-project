# CDS Project

### Setting up the Python Environment

1. Install Python 3 if you haven't already.

2. Open a terminal or command prompt in the project directory.

3. Change directory to backend
   ```bash
    cd backend
    ```
4. Create a virtual environment using `venv`:
    ```bash
    python -m venv env
    ```

5. Activate the virtual environment:
    - On Windows:
    ```bash
    env\Scripts\activate
    ```
    - On Unix or Linux:
    ```bash
    source env/bin/activate
    ```

6. Install the required packages using `pip`:
    ```bash
    pip install -r requirements.txt
    ```
    This may take a while.

### To run the backend server
1. To run the app:
    ```bash
    python app.py
    ```
2. The server will be running at http://localhost:5000
