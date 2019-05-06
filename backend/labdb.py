import psycopg2


def driver():
    connection = psycopg2.connect(user = "postgres",
                                host = "localhost",
                                port = "5432",
                                database = "music")
    return connection


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


def labelget(n):
    connection = driver()
    cursor = connection.cursor()
    cursor.execute("select * from label as l where l.labelname = '{0}';".format(n))

    record = cursor.fetchall()
    print(record)
    cursor.close()
    connection.close()
    return record


def putsout(l):
    connection = driver()
    cursor = connection.cursor()
    cursor.execute("""select releasename, p.id, name from label as l, putsout as p, artist as a where
                    l.labelname = '{0}' and p.labelname = '{0}' and
                    p.id = a.id;"""
                    .format(l))
    
    records = cursor.fetchall()
    cursor.close()
    connection.close()
    return records