# To startup backend

Make sure you are in the root directory
## Create python virtual environment
```
python -m venv .venv .
```
## Activate the virutal environment
Mac:
```
source .venv/bin/activate
```
Windows:
```
.venv/Scripts/activate
```
## Install dependencies
```
cd backend/clubscheduler-backend
pip install -r requirements.txt
```

## Django
To start backend server
```
python manage.py runserver
```
To create super user
```
python manage.py createsuperuser
```
To migrate changes to database
```
python manage.py makemigrations
python manage.py migrate
```

# To startup frontend
Make sure you are in root directory
## Install React Libraries
```
cd frontend/clubscheduler-frontend
npm install
```
## Run frontend server
```
npm start
```

