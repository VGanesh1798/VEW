import psycopg2


def test():
    connection = psycopg2.connect(user = "postgres",
                                host = "localhost",
                                port = "5432",
                                database = "test2")

    cursor = connection.cursor()
    selector = "select * from users"

    cursor.execute(selector)
    records = cursor.fetchall()
    return records