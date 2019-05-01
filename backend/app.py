from flask import Flask, jsonify, request
import psycopg2
from json import *
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)

app.config['DEBUG'] = True

connection = psycopg2.connect(user = "vasu",
                                password = "1798",
                                host = "localhost",
                                port = "5432",
                                database = "testdb")

cursor = connection.cursor()
selector = "select * from users"

cursor.execute(selector)
records = cursor.fetchall()
for row in records:
    print("ID = ", row[0],)
    print("Name = ", row[1], '\n')

@app.route('/')
def hello():
    r = {'jack': 4098, 'sape': 4139}
    print(jsonify(r))
    return jsonify(r)

@app.route('/login', methods=['POST', 'GET'])
def login():
    if request.method == 'POST':
        r = {'jac': 4098, 'snake': 4139}
        
        print(jsonify(r))
        return jsonify(request.form)
    else:
        r = {'jac': 4098, 'sape': 4139}
        print(jsonify(r))
        return jsonify(r)

if __name__ == "__main__":
    app.run()