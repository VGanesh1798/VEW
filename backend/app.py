from flask import Flask, jsonify, request
import psycopg2
from json import *
from flask_cors import CORS, cross_origin
import db

app = Flask(__name__)
CORS(app)

app.config['DEBUG'] = True

@app.route('/')
def hello():
    return 'Connected to Flask'

@app.route('/login', methods=['POST', 'GET'])
def login():
    if request.method == 'POST':
        username = request.get_json()['username']
        password = request.get_json()['password']
        records = db.login()
        for row in records:
            print('User is: ' + row[0] + '\nPassword is: ' + row[1])
            if username in row and password in row:
                print('I Worked and I\'m waiting')
                return 'Success'   
    else:
        return 'F'

@app.route('/create', methods=['POST', 'GET'])
def create():
    if request.method == 'POST':
        username = request.get_json()['username']
        password = request.get_json()['password']
        db.create(username, password)
        return username

@app.route('/artist', methods=['POST', 'GET'])
def search():
    if request.method == 'POST':
        name = request.get_json()['name']
        date = request.get_json()['year'] if request.get_json()['year'] != '' else "0"
        town = request.get_json()['town']
        style = request.get_json()['style']
        instrument = request.get_json()['instrument']

        records = db.artistsearch(name, date, town, style, instrument)
        print(records)
        
        return jsonify(records)


if __name__ == "__main__":
    app.run()