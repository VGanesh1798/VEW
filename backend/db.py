import psycopg2


def driver():
    connection = psycopg2.connect(user = "postgres",
                                host = "localhost",
                                port = "5432",
                                database = "test2")
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
                    (a.hometown = '{2}' or '{2}' = '') and
                    (a.style = '{3}' or '{3}' = '') and
                    (a.instrument = '{4}' or '{4}' = '');"""
                    .format(n, y, h, s, i))

    records = cursor.fetchall()
    cursor.close()
    connection.close()
    return records