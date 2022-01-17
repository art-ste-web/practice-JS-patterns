#!C:\Users\AVS\AppData\Local\Programs\Python\Python310\python.exe
print("Content-Type: text/html\n")
txt = 'hello world'
print ('<h1>' + txt + '</h1>')


import mysql.connector

try:
    connection = mysql.connector.connect(host='localhost',
                                         database='py-test',
                                         user='root',
                                         password='')

    sql_select_Query = "SELECT * from users"
    cursor = connection.cursor()
    cursor.execute(sql_select_Query)
    # get all records
    records = cursor.fetchall()
    print("Total number of rows in table: ", cursor.rowcount)

    print("\nPrinting each row", "<br>")
    for row in records:
        print("Id = ", row[0],)
        print("Name = ", row[1])
        print("Age  = ", row[2])
        print("Role  = ", row[3], "\n", '<br>')

    cursor.execute('''
                INSERT INTO users (id, name, age, role)
                VALUES
                (4,'Anfisa', 3, 'cat')
                
                ''')
    connection.commit()

except mysql.connector.Error as e:
    print("Error reading data from MySQL table", e)
finally:
    if connection.is_connected():
        connection.close()
        cursor.close()
        print("MySQL connection is closed")