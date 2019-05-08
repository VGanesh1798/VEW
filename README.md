# VEW
Database project for CS2300

## Requirements
This project has three primary requirements: nodejs, yarn, and mariadb. Below you will find instructions for setting up the project.

### Frontend
#### Nodejs
On either Windows or Linux, simply install nodejs.

#### Yarn
On either Windows or Linux, simply install yarn. Navigate to the frontend folder and run the command `yarn` to install the required packages. After this, you can run `yarn start` in the frontend to start the frontend server on port 3000. It should automatically open in your browser.

### Backend
#### Python
Make sure you have Python3 and Pip installed. Install pipenv using `pip install pipenv` and navigate into the backend folder. Now run `pipenv install` and you should have all of the dependencies. To start the backend server, run `pipenv shell` to enter the shell. Now you can run the Python programs without errors. `python app.py` will start the backend server at port 5000.

#### PostgresQL
For Arch Linux specifically, install PostgresQL using Pacman and then switch to the postgres user using `sudo -iu postgres`. After this, run `initdb -D /var/lib/postgres/data` to initialize the database cluster. Finally, run `sudo systemctl start postgresql.service` and `sudo systemctl enable postgresql.service` to automatically have the psotgres server run at port 5432 on startup.

If you want to use the DBMS as yourself, switch to the postgres user and add yourself (your Linux username) as a superuser using `createuser SAMPLE_NAME`. Then you can also create a new database using `createdb DB_NAME`. 

To actually load into a database, run `psql -d DB_NAME` to enter the DBMS shell. In here you can do whatever SQL you want.

If you want to import the SQL file to kickstart the database, navigate to the backend folder and use `psql DB_NAME < music.sql`. Likewise if you want to export the database into an sql file, simply run `psql DB_NAME > SQL_FILE.sql`.

For Windows I have no clue how to setup PostgresQL. Look it up online I guess, or until I figure it out you're on your own.





