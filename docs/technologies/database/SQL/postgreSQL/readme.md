# PostgreSQL

## Install on mac

&gt; `brew install postgresql`

## View list of services status

&gt; `brew services list`

## Database server

### Start

&gt; `brew services start postgresql`

### Stop

&gt; `brew services stop postgresql`

### Restart

&gt; `brew services restart postgresql`

## Create user if required (default is current terminal user)

&gt; `createuser --interactive --pwprompt`

## Delete user

&gt; `dropuser username`

## List database

&gt; `psql -l`

## Delete database

&gt; `dropdb "database_name"`

## Create database

### If have permission to create database

&gt; `createdb database_name`

### Create database with specified owner

&gt; `createdb -O username database_name`

## Connect to database (must connect to do more)

- Connect using default user
  &gt; `psql -d database_name`
- Connect using a specific user
  &gt; `psql -d database_name -U username`

## Run sql file in command line

&gt; `psql -d myDataBase -a -f myInsertFile`

## After connecting to database

### View command help

&gt; `\\?`

### Check connection information

&gt; `\conninfo`

- You are connected to database "postgres" as user "username" via socket in "/tmp" at port "5432".

### List all users

&gt; `\du`

### Create user

&gt; `create role new_user with login password 'password';`

### Alter privileges of user

&gt; `alter role username new_privilege;`

### Grant permission to user

- Grant all permissions
  &gt; `grant all privileges on {type} {type_name} to {username}`
  - type = database, table, etc.
- Grant specific permission
  &gt; `grant {permissions} on {type} {type_name} to {username};`
  - for type of permissions refer to https://www.postgresql.org/docs/9.1/sql-grant.html

### Revoke permission from user

- Revoke all permissions
  &gt; `revoke all privileges on {type} {type_name} from {username}`
  - type = DATABASE, TABLE, etc.
- Revoke specific permission
  &gt; `revoke {permissions} on {type} {type_name} from {username};`

### List available databases

&gt; `\list`

### Create database

&gt; `create database database_name;`

### Delete database

&gt; `drop database database_name;`

### Connect to a database

- Method 1
  &gt; `\connect database_name`
- Method 2
  &gt; `\c database_name`

### Show data directory

&gt; `show data_directory;`

### List available tables in current database

&gt; `\dt`

### Show table fields

&gt; `\d tableName`

### Show all data inside the table

&gt; `SELECT \* FROM tableName;`
