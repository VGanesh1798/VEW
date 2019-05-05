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