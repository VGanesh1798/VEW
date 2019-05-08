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


def deluser(n):
    connection = driver()
    cursor = connection.cursor()
    cursor.execute("delete from users where userid = '{0}';".format(n))

    cursor.close()
    connection.commit()
    connection.close()
    return

def changename(o, n):
    connection = driver()
    cursor = connection.cursor()
    cursor.execute("""update users set userid='{0}' where
                    userid = '{1}';""".format(n, o))
    cursor.close()
    connection.commit()
    connection.close()
    return
