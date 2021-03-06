import psycopg2


def driver():
    connection = psycopg2.connect(user = "postgres",
                                host = "localhost",
                                port = "5432",
                                database = "music")
    return connection


def artbyid(i):
    connection = driver()
    cursor = connection.cursor()
    cursor.execute("select name from artist where id = {0};".format(i))

    record = cursor.fetchall()
    cursor.close()
    connection.close()
    return record


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


def artistget(i):
    connection = driver()
    cursor = connection.cursor()
    cursor.execute("select * from artist as a where a.id = {0};".format(i))
    
    record = cursor.fetchall()
    print(record)
    cursor.close()
    connection.close()
    return record


def award(i):
    connection = driver()
    cursor = connection.cursor()
    cursor.execute("select awardname, yearwon from artistawards where id = {0};".format(i))

    record = cursor.fetchall()
    cursor.close()
    connection.close()
    return record 

def addaward(i, n, y):
    connection = driver()
    cursor = connection.cursor()
    cursor.execute("""insert into artistawards values({0}, '{1}', {2});"""
                    .format(i, n, y))
    cursor.close()
    connection.commit()
    connection.close()
    return


def maxid():
    connection = driver()
    cursor = connection.cursor()
    cursor.execute("select max(id) from artist;")
    record = cursor.fetchall()
    cursor.close()
    connection.close()
    return record[0][0]


def add(d, n, y, h, s, i):
    connection = driver()
    cursor = connection.cursor()
    cursor.execute("insert into artist values({0}, '{1}', {2}, '{3}', '{4}', '{5}');".format(d, n, y, h, s, i))

    cursor.close()
    connection.commit()
    connection.close()
    return "Success"

def rem(i, n):
    connection = driver()
    cursor = connection.cursor()
    cursor.execute("""delete from artist where id = {0} or 
                    name = '{1}';""".format(i, n))
    
    cursor.close()
    connection.commit()
    connection.close()
    return "Success"
