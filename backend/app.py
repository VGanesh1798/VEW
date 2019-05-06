from flask import Flask, jsonify, request
import psycopg2
from json import *
from flask_cors import CORS, cross_origin
import labdb, userdb, artdb, reldb, songdb

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
        records = userdb.login()
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
        userdb.create(username, password)
        return username

@app.route('/artist', methods=['POST', 'GET'])
def artsearch():
        if request.method == 'POST':
                name = request.get_json()['name']
                date = request.get_json()['year'] if request.get_json()['year'] != '' else "0"
                town = request.get_json()['town']
                style = request.get_json()['style']
                instrument = request.get_json()['instrument']

                records = dict(artdb.artistsearch(name, date, town, style, instrument))        
                return jsonify(records)

@app.route('/label', methods=['POST', 'GET'])
def labsearch():
        if request.method == 'POST':
                name = request.get_json()['name']
                sup = request.get_json()['super']
                ceo = request.get_json()['ceo']
                date = request.get_json()['year'] if request.get_json()['year'] != '' else "0"

                records = dict(labdb.labelsearch(name, sup, ceo, date))
                return jsonify(records)

@app.route('/artistlook', methods=['POST', 'GET'])
def sender():
        if request.method == 'POST':
                id = request.get_json()['id']

                record = artdb.artistget(id)
                record.append(reldb.relget(id))
                record.append(artdb.award(id))
                return(jsonify(record))

@app.route('/labget', methods=['POST'])
def sendlab():
        if request.method == 'POST':
                name = request.get_json()['id']

                record = labdb.labelget(name)
                return(jsonify(record))

@app.route('/relsearch', methods=['POST'])
def relsearch():
        rid = request.get_json()['id']
        name = request.get_json()['name']
        genre = request.get_json()['genre']
        rtype = request.get_json()['type']
        date = request.get_json()['year'] if request.get_json()['year'] != '' else "0"

        records = reldb.relsearch(rid, name, genre, rtype, date)
        return jsonify(records)

@app.route('/rellook', methods=['POST'])
def relload():
        id = request.get_json()['id']
        name = request.get_json()['name']
        rel = request.get_json()['release']
        
        records = reldb.relload(id, name, rel)
        records.append(songdb.listsong(id, rel))
        print(records)
        return jsonify(records)

@app.route('/usergone', methods=['POST'])
def deluser():
        name = request.get_json()['name']
        print(name)
        userdb.deluser(name)
        return "Success"

@app.route('/add/artist', methods=['POST'])
def addart():
        aid = artdb.maxid() + 1
        print(aid)
        name = request.get_json()['name']
        date = request.get_json()['year']
        town = request.get_json()['town'] 
        style = request.get_json()['style']
        instrument = request.get_json()['instrument']

        artdb.add(aid, name, date, town, style, instrument)

        return "Hello"

if __name__ == "__main__":
        app.run()