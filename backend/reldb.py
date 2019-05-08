import psycopg2


def driver():
    connection = psycopg2.connect(user = "postgres",
                                host = "localhost",
                                port = "5432",
                                database = "music")
    return connection


def relget(i):
    connection = driver()
    cursor = connection.cursor()
    cursor.execute("select id, releasename from releases where id={0};".format(i))

    records = cursor.fetchall()

    cursor.close()
    connection.close()
    return records

def relsearch(i, n, g, t, d):
    connection = driver()
    cursor = connection.cursor()
    cursor.execute("""select a.ID, name, releasename from releases as r, artist as a 
                    where r.id = a.id and (a.name like '{4}%' or '{4}' = '') and
                    (r.releasename like '{0}%' or '{0}' = '') and
                    (r.genre like '{1}%' or '{1}' = '') and
                    (r.releasetype like '{2}%' or '{2}' = '') and
                    (r.releaseyr = {3} or {3} = '0');"""
                    .format(n, g, t, d, i))
    
    records = cursor.fetchall()
    cursor.close()
    connection.close()
    return records


def relload(i, n, r):
    connection = driver()
    cursor = connection.cursor()
    cursor.execute("select * from releases where id = {0} and releasename = '{1}';".format(i, r))

    records = cursor.fetchall()
    cursor.close()
    connection.close()
    return records

def addrel(i, r, g, t, y, l):
    connection = driver()
    cursor = connection.cursor()
    cursor.execute("""insert into releases values 
                    ({0}, '{1}', '{2}', '{3}', null, {4});"""
                    .format(i, r, g, t, y))
    cursor.execute("""insert into putsout values
                    ('{0}', '{1}', {2});"""
                    .format(l, r, i))
    
    cursor.close()
    connection.commit()
    connection.close()
    return

def delrel(i, r):
    connection = driver()
    cursor = connection.cursor()
    cursor.execute("""delete from releases where 
                    id = {0} and releasename = '{1}';"""
                    .format(i, r))
    cursor.close()
    connection.commit()
    connection.close()
    return
