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
