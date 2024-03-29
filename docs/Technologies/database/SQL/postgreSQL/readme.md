# PostgreSQL

- Object - RDBMS
- Free and open-source software (FOSS)
- Started at the University of California, Berkeley
- ACID compliant and transactional

## Other features

- materialized and updatable views
- triggers
- functions and stored procedure support
- runs on every major OS (and in docker)

## Why?

- easy to run locally
- supports a large section of ANSI standard SQL
- supports stored procedures
- solid security model

## Docker

### Install

`docker pull postgres`

### Build

- example 1
  `docker run --name postgresql -e POSTGRES_USER=root -e POSTGRES_PASSWORD=password -v $(pwd):/app -w='/app' -p 5432:5432 -d postgres`
- example 2
  `docker run --name postgresql -e POSTGRES_PASSWORD=password -d -v $(pwd):/app -w='/app' -p 5432:5432 postgres`

### Run queries

- example 1
  `docker exec -i postgresql psql -d postgres -a -f init.sql`
- example 2
  `psql -h localhost -U postgres -a -f init.sql`

## Install on mac

> brew install postgresql

## View list of services status

> brew services list

## Database server

### Start

> brew services start postgresql

### Stop

> brew services stop postgresql

### Restart

> brew services restart postgresql

## Create user if required (default is current terminal user)

> createuser --interactive --pwprompt

## Delete user

> dropuser username

## List database

> psql -l

## Delete database

> dropdb "database_name"

## Create database

### If have permission to create database

> createdb database_name

### Create database with specified owner

> createdb -O username database_name

## Connect to database (must connect to do more)

- Connect using default user
  > psql -d database_name
- Connect using a specific user
  > psql -d database_name -U username

## Run sql file in command line

> psql -d myDataBase -a -f myInsertFile

## After connecting to database

### View command help

> \\?

### Check connection information

> \conninfo

- You are connected to database "postgres" as user "username" via socket in "/tmp" at port "5432".

### List all users

> \du

### Create user

> create role new_user with login password 'password';

### Alter privileges of user

> alter role username new_privilege;

### Grant permission to user

- Grant all permissions
  > grant all privileges on {type} {type_name} to {username}
  - type = database, table, etc.
- Grant specific permission
  > grant {permissions} on {type} {type_name} to {username};
  - for type of permissions refer to https://www.postgresql.org/docs/9.1/sql-grant.html

### Revoke permission from user

- Revoke all permissions
  > revoke all privileges on {type} {type_name} from {username}
  - type = DATABASE, TABLE, etc.
- Revoke specific permission
  > revoke {permissions} on {type} {type_name} from {username};

### List available databases

> \list

### Create database

> create database database_name;

### Delete database

> drop database database_name;

### Connect to a database

- Method 1
  > \connect database_name
- Method 2
  > \c database_name

### Show data directory

> show data_directory;

### List available tables in current database

> \dt

### Show table fields

> \d tableName

### Show all data inside the table

> SELECT \* FROM tableName;
