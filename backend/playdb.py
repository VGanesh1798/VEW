import psycopg2

def driver():
    connection = psycopg2.connect(user = "postgres",
                                host = "localhost",
                                port = "5432",
                                database = "music")
    return connection

def playsearch(u, p, t):
    connection = driver()
    cursor = connection.cursor()
    cursor.execute("""select userid, pltitle from playlist
                    where (userid like '{0}%' or '{0}' = '') and
                    (pltitle like '{1}%' or '{1}' = '') and
                    (tag like '{2}%' or '{2}' = '');"""
                    .format(u, p, t))
    records = cursor.fetchall()
    cursor.close()
    connection.close()
    return records

def playget(u, p):
    connection = driver()
    cursor = connection.cursor()
    cursor.execute("""select tag from playlist where 
                    userid = '{0}' and pltitle = '{1}';"""
                    .format(u, p))
    record = cursor.fetchall()
    cursor.close()
    connection.close()
    return record

def playsongs(u, p):
    connection = driver()
    cursor = connection.cursor()
    cursor.execute("""select songname, releasename,
                    a.id, name from includes as i, artist as a where 
                    i.userid = '{0}' and i.pltitle = '{1}'
                    and a.id = i.id;"""
                    .format(u, p))
    records = cursor.fetchall()
    cursor.close()
    connection.close()
    return records