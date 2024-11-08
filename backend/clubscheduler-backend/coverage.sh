# Run: sh tests.sh
# inspect index.html in htmlcov to see code coverage

coverage run manage.py test
coverage html