import psycopg2


def driver():
    connection = psycopg2.connect(user = "postgres",
                                host = "localhost",
                                port = "5432",
                                database = "music")
    return connection

def login():
    connection = driver()
    cursor = connection.cursor()

    cursor.execute("select * from users;")
    records = cursor.fetchall()
    cursor.close()
    connection.close()
    return records

def create(username, password):
    connection = driver()
    cursor = connection.cursor()

    cursor.execute("insert into users values (%s, %s);", (username, password))

    cursor.close()
    connection.commit()
    connection.close()
    return "A"

def artistsearch(n, y, h, s, i):
    connection = driver()
    cursor = connection.cursor()
    cursor.execute("""select ID, name from artist as a where 
                    (a.name like '{0}%' or '{0}' = '') and 
                    (a.year = {1} or {1} = '0') and
                    (a.hometown like '{2}%' or '{2}' = '') and
                    (a.style like '{3}%' or '{3}' = '') and
                    (a.instrument like '{4}%' or '{4}' = '');"""
                    .format(n, y, h, s, i))

    records = cursor.fetchall()
    cursor.close()
    connection.close()
    return records

def labelsearch(n, s, c, y):
    connection = driver()
    cursor = connection.cursor()
    cursor.execute("""select labelname, super from label as l where
                    (l.labelname like '{0}%' or '{0}' = '') and
                    (l.super like '{1}%' or '{1}' = '') and
                    (l.ceo like '{2}%' or '{2}' = '') and
                    (l.foundingdate = {3} or {3} = '0');"""
                    .format(n, s, c, y))
    
    records = cursor.fetchall()
    cursor.close()
    connection.close()
    return records

def artistget(i):
    connection = driver()
    cursor = connection.cursor()
    cursor.execute("select * from artist as a where a.id = {0}".format(i))
    
    record = cursor.fetchall()
    print(record)
    return record

def deluser(n):
    connection = driver()
    cursor = connection.cursor()
    cursor.execute("delete from users where userid = '{0}';".format(n))

    cursor.close()
    connection.commit()
    connection.close()
    return