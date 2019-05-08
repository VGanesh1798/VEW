from flask import Flask, jsonify, request
import psycopg2
from json import *
from flask_cors import CORS, cross_origin
import labdb, userdb, artdb, reldb, songdb, ratedb, playdb

app = Flask(__name__)
CORS(app)
xyzname = "Guest"

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
                        global xyzname
                        xyzname = username
                        print('I Worked and I\'m waiting')
                        return jsonify(xyzname)   
    else:
        user = xyzname
        records = playdb.getlists(user)
        records.append(user)
        return jsonify(records)

@app.route('/logout', methods=['POST'])
def logout():
        global xyzname
        xyzname = "Guest"
        return "Logged out"

@app.route('/rate', methods=['GET', 'POST'])
def rate():
        if request.method == 'GET':
                return jsonify(xyzname)

@app.route('/add', methods=['GET', 'POST'])
def addsong():
        if request.method == 'GET':
                user = xyzname
                records = playdb.getlists(user)
                records.append(user)
                return jsonify(records)
        else:
                user = request.get_json()['user']
                title = request.get_json()['title']
                song = request.get_json()['song']
                rel = request.get_json()['rel']
                id =  request.get_json()['id']
                year = request.get_json()['date']
                print(user, title, song, rel, id, year)
                playdb.addsong(user, title, song, rel, id, year) 
                return "Hi"


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

@app.route('/artbyid', methods=['POST'])
def artbyid():
        id = request.get_json()['id']
        record = artdb.artbyid(id)

        return jsonify(record)

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
                record.append(labdb.putsout(name))
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

@app.route('/song', methods=['POST'])
def songsearch():
        art = request.get_json()['id']
        rel = request.get_json()['rel']
        song = request.get_json()['song']
        genre = request.get_json()['genre']
        year = request.get_json()['year'] if request.get_json()['year'] != '' else "0"

        records = songdb.songsearch(art, rel, song, genre, year)
        return jsonify(records)

@app.route('/songlook', methods=['POST'])
def songlook():
        id = request.get_json()['id']
        rel = request.get_json()['rel']
        song = request.get_json()['song']

        records = songdb.songlook(id, rel, song)
        print(id, rel, song, records)
        return jsonify(records)

@app.route('/feats', methods=['POST'])
def feats():
        id = request.get_json()['id']
        rel = request.get_json()['rel']
        song = request.get_json()['song']

        print(id, rel, song, "Hi")

        records = songdb.feats(id, rel, song)
        return jsonify(records)

@app.route('/getrate', methods=['POST'])
def getrate():
        id = request.get_json()['id']
        name = request.get_json()['name']
        print(id, name)
        records = ratedb.getrate(id, name)
        print(records)
        return jsonify(records)

@app.route('/checkrate', methods=['POST'])
def checkrate():
        user = request.get_json()['user']
        id = request.get_json()['id']
        name = request.get_json()['name']
        print(user, id, name)
        records = ratedb.checkrate(user, id, name)
        return jsonify(records)

@app.route('/addrate', methods=['POST'])
def addrate():
        user = request.get_json()['user']
        id = request.get_json()['id']
        name = request.get_json()['name']
        rate = float(request.get_json()['rate'])
        print(user, id, name, rate)
        ratedb.addrate(user, id, name, rate)
        return "Success"

@app.route('/artrate', methods=['POST'])
def artrate():
        id = request.get_json()['id']
        record = ratedb.artrate(id)
        return jsonify(record)

@app.route('/playlist', methods=['POST'])
def playsearch():
        user = request.get_json()['user']
        title = request.get_json()['title']
        tag = request.get_json()['tag']
        records = playdb.playsearch(user, title, tag)
        return jsonify(records)

@app.route('/playget', methods=['POST'])
def playget():
        user = request.get_json()['user']
        title = request.get_json()['title']
        print(user, title, "HO")
        records = playdb.playget(user, title)
        records.append(playdb.playsongs(user, title))
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
        date = request.get_json()['year'] if request.get_json()['year'] != '' else 'null'
        town = request.get_json()['town'] 
        style = request.get_json()['style']
        instrument = request.get_json()['instrument']

        artdb.add(aid, name, date, town, style, instrument)

        return "Hello"

@app.route('/remart', methods=['POST'])
def remart():
        id = request.get_json()['id'] if request.get_json()['id'] != '' else 'null'
        name = request.get_json()['name']
        artdb.rem(id, name)
        return "Success"

@app.route('/userchange', methods=['POST'])
def changename():
        old = request.get_json()['old']
        new = request.get_json()['new']
        userdb.changename(old, new)
        return "Done"

@app.route('/addplay', methods=['POST'])
def addplay():
        user = request.get_json()['user']
        title = request.get_json()['title']
        tag = request.get_json()['tag']
        playdb.addplay(user, title, tag)
        return "Done"

@app.route('/addaward', methods=['POST'])
def addaward():
        id = request.get_json()['id']
        name = request.get_json()['award']
        year = request.get_json()['ayear']
        artdb.addaward(id, name, year)
        return "Added"

@app.route('/addlab', methods=['POST'])
def addlab():
        name = request.get_json()['name']
        sup = request.get_json()['super']
        ceo = request.get_json()['ceo']
        year = request.get_json()['year'] if request.get_json()['year'] != '' else 'null'
        labdb.addlab(name, sup, ceo, year)
        return "Done"

@app.route('/addrel', methods=['POST'])
def addrel():
        id = request.get_json()['id']
        rel = request.get_json()['rel']
        genre = request.get_json()['genre']
        gtype =  request.get_json()['type']
        year =  request.get_json()['year'] if request.get_json()['year'] != '' else 'null'
        label =  request.get_json()['label']
        reldb.addrel(id, rel, genre, gtype, year, label)
        return "Finished"

@app.route('/addsong', methods=['POST'])
def sadd():
        id = request.get_json()['id']
        rel = request.get_json()['rel']
        song = request.get_json()['song']
        genre = request.get_json()['genre']
        length = request.get_json()['length']
        year = request.get_json()['year'] if request.get_json()['year'] != '' else 'null'
        songdb.addsong(id, rel, song, genre, length, year)
        return "Added"

@app.route('/addfeat', methods=['POST'])
def addfeat():
        id = request.get_json()['aid']
        rel = request.get_json()['rel']
        song = request.get_json()['song']
        feat = request.get_json()['fid']
        year = request.get_json()['year']
        songdb.addfeat(id, rel, song, feat, year)
        return "Featured"

@app.route('/delsong', methods=['POST'])
def delsong():
        id = request.get_json()['id']
        rel = request.get_json()['rel']
        song = request.get_json()['song']
        songdb.delsong(id, rel, song)
        return "Removed"

@app.route('/delrel', methods=['POST'])
def delrel():
        id = request.get_json()['id']
        rel = request.get_json()['rel']
        reldb.delrel(id, rel)
        return "Finished"

@app.route('/dellab', methods=['POST'])
def dellab():
        name = request.get_json()['name']
        labdb.dellab(name)
        return "Done"

@app.route('/delplay', methods=['POST'])
def delplay():
        title = request.get_json()['title']
        playdb.delplay(title)
        return "Done"

if __name__ == "__main__":
        app.run()