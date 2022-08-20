# PostgreSQL Relational Database example

## how to run

- Install postgresql
  > brew install postgresql
- Start postgresql server
  > brew services start postgresql
- Create database
  > createdb database_name
- Load sql file into database
  > psql -d database_name -a -f tables.sql
- Connect to database
  > psql -d database_name
- Run queries from queries.sql by copy and paste

## Atomicity example

- open 2 terminals, both connected to the same database
- 1 starts the `BEGIN TRANSACTION` while the other does not
- after updating the one that has began transaction, the other does not reflect the results
  - this is because `COMMIT` has not been initiated and thus the transaction has not been fully completed, displaying the atomicity feature

## Isolation example

- open 2 terminals, both connected to the same database
- both start the `BEGIN TRANSACTION`
- update the 1st terminal, then try updating the 2nd terminal
  - the 1st terminal will be updated successfully
  - the 2nd terminal will hang
  - this means that transactions could be run concurrently, but effectively they will be executed sequentially
- 2nd terminal will only complete after the 1st terminal perform a `COMMIT;`

## SQL code examples

### Tables

```sql
CREATE TABLE payments (
    customer_name varchar(128),
    processed_at date,
    amount int
);

CREATE TABLE balances (
    username varchar(128),
    balance int
);

CREATE TABLE large_table (
    random_int int
);

INSERT INTO payments VALUES ('clement', '2019-12-15', 10);
INSERT INTO payments VALUES ('antoine', '2020-01-01', 100);
INSERT INTO payments VALUES ('clement', '2020-01-02', 10);
INSERT INTO payments VALUES ('antoine', '2020-01-02', 100);
INSERT INTO payments VALUES ('antoine', '2020-01-03', 100);
INSERT INTO payments VALUES ('simon', '2020-02-05', 1000);
INSERT INTO payments VALUES ('antoine', '2020-02-01', 100);
INSERT INTO payments VALUES ('clement', '2020-02-03', 10);
INSERT INTO payments VALUES ('meghan', '2020-01-12', 80);
INSERT INTO payments VALUES ('meghan', '2020-01-13', 70);
INSERT INTO payments VALUES ('meghan', '2020-01-14', 90);
INSERT INTO payments VALUES ('alex', '2019-12-11', 10);
INSERT INTO payments VALUES ('clement', '2020-02-01', 10);
INSERT INTO payments VALUES ('marli', '2020-01-18', 10);
INSERT INTO payments VALUES ('alex', '2019-12-15', 10);
INSERT INTO payments VALUES ('marli', '2020-01-25', 10);
INSERT INTO payments VALUES ('marli', '2020-02-02', 10);

INSERT INTO balances VALUES ('antoine', 0);
INSERT INTO balances VALUES ('clement', 1000);

INSERT INTO large_table (random_int)
SELECT round(random() * 1000000000)
FROM generate_series(1, 50000000) s(i);
```

### Queries

```sql
/*
Powerful Queries
*/

-- Sum the number of payments for each user.
SELECT customer_name, count(*)
FROM payments
GROUP BY customer_name
ORDER BY count DESC;

-- Sum the payment amounts for each month.
SELECT sum(amount), extract(year from processed_at) as year, extract(month from processed_at) as month
FROM payments
GROUP BY month, year
ORDER BY sum DESC;

-- Sum the payment amounts for each month for each user.
SELECT customer_name, sum(amount), extract(year from processed_at) as year, extract(month from processed_at) as month
FROM payments
GROUP BY customer_name, month, year
ORDER BY customer_name DESC;

-- Find the largest single-user payments for each month.
SELECT max(amount), year, month
FROM (
    SELECT customer_name, sum(amount) as amount, extract(year from processed_at) as year, extract(month from processed_at) as month
    FROM payments
    GROUP BY customer_name, month, year
) AS monthly_sums
GROUP BY year, month;

/*
Transaction
*/

-- Transfer 100 from Clement to Antoine.
BEGIN TRANSACTION;
UPDATE balances SET balance = balance - 100 WHERE username = 'clement';
UPDATE balances SET balance = balance + 100 WHERE username = 'antoine';
COMMIT;

/*
Indexes

demonstrates database indexes
*/

-- Find the 10 largest ints.
SELECT * FROM large_table ORDER BY random_int DESC LIMIT 10;

-- Create an index on the ints in the table.
CREATE INDEX large_table_random_int_idx ON large_table(random_int);
```
