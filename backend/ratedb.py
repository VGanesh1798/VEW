import psycopg2

def driver():
    connection = psycopg2.connect(user = "postgres",
                                host = "localhost",
                                port = "5432",
                                database = "music")
    return connection

def getrate(i, n):
    connection = driver()
    cursor = connection.cursor()
    cursor.execute("""select avg(rating) from rates where
                    id = {0} and releasename = '{1}';"""
                    .format(i, n))
    
    records = cursor.fetchall()
    cursor.close()
    connection.close()
    return records

def checkrate(u, i, n):
    connection = driver()
    cursor = connection.cursor()
    cursor.execute("""select rating from rates where
                    userid = '{0}' and releasename = '{1}' and 
                    id = {2};""".format(u, n, i))
    record = cursor.fetchall()
    cursor.close()
    connection.close()
    return record

def addrate(u, i, n, r):
    connection = driver()
    cursor = connection.cursor()
    cursor.execute("""insert into rates values('{0}', '{1}', {2}, {3});"""
                    .format(u, n, i, r))

    cursor.close()
    connection.commit()
    connection.close()
    return

def artrate(i):
    connection = driver()
    cursor = connection.cursor()
    cursor.execute("select avg(rating) from rates where id={0};".format(i))
    record = cursor.fetchall()
    cursor.close()
    connection.close()
    return record