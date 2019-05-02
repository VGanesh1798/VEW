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
    r = {'jack': 4098, 'sape': 4139}
    print(jsonify(r))
    return jsonify(r)

@app.route('/login', methods=['POST', 'GET'])
def login():
    if request.method == 'POST':
        username = request.get_json()['username']
        password = request.get_json()['password']
        records = db.test()

        for row in records:
            print('User is: ' + row[0] + '\nPassword is: ' + str(row[1]))
            if username in row and int(password) in row:
                print('I Worked and I\'m waiting')
                return 'Success'
            
    else:
        return 'F'

if __name__ == "__main__":
    app.run()