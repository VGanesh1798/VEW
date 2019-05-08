import psycopg2

def driver():
    connection = psycopg2.connect(user = "postgres",
                                host = "localhost",
                                port = "5432",
                                database = "music")
    return connection


def listsong(i, r):
    connection = driver()
    cursor = connection.cursor()
    cursor.execute("""select id, releasename, songname from song where
                    id = {0} and releasename='{1}';""".format(i, r))
    
    records = cursor.fetchall()
    cursor.close()
    connection.close()
    return records

def songsearch(a, r, s, g, y):
    connection = driver()
    cursor = connection.cursor()
    cursor.execute("""select a.ID, name, releasename, songname
                    from song as s, artist as a where
                    (s.id = a.id) and 
                    (a.name like '{0}%' or '{0}' = '') and
                    (s.releasename like '{1}%' or '{1}' = '') and
                    (s.songname like '{2}%' or '{2}' = '') and
                    (s.genre like '{3}%' or '{3}' = '') and
                    (s.releaseyear = {4} or {4} = '0');"""
                    .format(a, r, s, g, y))
    records = cursor.fetchall()
    cursor.close()
    connection.close()
    return records

def songlook(i, r, s):
    connection = driver()
    cursor = connection.cursor()
    cursor.execute("""select * from song where id = {0} and
                    releasename = '{1}' and songname = '{2}';"""
                    .format(i, r, s))
    
    records = cursor.fetchall()
    cursor.close()
    connection.close()
    return records

def feats(i, r, s):
    connection = driver()
    cursor = connection.cursor()
    cursor.execute("""select a.id, name from songfeature as f, artist as a
                    where f.feature = a.id and
                    f.id = {0} and f.releasename = '{1}' and
                    f.songname = '{2}';""".format(i, r, s))
    
    records = cursor.fetchall()
    cursor.close()
    connection.close()
    return records

def addsong(i, r, s, g, l, y):
    connection = driver()
    cursor = connection.cursor()
    cursor.execute("""insert into song values
                    ({0}, '{1}', '{2}', '{3}', {4}, null, {5});"""
                    .format(i, r, s, g, l, y))
    cursor.close()
    connection.commit()
    connection.close()
    return

def delsong(i, r, s):
    connection = driver()
    cursor = connection.cursor()
    cursor.execute("""delete from song where
                    id = {0} and releasename = '{1}' and
                    songname = '{2}';""".format(i, r, s))
    cursor.close()
    connection.commit()
    connection.close()
    return

def addfeat(i, r, s, f, y):
    connection = driver()
    cursor = connection.cursor()
    cursor.execute("""insert into songfeature values
                    ({0}, '{1}', '{2}', {3}, {4});"""
                    .format(i, r, s, f, y))
    cursor.close()
    connection.commit()
    connection.close()
    return
